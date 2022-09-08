import React from "react";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";

function Qulification({ prevStep, nextStep, jobId, jobApplyId }) {
  const [sec, setSec] = React.useState(false);
  const [srSec, setSrSec] = React.useState(false);
  const [ug, setUg] = React.useState(false);
  const [pg, setPg] = React.useState(false);
  const [data, setData] = React.useState({
    degree: "",
    discipline: "",
    pdegree: "",
    pdiscipline: "",
  });

  const [error, setError] = React.useState({
    min: "",
    degree: "",
    discipline: "",
    pdegree: "",
    pdiscipline: "",
  });

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };
  const saveAndContinue = (e) => {
    e.preventDefault();
    console.log(sec);
    if (!sec) {
      setError({
        min: "Please select your higest qulification",
        degree: "",
        discipline: "",
        pdegree: "",
        pdiscipline: "",
      });
      return;
    }
    if (sec) {
      data.qulification = "secondary";
    }
    if (srSec) {
      data.qulification = "senior secondary";
    }
    if (ug) {
      data.qulification = "graduate";
      if (data.degree.length < 2) {
        setError({
          min: "",
          degree: "Please enter your degree",
          discipline: "",
          pdegree: "",
          pdiscipline: "",
        });
        return;
      }
    }
    if (pg) {
      data.qulification = "post graduate";
      if (data.pdegree.length < 2) {
        setError({
          min: "",
          degree: "",
          discipline: "",
          pdegree: "Please enter your degree",
          pdiscipline: "",
        });
        return;
      }
    }
    console.log("qquli", data);

    data.jobApplyId = jobApplyId;
    axios
      .post(config.baseUrl + config.qulification, data)
      .then((res) => {
        console.log("step 3 comp");
        toast.success("3st step completed");
        nextStep();
      })
      .catch((err) => {
        toast.error("Internal server error");
      });
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Qulification Details</h5>

        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div class="form-check">
              <p style={{ color: "red" }}>{error?.min}</p>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                onClick={() => {
                  setSec(!sec);
                  setSrSec(false);
                  setUg(false);
                  setPg(false);
                }}
                checked={sec}
              />
              <label class="form-check-label" for="defaultCheck1">
                Secondary
              </label>
            </div>
          </div>

          <div className="col-md-12 col-sm-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                onClick={() => {
                  setSec(!srSec);
                  setSrSec(!srSec);
                  setUg(false);
                  setPg(false);
                }}
                checked={srSec}
              />
              <label class="form-check-label" for="defaultCheck1">
                Senior Secondary
              </label>
            </div>
          </div>

          <div className="col-md-12 col-sm-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                onClick={() => {
                  setSec(!ug);
                  setSrSec(!ug);
                  setUg(!ug);
                  setPg(false);
                }}
                checked={ug}
              />
              <label class="form-check-label" for="defaultCheck1">
                Graduate
              </label>
            </div>
            <div style={{ display: ug ? "block" : "none" }}>
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Degree
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="degree"
                    name="degree"
                    onChange={handleChange}
                  />
                  <p style={{ color: "red" }}>{error?.degree}</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Discipline
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="discipline"
                    name="discipline"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-sm-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                onClick={() => {
                  setSec(!pg);
                  setSrSec(!pg);
                  setUg(!pg);
                  setPg(!pg);
                }}
                checked={pg}
              />
              <label class="form-check-label" for="defaultCheck1">
                Post Graduate
              </label>
            </div>
            <div style={{ display: pg ? "block" : "none" }}>
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Degree
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="degree"
                    name="pdegree"
                    onChange={handleChange}
                  />
                  <p style={{ color: "red" }}>{error?.pdegree}</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Discipline
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="discipline"
                    name="pdiscipline"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

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
  );
}

export default Qulification;
