import React from "react";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";

function JobLocation({ prevStep, nextStep, jobId, jobApplyId }) {
  const [data, setData] = React.useState({
    prefrenceA: "",
    prefrenceB: "",
    prefrenceC: "",
    role: "", //
    category: "",
    experience: "",
    expComment: "",
    isJobOutsideIndia: false,
  });
  const [error, setError] = React.useState("");

  const [select, setSelect] = React.useState(0);

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
    data.category = e.target.value;
    // data.jobId = jobId;
    // formData.append("file", file, file.name);
    // formData.append("campainId", );
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };
  const saveAndContinue = (e) => {
    console.log("save", data);

    // if (data.prefrenceA.length < 3) {
    //   setError("Please enter at least one preference");
    //   return;
    // }
    setError("");
    e.preventDefault();
    data.jobApplyId = jobApplyId;
    data.category = select;

    axios
      .post(config.baseUrl + config.prefrance, data)
      .then((res) => {
        console.log("step 4 comp");
        toast.success("4st step completed");
        nextStep();
      })
      .catch((err) => {
        toast.error("Internal server error");
      });
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">JobLocation Details</h5>

          <div className="row">
            {/* <div className="col-md-12 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  First Preference
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Prefrance"
                  name="prefrenceA"
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{error}</p>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Second Preference
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Second Prefrance"
                  name="prefrenceB"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Third Preference
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Third Prefrance"
                  name="prefrenceB"
                  onChange={handleChange}
                />
              </div>
            </div> */}
            {/* <div className="col-md-12 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Job Role / पद का नाम
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your job role"
                  name="role"
                  onChange={handleChange}
                />
              </div>
            </div> */}
            {/* <div className="col-md-12 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="category"
                  onChange={handleChange}
                />
              </div>
            </div> */}
            <div className="col-md-12 col-sm-12">
              <label for="exampleDataList" class="form-label">
                Category / जाती
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleSelect}
              >
                <option value="GEN" selected>
                  General
                </option>
                <option value="OBC">OBC</option>
                <option value="SC">SC/ST</option>
                <option value="PC">Physically Challenged</option>
              </select>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Experience / अनुभव
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your experience"
                  name="experience"
                  onChange={handleChange}
                />
              </div>
            </div>
            <p>
              Do you want to job Outside India? / बाहर देश में काम करना चाहते
              है?
            </p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="isJobOutsideIndia"
                id="exampleRadios211"
                value={"yes"}
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios211">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="isJobOutsideIndia"
                id="exampleRadios214"
                value={"no"}
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios214">
                No
              </label>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-dark"
            style={{ marginRight: 10 }}
            onClick={back}
          >
            <i className="fas fa-long-arrow-alt-left"></i>Back
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
  );
}

export default JobLocation;
