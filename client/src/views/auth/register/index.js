import React, { Fragment, useState } from "react";
import Jobs from "./jobs";
import Register from "./register";

function Apply() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((pre) => pre + 1);
  };

  const handlePrev = () => {
    setActiveStep((pre) => pre - 1);
  };

  const handleRenderStep = () => {
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
