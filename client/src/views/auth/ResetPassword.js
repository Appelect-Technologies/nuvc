import React from "react";
import login from "../../asstes/logo/seed.png";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../auth/auth";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function ResetPassword() {
  const history = useHistory();
  const auth = getAuth(app);
  const [data, setData] = React.useState("");

  const handleResetPassword = () => {
    if (data === "") {
      toast.error("Please enter email!");
      return;
    }

    console.log("reset password", data);

    sendPasswordResetEmail(auth, data)
      .then(() => {
        toast.success("Reset Link successfully send to your email");
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error);
        toast.error("Make seure you are connected with Internet!");
        toast.error("Please enter valid email!");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <div class="card">
        <center>
          <img
            src={login}
            alt="login"
            style={{
              width: 60,
              marginTop: 10,
            }}
          />
        </center>
        <div class="card-body">
          {/* <h5 class="card-title">Login</h5> */}
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <i class="fas fa-user"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your registred email"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <br />

          <button
            type="button"
            class="btn btn-dark form-control"
            onClick={handleResetPassword}
          >
            Reset Password <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
