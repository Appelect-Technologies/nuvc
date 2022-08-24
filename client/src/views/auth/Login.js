import React from "react";
import login from "../../asstes/logo/favicon.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../auth/auth";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const history = useHistory();
  const auth = getAuth(app);
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (data.email === "") {
      toast.error("Please enter email!");
      return;
    }
    if (data.password === "") {
      toast.error("Please enter password!");
      return;
    }
    // console.log("Login", data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log("user cread ", userCredential);
        toast.success("Successfully  Loged in");
        history.push("/digitalLearning");
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("Please enter valid creadential!");
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
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(e) =>
                setData((p) => ({ ...p, email: e.target.value }))
              }
            />
          </div>
          <br />
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <i class="fas fa-key"></i>
            </span>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="addon-wrapping"
              onChange={(e) =>
                setData((p) => ({ ...p, password: e.target.value }))
              }
            />
          </div>
          <p
            class="fst-italic text-danger"
            style={{ textAlign: "right" }}
            onClick={() => history.push("/reset")}
          >
            forgot password?
          </p>

          <button
            type="button"
            class="btn btn-dark form-control"
            onClick={handleLogin}
          >
            Login <i class="fas fa-long-arrow-alt-right"></i>
          </button>
          <br />
          <br />
          <button
            type="button"
            class="btn btn-success form-control"
            onClick={() => history.push("/reg")}
          >
            New user? Register hare
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
