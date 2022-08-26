require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const crypto = require("crypto");
const multer = require("multer");
const fs = require("fs");
const aws = require("aws-sdk");
const helmet = require("helmet");
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

// const { initializeApp } = require("firebase-admin/app");
const firebaseConfig = require("./config.js");

const admin = require("firebase-admin");

global.firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

require("./db");

const { register } = require("./apis/users/register.js");
app.get("/reg", (req, res) => {
  res.send("hii").end();
});
app.post("/api/reg", register);

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET,
  region: process.env.REGION,
  Bucket: process.env.BUCKET,
  signatureVersion: "v4",
});

const s3 = new aws.S3({ signatureVersion: "v4" });

//
// global.rootDir = __dirname;

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

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.R_KEY,
  key_secret: process.env.R_SECRATE,
});

const JOB = require("./models/Job");
const DigitalLearning = require("./models/DigitalLearning.js");
const JobApply = require("./models/JobApply.js");

app.post("/pay", async (req, res) => {
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

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

//pay 10
const pay_payid = process.env.PAYID;
const pay_salt = process.env.PAYSALT;

//  email,
// name: displayName,
// phone: phoneNumber,
app.post("/pay10", async (req, res) => {
  try {
    const application = null;
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

        payment10(job.application_fee_dis, req, res);
      } else {
        let job = await JOB.findOne({ _id: req.body.id });
        console.log("jobid", job, req.body.id);
        if (!job) return res.status(400).json({ msg: "bad request" });
        payment10(job.application_fee, req, res);
      }
    } else {
      let job = await DigitalLearning.findOne({ _id: req.body.id });
      console.log("jobid", job, req.body.id);
      if (!job) return res.status(400).json({ msg: "bad request" });
      payment10(job.price, req, res);
    }
    // payment10(1, req, res);
  } catch (er) {
    console.log(er);
  }
});
var pay = require("./pay10Util");
const { userSubscription10 } = require("./apis/users/subscription.js");
const payment10 = async (amount, req, res) => {
  const result = req.body;
  console.log("response ->>>>>>>>", result);
  const hostname = "https://nuvc.org";

  var data = {
    AMOUNT: parseInt(amount) * 100,
    CURRENCY_CODE: 356,
    CUST_NAME: result.name || "test name",
    CUST_EMAIL: result.email || "test@gamil.com",
    CUST_PHONE: result.phone || "9876543212",
    CUST_STREET_ADDRESS1: "Vyapar Marg, Sector 4",
    CUST_CITY: "Noida",
    CUST_STATE: "Haryana",
    CUST_COUNTRY: "India",
    CUST_ZIP: "201301",
    CUST_SHIP_NAME: result.name || "test name",
    CUST_SHIP_PHONE: result.phone || "9876543212",
    CUST_SHIP_CITY: "Noida",
    CUST_SHIP_STATE: "Haryana",
    CUST_SHIP_COUNTRY: "India",
    CUST_SHIP_STREET_ADDRESS1: "Vyapar Marg, Sector 4",
    CUST_SHIP_ZIP: "201301",
    ORDER_ID: Math.random().toString(16, 10).slice(2, 16).toUpperCase(),
    PAY_ID: pay_payid,
    PRODUCT_DESC: result.id + ":" + result.uid,
    RETURN_URL: hostname + "/response",
    TXNTYPE: "SALE",
  };

  var transaction = pay.createTransaction(data);
  var gateway_url = pay.getPaymentUrl();
  console.log("___", gateway_url);
  var form_html =
    '<form method="post" action="' + gateway_url + '" name="payForm">';
  var formKeys = Object.keys(transaction);
  formKeys.forEach(function (key) {
    form_html +=
      '<input type="hidden" name="' +
      key +
      '" value="' +
      transaction[key] +
      '"/>';
  });
  form_html +=
    '</form><script type="text/javascript">document.payForm.submit();</script>';

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<!DOCTYPE html><html><head><title>Demo Checkout Page</title></head><body><center><h1>Please wait</h1><p>Do not refresh this page...</p></center>"
  );
  res.write(form_html);
  res.write("</body></html>");
  res.end();
};

// uid,
// email,
// type,
// subscriptions: {
//   id,
//   amount,
//   paymentID,
//   orderId,
// },
//pass these object
app.post("/response", (req, res) => {
  console.log("collect ", req.body);
  // collectRequestData(req, result => {
  let result = req.body;
  if (result) {
    const decrypted = decryptMessage(result.ENCDATA);
    console.log("decryped data ", decrypted);
    const arr = decrypted.split("~");
    console.log("responce data ", arr);
    var response_html = '<table border="1">';
    let rec = {
      id: "",
      uid: "",
      type: "course",
      email: "",
      amount: "",
      paymentID: "",
      orderId: "",
    };
    let pStatus = false;

    arr.forEach((row) => {
      const cols = row.split("=");
      if (cols.length == 2) {
        response_html +=
          "<tr><td>" + cols[0] + "</td><td>" + cols[1] + "</td></tr>";

        if (cols[0].includes("STATUS") && cols[1] == "Captured") {
          pStatus = true;
        }

        if (cols[0].includes("PAY_ID")) {
          rec.paymentID = cols[1];
        }
        if (cols[0].includes("ORDER_ID")) {
          rec.orderId = cols[1];
        }
        if (cols[0].includes("AMOUNT")) {
          rec.amount = cols[1];
        }
        if (cols[0].includes("CUST_EMAIL")) {
          rec.email = cols[1];
        }
        if (cols[0].includes("PRODUCT_DESC")) {
          rec.id = cols[1].split(":")[0];
          rec.uid = cols[1].split(":")[1];
        }
      }
    });
    userSubscription10(rec);

    response_html += "</table>";

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<style>td{padding:1em}</style>");
    res.write("<center style='margin:3rem;'>" + response_html + "</center>");
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<h2>Invalid Request</h2>");
    res.end();
  }
  // })
});

function collectRequestData(request, callback) {
  const FORM_URLENCODED = "application/x-www-form-urlencoded";
  if (request.headers["content-type"] === FORM_URLENCODED) {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      callback(parse(body));
    });
  } else {
    callback(null);
  }
}

function decryptMessage(message) {
  const secret = pay.credentails.merchant_hosted_key;
  const iv = secret.substring(0, 16);
  var decryptor = crypto.createDecipheriv("AES-256-CBC", secret, iv);
  return decryptor.update(message, "base64", "utf8") + decryptor.final("utf8");
}

app.listen(80, () => {
  console.log("server lesten on 80");
});

// module.exports = app;
