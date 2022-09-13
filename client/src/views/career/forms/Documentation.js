import React from "react";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";
import pay from "../../../utils/pay";
import { app } from "../../../auth/auth";
import { getAuth } from "firebase/auth";

function Documentation({ prevStep, nextStep, jobId, jobApplyId }) {
  const auth = getAuth(app);

  const [data, setData] = React.useState({
    signature: "",
    photo: "",
    idBack: "",
    idFront: "",
    idName: "Aadhaar",
  });

  const [error, setError] = React.useState({
    signature: "",
    photo: "",
    idBack: "",
    idFront: "",
    idName: "Aadhaar",
  });

  const [select, setSelect] = React.useState("Aadhaar");
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };
  const saveAndContinue = (e) => {
    e.preventDefault();
    console.log("data--", data);

    if (data.signature.length < 5) {
      setError({
        signature: "Please upload signature",
        photo: "",
        idBack: "",
        idFront: "",
        idName: "Aadhaar",
      });
      return;
    }

    if (data.photo.length < 5) {
      setError({
        signature: "",
        photo: "Please upload your photo",
        idBack: "",
        idFront: "",
        idName: "Aadhaar",
      });
      return;
    }

    if (data.idFront.length < 5) {
      setError({
        signature: "",
        photo: "",
        idBack: "",
        idFront: "Please upload front side of  your id",
        idName: "Aadhaar",
      });
      return;
    }

    if (data.idName === "Aadhaar" && data.idBack.length < 5) {
      setError({
        signature: "",
        photo: "",
        idBack: "Please upload back side of your id",
        idFront: "",
        idName: "Aadhaar",
      });
      return;
    }

    data.jobApplyId = jobApplyId;
    data.jobId = jobId;
    axios
      .post(config.baseUrl + config.document, data)
      .then((res) => {
        console.log("step 1 comp", res.data.body);
        toast.success("5st step completed");
        toast.success("you are successfully completed all steps");
        // pay(jobApplyId, auth?.currentUser?.uid, res.data.body);
        nextStep();
      })
      .catch((err) => {
        toast.error("Internal server error");
      });
    // nextStep();
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
    data.idName = e.target.value;
    // data.jobId = jobId;
    // formData.append("file", file, file.name);
    // formData.append("campainId", );
  };

  const handleChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSetData = (name, fileUrl) => {
    if (name === "signature") {
      handleChange("signature", fileUrl);
    }
    if (name === "photo") {
      handleChange("photo", fileUrl);
    }
    if (name === "idBack") {
      handleChange("idBack", fileUrl);
    }
    if (name === "idFront") {
      handleChange("idFront", fileUrl);
    }
  };

  const handleFile = (e) => {
    const formData = new FormData();
    let file = e.target.files[0];
    formData.append("file", file, file.name);
    formData.append("name", e.target.name);

    axios
      .post(config.baseUrl + config.upload, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("file", res.data);
        handleSetData(e.target.name, res.data.file);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  React.useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Documentation Details</h5>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div class=" mb-3">
                <label for="formFile" class="form-label">
                  Signature
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="signature"
                  style={{
                    background: data.signature.length > 4 ? "#9fd89f" : "",
                  }}
                  onChange={handleFile}
                />
                <p style={{ color: "red" }}>{error?.signature}</p>
                {/* <div class="spinner-border text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div> */}
              </div>
            </div>

            <div className="col-md-12 col-sm-12">
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Photograph
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="photo"
                  style={{
                    background: data.photo.length > 4 ? "#9fd89f" : "",
                  }}
                  onChange={handleFile}
                />
                <p style={{ color: "red" }}>{error?.photo}</p>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <label for="exampleDataList" class="form-label">
                Upload Document
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleSelect}
              >
                <option value="Aadhaar" selected>
                  Aadhaar Card
                </option>
                <option value="Voter ID">Voter Id Card</option>
                <option value="Pan">PAN Card</option>
                <option value="Passport">Passport</option>
                <option value="Driving Licence">Driving Licence</option>
              </select>
            </div>

            <div className="col-md-12 col-sm-12">
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Front
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="idFront"
                  style={{
                    background: data.idFront.length > 4 ? "#9fd89f" : "",
                  }}
                  onChange={handleFile}
                />{" "}
                <p style={{ color: "red" }}>{error?.idFront}</p>
              </div>
            </div>
            <div
              className="col-md-12 col-sm-12"
              style={{ display: select == "Aadhaar" ? "block" : "none" }}
            >
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Back
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="idBack"
                  style={{
                    background: data.idBack.length > 4 ? "#9fd89f" : "",
                  }}
                  onChange={handleFile}
                />{" "}
                <p style={{ color: "red" }}>{error?.idBack}</p>
              </div>
            </div>

            <div className="col-md-12 col-sm-12">
              <button
                type="button"
                className="btn btn-dark"
                style={{ marginRight: 10 }}
                onClick={back}
              >
                Back <i className="fas fa-long-arrow-alt-right"></i>
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={saveAndContinue}
              >
                Next <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
