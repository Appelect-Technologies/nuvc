import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { app } from "../../auth/auth";

function VerifyEmail() {
  const auth = getAuth(app);
  const history = useHistory();

  useEffect(() => {
    if (auth && auth.currentUser && auth.currentUser.emailVerified) {
      history.push("/");
    }
    // console.log(auth);
  }, []);

  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-header">
          <h5 className="card-title text-center">Verify Your Email</h5>
        </div>
        <div className="card-body">
          <p className="card-text text-center">
            You’re almost done! Please verify your email before proceeding
            further
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
