import React from "react";
import login from "../../../asstes/logo/favicon.png";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";
import { Signin } from "../../../auth/auth";

function Register() {
  const history = useHistory();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const redirectionURL = new URLSearchParams(location.search).get("redirect");

  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleRegister = async () => {
    if (data.name === "") {
      toast.error("Please enter name!");
      return;
    }
    if (data.email === "") {
      toast.error("Please enter email!");
      return;
    }
    if (data.password === "") {
      toast.error("Please enter password!");
      return;
    }
    if (data.password !== data.cpassword) {
      toast.error("password and confirm password should match!");
      return;
    }

    try {
      setIsSubmitting(true);
      //   registering the user
      await axios.post(config.baseUrl + config.register, data);
      //   signing in the user
      await Signin(data.email, data.password, () =>
        Boolean(redirectionURL)
          ? history.push(redirectionURL)
          : history.push("/")
      );
      toast.success("User registered successfully");
      // history.push("/");
      // handleNext();
    } catch (error) {
      console.log("reg err", error);
      toast.error("User registeration failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRedirectToLogin = () => {
    if (redirectionURL) {
      history.push(`/login?redirect=${redirectionURL}`);
    } else {
      history.push("/login");
    }
  };

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div class="card m-auto my-4" style={{ maxWidth: 300 }}>
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
            <i class="far fa-user"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="addon-wrapping"
            name="name"
            onChange={handleChange}
          />
        </div>
        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fas fa-phone"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Phone Number"
            aria-label="Number"
            aria-describedby="addon-wrapping"
            name="number"
            onChange={handleChange}
          />
        </div>
        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fas fa-user"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="email"
            onChange={handleChange}
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
            name="password"
            onChange={handleChange}
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
            placeholder="Confirm Password"
            aria-label="cPassword"
            aria-describedby="addon-wrapping"
            name="cpassword"
            onChange={handleChange}
          />
        </div>
        <br />
        <button
          type="button"
          class="btn btn-dark form-control"
          onClick={handleRegister}
          disabled={isSubmitting}
        >
          Register <i class="fas fa-long-arrow-alt-right"></i>
        </button>
        <br />
        <br />
        <button
          disabled={isSubmitting}
          type="button"
          class="btn btn-danger form-control"
          onClick={handleRedirectToLogin}
        >
          Have an Account? Login hare
        </button>
      </div>
    </div>
  );
}

export default Register;
