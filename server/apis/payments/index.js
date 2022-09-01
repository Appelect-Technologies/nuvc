const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const JobApply = require("../../models/JobApply");
const JOB = require("../../models/Job");
const DigitalLearning = require("../../models/DigitalLearning");

const { userSubscription10 } = require("../../apis/users/subscription");
const pay = require("../../pay10Util");

const pay_payid = process.env.PAYID;
const pay_salt = process.env.PAYSALT;

router.post("/payment", async (req, res) => {
  try {
    if (req.body.type == "job") {
      const application = await JobApply.findOne({
        jobApplyId: req.body.id + req.body.email,
      }).lean();

      if (!application) {
        return res.status(404).redirect(process.env.CLIENT_FRONTEND_URL);
      }

      let job = await JOB.findOne({ _id: req.body.id }).lean();
      if (!job) {
        return res.status(404).redirect(process.env.CLIENT_FRONTEND_URL);
      }

      if (application.category === "SC" || application.category === "PC") {
        makeJobPayment(job.application_fee_dis, req, res);
      } else {
        makeJobPayment(job.application_fee, req, res);
      }
    } else if (req.body.type == "course") {
      let course = await DigitalLearning.findOne({ _id: req.body.id });
      //   console.log("jobid", job, req.body.id);
      if (!course) return res.status(404).json({ msg: "bad request" });
      makeCoursePayment(course.price, req, res);
    } else {
      res.redirect(process.env.CLIENT_FRONTEND_URL);
    }
  } catch (er) {
    // console.log(er);
    res.redirect(process.env.CLIENT_FRONTEND_URL);
  }
});

async function makeCoursePayment(amount, req, res) {
  const result = req.body;
  console.log(amount, "response ->>>>>>>>", result);
  // return;

  const hostname = process.env.SERVER_URL;
  const data = {
    AMOUNT: parseInt(amount) * 100,
    CURRENCY_CODE: 356,
    CUST_NAME: result.name,
    CUST_EMAIL: result.email,
    CUST_PHONE: result.phone,
    CUST_STREET_ADDRESS1: "",
    CUST_CITY: "",
    CUST_STATE: "",
    CUST_COUNTRY: "India",
    CUST_ZIP: "",
    CUST_SHIP_NAME: result.name,
    CUST_SHIP_PHONE: result.phone,
    CUST_SHIP_CITY: "",
    CUST_SHIP_STATE: "",
    CUST_SHIP_COUNTRY: "",
    CUST_SHIP_STREET_ADDRESS1: "",
    CUST_SHIP_ZIP: "",
    ORDER_ID: Math.random().toString(16, 10).slice(2, 16).toUpperCase(),
    PAY_ID: pay_payid,
    PRODUCT_DESC: result.id + ":" + result.uid,
    RETURN_URL: hostname + "/course-payment-response",
    TXNTYPE: "SALE",
  };
  // pay.isProdMode("prod");
  const transaction = pay.createTransaction(data);
  const gateway_url = pay.getPaymentUrl();
  console.log("___", transaction, gateway_url);

  let form_html =
    '<form method="post" action="' + gateway_url + '" name="payForm">';
  let formKeys = Object.keys(transaction);
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
}

async function makeJobPayment(amount, req, res) {
  const result = req.body;

  // console.log(amount, "response ->>>>>>>>", result);
  // return testResponse(req, res);

  const hostname = process.env.SERVER_URL;
  const data = {
    AMOUNT: parseInt(amount) * 100,
    CURRENCY_CODE: 356,
    CUST_NAME: result.name,
    CUST_EMAIL: result.email,
    CUST_PHONE: result.phone,
    CUST_STREET_ADDRESS1: "",
    CUST_CITY: "",
    CUST_STATE: "",
    CUST_COUNTRY: "India",
    CUST_ZIP: "",
    CUST_SHIP_NAME: result.name,
    CUST_SHIP_PHONE: result.phone,
    CUST_SHIP_CITY: "",
    CUST_SHIP_STATE: "",
    CUST_SHIP_COUNTRY: "India",
    CUST_SHIP_STREET_ADDRESS1: "",
    CUST_SHIP_ZIP: "",
    ORDER_ID: Math.random().toString(16, 10).slice(2, 16).toUpperCase(),
    PAY_ID: pay_payid,
    PRODUCT_DESC: result.id + ":" + result.uid,
    RETURN_URL: hostname + "/job-payment-response",
    TXNTYPE: "SALE",
  };
  // pay.isProdMode("prod");
  const transaction = pay.createTransaction(data);
  const gateway_url = pay.getPaymentUrl();
  // console.log("___", transaction, gateway_url);

  let form_html =
    '<form method="post" action="' + gateway_url + '" name="payForm">';
  let formKeys = Object.keys(transaction);
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
}

function decryptMessage(message) {
  const secret = pay.credentails.merchant_hosted_key;
  const iv = secret.substring(0, 16);
  var decryptor = crypto.createDecipheriv("AES-256-CBC", secret, iv);
  return decryptor.update(message, "base64", "utf8") + decryptor.final("utf8");
}

// async function testResponse(req, res) {
//   try {
//     console.log("collect ", req.body);
//     let result = req.body;
//     let rec = {
//       id: "63090b13d7abd31d4812cbc6",
//       uid: "XDk4C7mHIWWjFyCgIFtOyaUkcpf2",
//       type: "course",
//       email: "tedovov867@ulforex.com",
//       amount: "2",
//       paymentID: "pay_001",
//       orderId: "order_0012345",
//     };
//     await userSubscription10(rec);
//     response_html += "</table>";
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.write("<style>td{padding:1em}</style>");
//     res.write("<center style='margin:3rem;'>" + response_html + "</center>");
//     res.end();
//   } catch (error) {
//     res.send(error);
//   }
// }

router.post("/job-payment-response", async (req, res) => {
  console.log("collect ", req.body);

  try {
    let result = req.body;
    if (result) {
      const decrypted = decryptMessage(result.ENCDATA);
      // console.log("decryped data ", decrypted);
      const arr = decrypted.split("~");
      // console.log("responce data ", arr);
      var response_html = '<table border="1">';
      let rec = {
        id: "",
        uid: "",
        type: "job",
        email: "",
        amount: "",
        paymentID: "",
        orderId: "",
      };
      let pStatus = false;

      arr.forEach((row) => {
        const cols = row.split("=");
        console.log(cols);
        if (cols.length == 2) {
          response_html +=
            "<tr><td>" + cols[0] + "</td><td>" + cols[1] + "</td></tr>";

          if (cols[0] === "STATUS" && cols[1]?.toLowerCase() == "captured") {
            pStatus = true;
          }

          if (cols[0] === "PAY_ID") {
            rec.paymentID = cols[1];
          }
          if (cols[0] === "ORDER_ID") {
            rec.orderId = cols[1];
          }
          if (cols[0] === "AMOUNT") {
            rec.amount = parseInt(cols[1]) / 100;
          }
          if (cols[0] === "CUST_EMAIL") {
            rec.email = cols[1];
          }
          if (cols[0] === "PRODUCT_DESC") {
            rec.id = cols[1].split(":")[0];
            rec.uid = cols[1].split(":")[1];
          }
        }
      });
      console.log("this is rec: ", rec, pStatus);

      if (pStatus) {
        // if payment if captured then update it on database
        await userSubscription10(rec);
        response_html += "</table>";
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<style>td{padding:1em}</style>");
        res.write(
          "<center style='margin:3rem;'>" + response_html + "</center>"
        );
        res.end();
      } else {
        throw new Error("Error occured");
      }
    } else {
      throw new Error("Error occured");
    }
  } catch (error) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<h2>Invalid Request</h2>");
    res.end();
  }
});

router.post("/course-payment-response", async (req, res) => {
  console.log("collect ", req.body);
  try {
    let result = req.body;
    if (result) {
      const decrypted = decryptMessage(result.ENCDATA);
      // console.log("decryped data ", decrypted);
      const arr = decrypted.split("~");
      // console.log("responce data ", arr);
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
        console.log(cols);
        if (cols.length == 2) {
          response_html +=
            "<tr><td>" + cols[0] + "</td><td>" + cols[1] + "</td></tr>";

          if (cols[0] === "STATUS" && cols[1]?.toLowerCase() == "captured") {
            pStatus = true;
          }

          if (cols[0] === "PAY_ID") {
            rec.paymentID = cols[1];
          }
          if (cols[0] === "ORDER_ID") {
            rec.orderId = cols[1];
          }
          if (cols[0] === "AMOUNT") {
            rec.amount = parseInt(cols[1]) / 100;
          }
          if (cols[0] === "CUST_EMAIL") {
            rec.email = cols[1];
          }
          if (cols[0] === "PRODUCT_DESC") {
            rec.id = cols[1].split(":")[0];
            rec.uid = cols[1].split(":")[1];
          }
        }
      });
      console.log("this is rec: ", rec, pStatus);

      if (pStatus) {
        // if payment if captured then update it on database
        await userSubscription10(rec);
        response_html += "</table>";
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<style>td{padding:1em}</style>");
        res.write(
          "<center style='margin:3rem;'>" + response_html + "</center>"
        );
        res.end();
      } else {
        throw new Error("Error occured");
      }
    } else {
      throw new Error("Error occured");
    }
  } catch (error) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<h2>Invalid Request</h2>");
    res.end();
  }
});

const payment10 = async (amount, req, res) => {
  const result = req.body;
  console.log(amount, "response ->>>>>>>>", result);
  return;

  const hostname = process.env.SERVER_URL;
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
  // pay.isProdMode("prod");
  var transaction = pay.createTransaction(data);
  var gateway_url = pay.getPaymentUrl();
  console.log("___", transaction, gateway_url);
  s;

  return res.sendStatus(200);
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

module.exports = router;

/**
 * router.post("/response", (req, res) => {
  console.log("collect ", req.body);
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
      console.log(cols);
      if (cols.length == 2) {
        response_html +=
          "<tr><td>" + cols[0] + "</td><td>" + cols[1] + "</td></tr>";

        if (cols[0] === "STATUS" && cols[1]?.toLowerCase() == "captured") {
          pStatus = true;
        }

        if (cols[0] === "PAY_ID") {
          rec.paymentID = cols[1];
        }
        if (cols[0] === "ORDER_ID") {
          rec.orderId = cols[1];
        }
        if (cols[0] === "AMOUNT") {
          rec.amount = parseInt(cols[1]) / 100;
        }
        if (cols[0] === "CUST_EMAIL") {
          rec.email = cols[1];
        }
        if (cols[0] === "PRODUCT_DESC") {
          rec.id = cols[1].split(":")[0];
          rec.uid = cols[1].split(":")[1];
        }
      }
    });
    console.log("this is rec: ", rec, pStatus);

    if (pStatus) {
      // if payment if captured then update it on database
      userSubscription10(rec);
    }

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
});
 */
