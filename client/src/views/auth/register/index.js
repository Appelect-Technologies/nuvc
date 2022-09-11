import React, { useState } from "react";
import Jobs from "./jobs";
import { getAuth } from "firebase/auth";
import Register from "./register";
import { app } from "../../../auth/auth";

function Apply() {
  const auth = getAuth(app);
  return <Register />;
}

export default Apply;
