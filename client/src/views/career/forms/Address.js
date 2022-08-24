import React from "react";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";

function Address({ prevStep, nextStep, jobId, jobApplyId }) {
  const [data, setData] = React.useState({
    address: "",
    district: "",
    hn: "",
    pin: "",
    state: "",
    street: "",
  });

  const [error, setError] = React.useState({
    address: "",
    district: "",
    hn: "",
    pin: "",
    state: "",
    street: "",
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
    data.jobApplyId = jobApplyId;

    if (data.address.length < 10) {
      setError({
        address: "Please enter valid address",
        district: "",
        hn: "",
        pin: "",
        state: "",
        street: "",
      });
      return;
    }

    if (data.state.length < 3) {
      setError({
        address: "",
        district: "",
        hn: "",
        pin: "",
        state: "Please enter valid state",
        street: "",
      });
      return;
    }

    if (data.pin.length < 6 || data.pin.length >= 7) {
      setError({
        address: "",
        district: "",
        hn: "",
        pin: "Please enter valid pin",
        state: "",
        street: "",
      });
      return;
    }

    axios
      .post(config.baseUrl + config.address, data)
      .then((res) => {
        if (res.status == 201) {
          toast.error("Please complete step 1");
          return;
        }
        console.log("step 2 comp", res);
        toast.success("2st step completed");
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
          <h5 className="card-title">Address Details</h5>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  House No. / घर का नंबर
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="House number"
                  name="hn"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Street / गली नंबर
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street"
                  name="street"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Address / पता
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="address"
                  onChange={handleChange}
                ></textarea>
                <p style={{ color: "red" }}>{error?.address}</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  State / राज्य
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  name="state"
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{error?.state}</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  District / जिला
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="District"
                  name="district"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Pin Code / पिन कोड
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pin code"
                  name="pin"
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{error?.pin}</p>
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
  );
}

export default Address;
