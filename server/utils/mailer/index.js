const nodemailer = require("nodemailer");
const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "eu-west-1",
});

async function sendMail(email, html) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.mail.eu-west-1.awsapps.com",
      port: 465,
      secure: true,
      auth: {
        // user: "testuser@nuvc.org",
        // pass: "test@123",
        user: process.env.AWS_WORKMAIL_USER_EMAIL,
        pass: process.env.AWS_EMAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.AWS_WORKMAIL_USER_EMAIL,
      to: email,
      subject: "no reply",
      html: html,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log("error", error);
    return error;
  }
}

module.exports = {
  sendMail,
};
