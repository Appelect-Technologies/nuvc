import React, { useState } from "react";
import Jobs from "./jobs";
import { getAuth } from "firebase/auth";
import Register from "./register";
import { app } from "../../../auth/auth";

function Apply() {
  const auth = getAuth(app);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((pre) => pre + 1);
  };

  const handlePrev = () => {
    setActiveStep((pre) => pre - 1);
  };

  const handleRenderStep = () => {
    if (auth.currentUser) return <Jobs />;
    switch (activeStep) {
      case 0:
        return <Register handleNext={handleNext} />;
      case 1:
        return <Jobs />;
    }
  };
  return <div className="container-fluid">{handleRenderStep()}</div>;
}

export default Apply;
