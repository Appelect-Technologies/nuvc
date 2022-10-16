const { getAuth } = require("firebase-admin/auth");
var SibApiV3Sdk = require("sib-api-v3-sdk");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../../utils/mailer");
const admin = require("firebase-admin");
const ejs = require("ejs");
const path = require("path");

var defaultClient = SibApiV3Sdk.ApiClient.instance;

const register = async (req, res) => {
  try {
    const { name, email, password, role = "student" } = req.body;
    const { uid } = await getAuth(global.firebaseApp).createUser({
      email: email,
      emailVerified: true,
      password: password,
      displayName: name,
      photoURL: "http://www.example.com/12345678/photo.png",
      disabled: false,
    });

    // sending email verification link to user
    // const code = jwt.sign(
    //   { type: "student", id: uid },
    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: process.env.EMAIL_VERIFICATION_EXPIRATION,
    //   }
    // );
    // const html = await ejs.renderFile(
    //   path.join(
    //     path.resolve(__dirname, "../../"),
    //     "templates",
    //     "email-verification.ejs"
    //   ),
    //   {
    //     // SERVER_URL: process.env.SERVER_URL,
    //     FRONTEND_URL: process.env.CLIENT_FRONTEND_URL,
    //     VERIFICATION_URL: `${process.env.SERVER_URL}/api/verify-email?code=${code}`,
    //   }
    // );
    // sendMail(email, html);
    res.status(200).json({ msg: "success" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "fail" });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { code } = req.query;
    if (!code) throw new Error("Error occured");
    const parsed = jwt.verify(code, process.env.JWT_SECRET);
    if (!parsed) throw new Error("Session Expired");
    const user = await admin
      .auth(global.firebaseApp)
      .updateUser(parsed.id, { emailVerified: true });

    // sending registration successful email
    const html = await ejs.renderFile(
      path.join(
        path.resolve(__dirname, "../../"),
        "templates",
        "registration-successful.ejs"
      ),
      {
        FRONTEND_URL: process.env.CLIENT_FRONTEND_URL,
      }
    );
    sendMail(user.email, html);
    res.redirect(process.env.CLIENT_FRONTEND_URL + "/login");
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send(`<h1>Failed to verify email, please try again</h1>`);
  }
};

module.exports = { register, verifyEmail };
