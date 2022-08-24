// const { initializeApp } = require("firebase-admin/app");
// const { getAuth } = require("firebase-admin/auth");
// const firebaseConfig = require("../config.js");
// const app = initializeApp(firebaseConfig);

// const fireAuth = async (req, res, next) => {
//   try {
//     // console.log("token ", req.cookies["token"]);
//     if (
//       req.originalUrl !== "/api/v0.0.1/user/login" &&
//       req.originalUrl !== "/api/v0.0.1/user/register" &&
//       req.originalUrl !== "/api/v0.0.1/user/isRegistered"
//     ) {
//       getAuth(app)
//         .verifyIdToken(req.headers.authorization)
//         .then(async (decodedToken) => {
//           const uid = decodedToken.uid;
//           const user = await varifyToken(uid);
//           req.body.user = user;
//           // console.log(uid,"uid is --",user)
//           next();
//         })
//         .catch((error) => {
//           console.log("erroir", error);
//           return res.status(401).json({ msg: "success" });
//         });
//     } else next();
//   } catch (err) {
//     console.log("auth error", err);
//     return res.status(401).json({ msg: "success" });
//   }
// };

// module.exports = { varifyToken, auth, fireAuth };
