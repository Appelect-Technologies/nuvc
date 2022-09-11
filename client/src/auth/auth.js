import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { toast } from "react-toastify";

const app = initializeApp(firebaseConfig);

function Signin(email, password, cb = () => {}) {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password).then((data) => {
    if (!data.user.emailVerified) {
      // if email is not verified then send an email
      sendEmailVerification(data.user, { url: "https://nuvc.org" });
      // Signout();
    } else {
      cb();
    }
  });
}

function Signout(cb = () => {}) {
  const auth = getAuth(app);
  signOut(auth)
    .then(() => {
      toast.success("Successfully Logout");
      cb && cb();
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error occured");
      //   errCb(error.message);
    });
}
export { app, Signout, Signin };
