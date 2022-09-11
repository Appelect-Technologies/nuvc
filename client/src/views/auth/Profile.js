import React from "react";
import { getAuth } from "firebase/auth";
import { app, Signout } from "../../auth/auth";

function Profile() {
  const auth = getAuth(app);
  return (
    <div className="container">
      <div style={{ padding: 25 }}>
        <center>
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 200,
              background: "#f9f9f9",
              overflow: "hidden",
            }}
          >
            <img
              //   src={auth.currentUser && auth.currentUser.photoURL}
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              style={{
                width: 160,
                height: 160,
                borderRadius: 200,
                //   background: "red",
              }}
              alt="pic"
            />
          </div>
          <div
            class="card-body"
            style={{ padding: 20, width: 400, border: "1px solid", margin: 15 }}
          >
            <h5 class="card-title">
              {auth.currentUser && auth.currentUser.displayName}
            </h5>

            <p class="card-text">
              <b>Email : </b> {auth.currentUser && auth.currentUser.email}
            </p>

            <a href="#" class="btn btn-primary" onClick={() => Signout()}>
              Logout
            </a>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Profile;

//   email: email,
//       emailVerified: false,
//       password: password,
//       displayName: name,

//       photoURL:
