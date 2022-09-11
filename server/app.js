require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const aws = require("aws-sdk");
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

// db
const JOB = require("./models/Job");
const DigitalLearning = require("./models/DigitalLearning.js");
const JobApply = require("./models/JobApply.js");

// misseleneous
const Razorpay = require("razorpay");
const PaymentRouter = require("./apis/payments");
const { register } = require("./apis/users/register");
const { userSubscription10 } = require("./apis/users/subscription.js");
var pay = require("./pay10Util");

// const { initializeApp } = require("firebase-admin/app");
const firebaseConfig = require("./config.js");

const admin = require("firebase-admin");

global.firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

require("./db");

app.post("/api/reg", register);

app.get("/v", (req, res) => res.sendStatus(200));

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET,
  region: process.env.REGION,
  Bucket: process.env.BUCKET,
  signatureVersion: "v4",
});

const s3 = new aws.S3({ signatureVersion: "v4" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = { ...req.file, ...req.body };
  if (file) {
    const filePath = path.join(__dirname, "uploads", file.filename);
    try {
      fs.readFile(filePath, (err, fileBody) => {
        if (err) {
          res.status(400).json({ error: "Error in uploading files" });
          // console.log("Error", err);
        } else {
          let params = {
            Bucket: process.env.BUCKET,
            Key: file.filename,
            Body: fileBody,
          };
          s3.upload(params, (err, result) => {
            if (err) {
              // console.log("error in s3 upload", err);
              res.status(400).json({ error: "Error in uploading files" });
            } else {
              // console.log("S3 Response", result);
              res.status(200).json({ file: result.Location });
            }
          });
        }
      });
    } catch (error) {
      // console.log("catch error", error);
      res.status(400).json({ error: "Error in uploading files" });
    } finally {
      setTimeout(() => {
        fs.unlinkSync(filePath);
      }, 5000);
    }
  } else {
    console.log("file object error", file);
    res.status(400).json({ error: "Error in uploading files" });
  }
});

app.use("/api", require("./routes/dataRoutes"));

const razorpay = new Razorpay({
  key_id: process.env.R_KEY,
  key_secret: process.env.R_SECRATE,
});

app.get("/pay", async (req, res) => {
  try {
    // const application = null;
    if (req.body.type == "job") {
      const application = await JobApply.findOne({
        jobApplyId: req.body.id + req.body.email,
      });
      if (!application) {
        return res.status(400).json({ msg: "apply first" });
      }

      if (application.category === "SC" || application.category === "PC") {
        let job = await JOB.findOne({ _id: req.body.id });

        if (!job) return res.status(400).json({ msg: "bad request" });

        payment(job.application_fee_dis, req, res);
      } else {
        let job = await JOB.findOne({ _id: req.body.id });
        console.log("jobid", job, req.body.id);
        if (!job) return res.status(400).json({ msg: "bad request" });
        payment(job.application_fee, req, res);
      }
    } else {
      let job = await DigitalLearning.findOne({ _id: req.body.id });
      console.log("jobid", job, req.body.id);
      if (!job) return res.status(400).json({ msg: "bad request" });
      payment(job.price, req, res);
    }
  } catch (er) {
    console.log(er);
  }
});

const payment = async (amount, req, res) => {
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: "hftryukijhgutyujh78iou98766543567",
    payment_capture: 1,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

// app.use(express.static(path.join(__dirname, "/client/build")));
app.use(PaymentRouter);
app.get("/success", (req, res) => {
  return res.sendFile(
    path.join(__dirname, "templates", "payment-successful.html")
  );
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(80, () => {
  console.log("server lesten on 80");
});
