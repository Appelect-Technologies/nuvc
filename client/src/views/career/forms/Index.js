import React, { useState } from "react";
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
import Thanku from "./thanku";
import Preview from "./preview";

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
  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false);
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

  async function fatchData() {
    try {
      const res = await checkApplyStatus("?id=" + jobId + user.email);
      const { isPaid, step } = res.data?.applyStatus;
      // pay(jobId, user.uid, res.data?.applyStatus);
      if (isPaid) {
        // setIsAlreadyApplied(true);
      } else {
        // setState({ step: step + 1 });
      }
      console.log("apply data", res?.data);
    } catch (error) {
      console.log("error occured: ", error);
    }
  }

  React.useEffect(() => {
    fatchData();
    return () => {
      setState({ step: 1 });
    };
  }, []);

  const { step } = state;
  // const inputValues = { firstName, lastName, email, address, city, state, zip };

  if (!jobId || jobId.length < 3) return <Redirect to="/creers" />;
  if (isAlreadyApplied) {
    // in case user has already applied for this post
    return (
      <div className="container">
        <div class="card shadow-sm" style={{ maxWidth: 400, margin: "auto" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            dataName="Layer 1"
            // width="574.17079"
            // height="411.08457"
            viewBox="0 0 574.17079 411.08457"
          >
            <path
              d="M870.10983,364.92228H555.91623a16.69541,16.69541,0,0,0-16.68029,16.6803v50.91879a16.69541,16.69541,0,0,0,16.68029,16.68029h314.1936a16.69541,16.69541,0,0,0,16.68029-16.68029V381.60258A16.69541,16.69541,0,0,0,870.10983,364.92228Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#f2f2f2"
            />
            <path
              d="M438.9146,655.54229h-125a1,1,0,1,1,0-2h125a1,1,0,0,1,0,2Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#3f3d56"
            />
            <path
              d="M420.56111,342.43613a9.377,9.377,0,0,0-1.92211,14.24941l-9.08746,19.40559,10.44581,8.39865,12.44837-27.58469a9.42779,9.42779,0,0,0-11.88461-14.469Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#ffb8b8"
            />
            <path
              d="M368.33938,350.31105l0,0a13.05812,13.05812,0,0,1,17.58295,3.94159l18.59476,27.84231,6.45546-14.23141a4,4,0,0,1,4.83541-2.16568l9.74332,3.04355a4,4,0,0,1,2.596,5.1011l-6.66961,19.6943a17.01913,17.01913,0,0,1-25.75845,8.5676l0,0a17.01884,17.01884,0,0,1-2.78742-2.39722L365.5293,370.42779A13.05811,13.05811,0,0,1,368.33938,350.31105Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#ccc"
            />
            <path
              d="M428.49247,321.54287a1.88245,1.88245,0,0,1,1.83514,1.92859l-.16051,6.46266.32406.02952-.11634,4.3894-.31652-.0395-.57507,23.15243a3.26453,3.26453,0,0,1-2.92174,3.16554l-14.72183,1.54985a2.471,2.471,0,0,1-2.72414-2.62444l2.2328-32.96741a3.0574,3.0574,0,0,1,2.58107-2.81459l14.21194-2.20786h0A1.88039,1.88039,0,0,1,428.49247,321.54287Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#3f3d56"
            />
            <path
              d="M417.09893,324.97408l7.47135-1.1607a.61877.61877,0,0,0,.52016-.54421h0a.70089.70089,0,0,1,.58914-.61644l1.57379-.24449a1.48516,1.48516,0,0,1,1.7127,1.50326l-.8089,33.56711a1.69559,1.69559,0,0,1-1.545,1.6481l-14.711,1.30791a1.30926,1.30926,0,0,1-1.42278-1.38351l1.98493-32.66277a2.11293,2.11293,0,0,1,1.78469-1.95971l1.659-.25773A1.05769,1.05769,0,0,0,417.09893,324.97408Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#fff"
            />
            <polygon
              points="69.522 398.946 80.954 398.945 86.391 354.849 69.518 354.851 69.522 398.946"
              fill="#ffb8b8"
            />
            <path
              d="M379.98689,640.13638h35.92975a0,0,0,0,1,0,0v13.88195a0,0,0,0,1,0,0H393.86882a13.88193,13.88193,0,0,1-13.88193-13.88193v0A0,0,0,0,1,379.98689,640.13638Z"
              transform="translate(483.0473 1049.66109) rotate(179.99483)"
              fill="#2f2e41"
            />
            <polygon
              points="34.386 398.946 45.818 398.945 51.255 354.849 34.382 354.851 34.386 398.946"
              fill="#ffb8b8"
            />
            <path
              d="M344.85119,640.13638h35.92975a0,0,0,0,1,0,0v13.88195a0,0,0,0,1,0,0H358.73312a13.88193,13.88193,0,0,1-13.88193-13.88193v0A0,0,0,0,1,344.85119,640.13638Z"
              transform="translate(412.77591 1049.66426) rotate(179.99483)"
              fill="#2f2e41"
            />
            <circle cx="67.86696" cy="66.30574" r="24.56103" fill="#ffb8b8" />
            <path
              d="M393.42211,376.476a37.85906,37.85906,0,0,0-18.27958-31.21223c-6.34533-3.73908-13.29081-5.19728-18.81648.32839a38.35409,38.35409,0,0,0-7.836,11.76114,50.5051,50.5051,0,0,0-.934,37.4904l13.15154,36.33391,30.43919,3.29758a4,4,0,0,0,4.42762-4.13644Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#2f2e41"
            />
            <path
              d="M362.63758,426.70339s-22.74135,8.48969-16.79567,44.43853c5.33532,32.25838,1.09543,139.32975.16869,160.97334a3.99633,3.99633,0,0,0,3.6643,4.15352l13.275,1.10625a4,4,0,0,0,4.30869-3.55327l6.85594-62.97369a1,1,0,0,1,1.99059.02422l5.10871,60.59527a4,4,0,0,0,4.11236,3.662l11.15018-.35279a4,4,0,0,0,3.87135-4.12946l-6.5682-199.745Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#2f2e41"
            />
            <path
              d="M385.71084,309.14523c8.21432,3.36894,18.70439-.56649,22.67588-8.507s.82844-18.69461-6.79418-23.24659-18.581-2.21877-23.68812,5.04357c-4.15443-7.4846-15.0379-9.39274-22.51033-5.21645s-11.5426,12.92394-12.02534,21.47061,2.11564,16.9663,5.28534,24.91813c5.12716,12.86257,21.633,19.78828,34.40322,14.43535C377.21111,329.33554,378.36518,316.59337,385.71084,309.14523Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#2f2e41"
            />
            <path
              id="b77c6965-cdfc-4713-bd9a-03fafd9c7c98-124"
              data-name="Path 395"
              d="M418.81205,345.414a1.00781,1.00781,0,0,1-.60629-.20149l-.01084-.00814-2.2836-1.74687a1.01481,1.01481,0,0,1,1.23487-1.61074l1.47913,1.13426,3.49525-4.56a1.01439,1.01439,0,0,1,1.42222-.18785l.00029.00022-.02169.03012.02228-.03012a1.0156,1.0156,0,0,1,.18763,1.42249l-4.11118,5.36111a1.015,1.015,0,0,1-.80718.39576Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#5c007a"
            />
            <path
              d="M870.4051,244.45771H556.21151a16.69543,16.69543,0,0,0-16.6803,16.6803V312.0568a16.69542,16.69542,0,0,0,16.6803,16.68029H870.4051a16.69542,16.69542,0,0,0,16.6803-16.68029V261.138A16.69543,16.69543,0,0,0,870.4051,244.45771Zm14.92448,67.59909a14.94565,14.94565,0,0,1-14.92448,14.92447H556.21151A14.94565,14.94565,0,0,1,541.287,312.0568V261.138a14.94565,14.94565,0,0,1,14.92448-14.92448H870.4051A14.94565,14.94565,0,0,1,885.32958,261.138Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#3f3d56"
            />
            <path
              d="M620.1504,315.62959a29.03223,29.03223,0,1,1,29.032-29.03223A29.06519,29.06519,0,0,1,620.1504,315.62959Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#5c007a"
            />
            <path
              d="M827.53615,310.301H676.63385a7.02328,7.02328,0,1,1,0-14.04656h150.9023a7.02328,7.02328,0,0,1,0,14.04656Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#ccc"
            />
            <path
              d="M726.57648,280.452H676.63385a7.02328,7.02328,0,1,1,0-14.04656h49.94263a7.02328,7.02328,0,0,1,0,14.04656Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#ccc"
            />
            <path
              id="b837c4e1-e336-4370-ba9c-f06fbd333d33-125"
              data-name="Path 395"
              d="M618.66756,296.80946a3.32082,3.32082,0,0,1-1.99781-.66395l-.03574-.02681-7.52475-5.7562a3.34395,3.34395,0,1,1,4.06905-5.30761l4.87393,3.73756,11.51737-15.02568a3.34253,3.34253,0,0,1,4.68639-.619l.001.00072-.07148.09926.07342-.09926a3.34657,3.34657,0,0,1,.61828,4.68734l-13.54694,17.6656a3.34458,3.34458,0,0,1-2.65976,1.30408Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#fff"
            />
            <path
              d="M735.4051,381.45771H421.21151a16.69543,16.69543,0,0,0-16.6803,16.6803V449.0568a16.69542,16.69542,0,0,0,16.6803,16.68029H735.4051a16.69542,16.69542,0,0,0,16.6803-16.68029V398.138A16.69543,16.69543,0,0,0,735.4051,381.45771Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#fff"
            />
            <path
              d="M735.4051,381.45771H421.21151a16.69543,16.69543,0,0,0-16.6803,16.6803V449.0568a16.69542,16.69542,0,0,0,16.6803,16.68029H735.4051a16.69542,16.69542,0,0,0,16.6803-16.68029V398.138A16.69543,16.69543,0,0,0,735.4051,381.45771Zm14.92448,67.59909a14.94565,14.94565,0,0,1-14.92448,14.92447H421.21151A14.94565,14.94565,0,0,1,406.287,449.0568V398.138a14.94565,14.94565,0,0,1,14.92448-14.92448H735.4051A14.94565,14.94565,0,0,1,750.32958,398.138Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#3f3d56"
            />
            <path
              d="M485.1504,452.62959a29.03223,29.03223,0,1,1,29.032-29.03223A29.06519,29.06519,0,0,1,485.1504,452.62959Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#5c007a"
            />
            <path
              d="M692.53615,447.301H541.63385a7.02328,7.02328,0,1,1,0-14.04656h150.9023a7.02328,7.02328,0,0,1,0,14.04656Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#ccc"
            />
            <path
              d="M591.57648,417.452H541.63385a7.02328,7.02328,0,1,1,0-14.04656h49.94263a7.02328,7.02328,0,0,1,0,14.04656Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#ccc"
            />
            <path
              id="ae103e1a-a1d0-4366-bdbf-adaac5567630-126"
              data-name="Path 395"
              d="M483.66756,433.80946a3.32082,3.32082,0,0,1-1.99781-.66395l-.03574-.02681-7.52475-5.7562a3.34395,3.34395,0,1,1,4.06905-5.30761l4.87393,3.73756,11.51737-15.02568a3.34253,3.34253,0,0,1,4.68639-.619l.001.00072-.07148.09926.07342-.09926a3.34657,3.34657,0,0,1,.61828,4.68734l-13.54694,17.6656a3.34458,3.34458,0,0,1-2.65976,1.30408Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#fff"
            />
            <path
              d="M411.02308,392.94388a9.37692,9.37692,0,0,0-12.79623,6.55718l-21.12033,3.61811-.93165,13.371,29.75422-5.52838a9.42779,9.42779,0,0,0,5.094-18.01793Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#ffb8b8"
            />
            <path
              d="M374.74342,354.56538l0,0a13.05812,13.05812,0,0,1,6.80234,16.68605l-12.24268,31.1621,15.36963-2.825a4,4,0,0,1,4.53866,2.73348l3.06386,9.73695a4,4,0,0,1-2.706,5.04363l-19.97695,5.768a17.01913,17.01913,0,0,1-21.74-16.25648v0a17.01891,17.01891,0,0,1,.37674-3.6571l8.394-39.21375A13.05811,13.05811,0,0,1,374.74342,354.56538Z"
              transform="translate(-312.9146 -244.45771)"
              fill="#ccc"
            />
          </svg>
          <div class="card-body">
            <p class="card-text">You have already applied for this post.</p>
          </div>
        </div>
      </div>
    );
  }
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
      return <Preview />;
    case 7:
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
    //   case 8:
    // return (
    //   <Thanku />

    // );
  }
}

export default Index;
