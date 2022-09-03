import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app, Signout } from "../../auth/auth";
import logo from "../../asstes/logo/favicon.png";

function Nav() {
  const auth = getAuth(app);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ paddingLeft: 30, paddingRight: 30, backgroundColor: "#5c007a" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          <img src={logo} alt="logo" style={{ width: 30 }} />
        </Link>
        <Link
          to="/creers"
          className="nav-link buttonGlow apply"
          // style={{
          //   background: "red",
          //   borderRadius: 5,
          //   fontWeight: "600",
          // }}
          href="#"
        >
          Apply Now
        </Link>
        <button
          className="navbar-toggler bg-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link" aria-current="page">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/program" className="nav-link" href="#">
                Program
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/process" className="nav-link" href="#">
                Process
              </Link>
            </li> */}

            <li className="nav-item">
              <Link to="/digitalLearning" className="nav-link" href="#">
                Digital Learning
              </Link>
            </li>

            <li className="nav-item">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vacancy
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/creers" className="dropdown-item" href="#">
                      Vacancy
                    </Link>
                  </li>

                  <li>
                    <Link to="/process" className="dropdown-item" href="#">
                      Apply Process
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/trainingCentre" className="nav-link" href="#">
              Training Centre
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link" href="#">
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blogs" className="nav-link" href="#">
                Blog
              </Link>
            </li>

            {auth && auth.currentUser ? (
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link" href="#">
                  Dashboard
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
          <Link
            to="/creers"
            className="nav-link a-glow"
            // style={{
            //   background: "#0d8dc8",
            //   borderRadius: 5,
            //   fontWeight: "600",
            //   marginRight: 5,
            // }}
            href="#"
          >
            Jobs
          </Link>

          {auth && auth.currentUser ? (
            <Fragment>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <Link to={"#"} onClick={() => Signout()} className="nav-link">
                Logout
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/reg" className="nav-link buttonGlow">
                Apply Now
              </Link>
              <Link to="/login" className="nav-link" href="#">
                Login
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
