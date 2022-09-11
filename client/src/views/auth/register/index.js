import React, { useState } from "react";
import Jobs from "./jobs";
import { getAuth } from "firebase/auth";
import Register from "./register";
import { app } from "../../../auth/auth";
import { useLocation } from "react-router-dom";

function Apply() {
  const auth = getAuth(app);
  const location = useLocation();
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

  return <Register handleNext={handleNext} />;
  return <div className="container-fluid">{handleRenderStep()}</div>;
}

export default Apply;
