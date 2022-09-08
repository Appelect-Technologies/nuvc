import React from "react";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";

function Personal({ nextStep, jobId, user, jobApplyId }) {
  const [data, setData] = React.useState({
    email: user?.email,
    fatherName: "",
    fname: "",
    gender: "",
    lname: "",
    motherName: "",
    phone: "",
    religion: "",
    dob: new Date().toLocaleDateString("en-CA"),
  });
  const [error, setError] = React.useState({
    email: "",
    fatherName: "",
    fname: "",
    gender: "",
    lname: "",
    motherName: "",
    phone: "",
    religion: "",
  });
  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const saveAndContinue = (e) => {
    e.preventDefault();

    if (data.fname.length < 3) {
      setError({
        email: "",
        fatherName: "",
        fname: "Please enter your name",
        gender: "",
        lname: "",
        motherName: "",
        phone: "",
      });
      return;
    }

    if (data.fatherName.length < 3) {
      setError({
        email: "",
        fatherName: "Please enter your father name",
        fname: "",
        gender: "",
        lname: "",
        motherName: "",
        phone: "",
        dob: "", //
        religion: "",
      });
      return;
    }

    if (data.gender.length < 1) {
      setError({
        email: "",
        fatherName: "",
        fname: "",
        gender: "Please select your gender",
        lname: "",
        motherName: "",
        phone: "",
      });
      return;
    }
    if (data.email.length < 5) {
      setError({
        email: "Please enter valid email",
        fatherName: "",
        fname: "",
        gender: "",
        lname: "",
        motherName: "",
        phone: "",
      });
      return;
    }
    if (data.phone.length < 10) {
      setError({
        email: "",
        fatherName: "",
        fname: "",
        gender: "",
        lname: "",
        motherName: "",
        phone: "Please enter valid phone number",
      });
      return;
    }

    data.jobApplyId = jobApplyId;
    data.jobId = jobId;
    axios
      .post(config.baseUrl + config.personal, data)
      .then((res) => {
        if (res.status === 201) {
          toast.info("you are already apply this job.");
          toast.info("Please wait for response!");
          return;
        }

        console.log("step 1 comp");
        toast.success("1st step completed");
        nextStep();
      })
      .catch((err) => {
        toast.error("Internal server error");
      });
  };
  return (
    <div className="card my-4 shadow-sm">
      <div className="card-header">
        <h5 className="card-title">Personal Details</h5>
      </div>
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                First Name / पहला नाम
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="fname"
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error?.fname}</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Last Name / आखरी नाम
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lname"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Father's Name / पिता का नाम
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Father's Name"
                name="fatherName"
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error?.fatherName}</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Mother's Name / माता का नाम
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Mothers's Name"
                name="motherName"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone Number / फोन नंबर
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{error?.phone}</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Date of Birth / जन्म तिथि
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Date of birth"
                name="dob"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email / ई - मेल
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                disabled
                onChange={handleChange}
                value={user?.email}
              />
              <p style={{ color: "red" }}>{error?.email}</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p>Gender</p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="exampleRadios1"
                value={"male"}
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="exampleRadios2"
                value={"female"}
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios2">
                Female
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="exampleRadios3"
                value={"other"}
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios3">
                Other
              </label>
              <p style={{ color: "red" }}>{error?.gender}</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p>Religion</p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="religion"
                id="exampleRadios11"
                value={"hindu"}
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios11">
                Hindu / हिंदू
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="religion"
                id="exampleRadios21"
                value={"muslim"}
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios21">
                Muslim / मुस्लिम
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="religion"
                id="exampleRadios31"
                value={"sikh"}
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios31">
                Sikh / सीख
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="religion"
                id="exampleRadios32"
                value={"christian"}
                onChange={handleChange}
              />
              <label class="form-check-label" for="exampleRadios32">
                Christian / इसाई
              </label>
              <p style={{ color: "red" }}>{error?.religion}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={saveAndContinue}
        >
          Next <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Personal;
