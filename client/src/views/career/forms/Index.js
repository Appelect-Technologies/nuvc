import React from "react";
import Address from "./Address";
import Documentation from "./Documentation";
import JobLocation from "./JobLocation";
import Personal from "./Personal";
import Qulification from "./Qulification";
// import UserDetails from "./UserDetails";
// import AddressDetails from "./AddressDetails";
// import Confirmation from "./Confirmation";
import { v4 as uuidv4 } from "uuid";
import { useParams, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { checkApplyStatus } from "../../../utils/dataApi";
import { auth } from "firebase-admin";
import pay from "../../../utils/pay";
import Pay from "./Pay";

// Qualification
// State
// District
// Block/tehsil
// Village
// Pincode
// Aadhaar number

function Index({ user }) {
  const [state, setState] = React.useState({
    step: 1,
  });
  const { jobId } = useParams();
  const history = useHistory();
  // const [jobId, setJobId] = React.useState(uuidv4());

  const nextStep = () => {
    const { step } = state;
    setState({
      step: step + 1,
    });
  };

  const prevStep = () => {
    const { step } = state;
    setState({
      step: step - 1,
    });
  };

  const handleChange = (event) => {
    setState((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  React.useEffect(() => {
    async function fatchData() {
      const res = await checkApplyStatus("?id=" + jobId + user.email);
      if (res && res.status == 201) {
        const { jobId } = res.data?.applyStatus;
        // pay(jobId, user.uid, res.data?.applyStatus);
        setState({ step: 6 });
        return;
      }

      if (res && res.status == 200) {
        const { step } = res.data?.applyStatus;
        setState({ step: step + 1 });
        return;
      }

      console.log("apply data", res?.data);
    }
    fatchData();
    return () => {
      setState({ step: 1 });
    };
  }, []);

  const { step } = state;
  // const inputValues = { firstName, lastName, email, address, city, state, zip };
  if (!jobId || jobId.length < 3) return <Redirect to="/creers" />;
  switch (step) {
    case 1:
      return (
        <Personal
          nextStep={nextStep}
          handleChange={handleChange}
          jobId={jobId}
          user={user}
          jobApplyId={jobId + user.email}
          //   inputValues={inputValues}
        />
      );
    case 2:
      return (
        <Address
          nextStep={nextStep}
          prevStep={prevStep}
          jobId={jobId}
          jobApplyId={jobId + user.email}

          //   handleChange={handleChange}
          //   inputValues={inputValues}
        />
      );
    case 3:
      return (
        <Qulification
          nextStep={nextStep}
          prevStep={prevStep}
          jobId={jobId}
          jobApplyId={jobId + user.email}

          //   inputValues={inputValues}
        />
      );
    case 4:
      return (
        <JobLocation
          nextStep={nextStep}
          prevStep={prevStep}
          jobId={jobId}
          jobApplyId={jobId + user.email}

          //   inputValues={inputValues}
        />
      );

    case 5:
      return (
        <Documentation
          nextStep={nextStep}
          prevStep={prevStep}
          jobId={jobId}
          jobApplyId={jobId + user.email}

          //   inputValues={inputValues}
        />
      );
    case 6:
      return (
        <Pay
          email={user.email}
          uid={user.uid}
          body={{
            email: user.email,
            phone: user.phone,
            jobId: jobId,
            name: user.displayName,
          }}
          id={jobId}
        />
      );
  }
}

export default Index;
