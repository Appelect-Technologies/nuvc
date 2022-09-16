import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const app = initializeApp(firebaseConfig);

function Signin(email, password) {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password).then((data) => {
    return data.user;
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
