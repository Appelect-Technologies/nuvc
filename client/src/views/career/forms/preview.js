import React, { useEffect, useState } from "react";
import { getJobById } from "../../../utils/dataApi";

function Preview({ nextStep, prevStep, jobApplicationId }) {
  const [values, setValues] = useState({});

  const fetchData = async (jobApplicationId) => {
    try {
      const res = await getJobById(jobApplicationId);
      const [vals] = res.data.jobapplicant;
      setValues(vals);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData(jobApplicationId);
  }, []);

  return (
    <div className="container-fluid my-4">
      <div className="card mb-3 shadow-sm">
        <div className="card-header">
          <h5>Personal Details</h5>
        </div>
        <div className="card-body">
          {[
            {
              title: "First Name / पहला नाम",
              value: values.fname,
            },
            {
              title: "Last Name / आखरी नाम",
              value: values.lname,
            },
            {
              title: "Father's Name / पिता का नाम",
              value: values.fatherName,
            },
            {
              title: "Mother's Name / माता का नाम",
              value: values.motherName,
            },
            {
              title: "Gender",
              value: values.gender,
            },
            {
              title: "Email / ई - मेल",
              value: values.email,
            },
            {
              title: "Phone Number / फोन नंबर",
              value: values.phone,
            },
            {
              title: "Religion",
              value: values.religion,
            },
            {
              title: "Date of Birth / जन्म तिथि",
              value: values.dob,
            },
          ].map((_, i) => (
            <ul class="list-group list-group-horizontal" key={i}>
              <li class="list-group-item w-100">{_.title}</li>
              <li class="list-group-item w-100">{_.value}</li>
            </ul>
          ))}
        </div>
      </div>

      <div className="card mb-3 shadow-sm">
        <div className="card-header">
          <h5>Address Details</h5>
        </div>
        <div className="card-body">
          {[
            {
              title: "House No. / घर का नंबर",
              value: values.hn,
            },
            {
              title: "Street / गली नंबर",
              value: values.street,
            },
            {
              title: "Address / पता",
              value: values.address,
            },
            {
              title: "State / राज्य",
              value: values.state,
            },
            {
              title: "District / जिला",
              value: values.district,
            },
            {
              title: "Pin Code / पिन कोड",
              value: values.pin,
            },
          ].map((_, i) => (
            <ul class="list-group list-group-horizontal" key={i}>
              <li class="list-group-item w-100">{_.title}</li>
              <li class="list-group-item w-100">{_.value}</li>
            </ul>
          ))}
        </div>
      </div>

      <div className="card mb-3 shadow-sm">
        <div className="card-header">
          <h5>Qulification Details</h5>
        </div>
        <div className="card-body">
          {[
            {
              title: "Qulification",
              value: values.qulification,
            },
            {
              title: "Degree",
              value: values.degree,
            },
            {
              title: "Discipline",
              value: values.discipline,
            },
          ].map((_, i) => (
            <ul class="list-group list-group-horizontal" key={i}>
              <li class="list-group-item w-100">{_.title}</li>
              <li class="list-group-item w-100">{_.value}</li>
            </ul>
          ))}
        </div>
      </div>

      <div className="card mb-3 shadow-sm">
        <div className="card-header">
          <h5>Job Location Details</h5>
        </div>
        <div className="card-body">
          {[
            {
              title: "Category / जाती",
              value: values.category,
            },
            {
              title: "Experience / अनुभव",
              value: values.experience,
            },
            {
              title:
                "Do you want to job Outside India? / बाहर देश में काम करना चाहते है?",
              value: values.isJobOutsideIndia,
            },
          ].map((_, i) => (
            <ul class="list-group list-group-horizontal" key={i}>
              <li class="list-group-item w-100">{_.title}</li>
              <li class="list-group-item w-100">{_.value}</li>
            </ul>
          ))}
        </div>
      </div>

      <div className="card mb-3 shadow-sm">
        <div className="card-header">
          <h5>Documentation Details</h5>
        </div>
        <div className="card-body">
          {[
            {
              title: "Signature",
              value: values.signature,
            },
            {
              title: "Photograph",
              value: values.photo,
            },
            {
              title: "Uploaded Document",
              value: values.idName,
            },
            {
              title: "Document Id Front",
              value: values.idFront,
            },
            {
              title: "Document Id Back",
              value: values.idBack,
            },
          ].map((_, i) => {
            if (_.title === "Uploaded Document") {
              return (
                <ul class="list-group list-group-horizontal" key={i}>
                  <li class="list-group-item w-100">{_.title}</li>
                  <li class="list-group-item w-100">{_.value}</li>
                </ul>
              );
            } else {
              return (
                <ul class="list-group list-group-horizontal" key={i}>
                  <li class="list-group-item w-100">{_.title}</li>
                  <li class="list-group-item w-100">
                    <img src={_.value} width={100} />
                  </li>
                </ul>
              );
            }
          })}
        </div>

        <div class="card-footer d-flex" style={{ gap: 20 }}>
          <button onClick={prevStep} className="btn btn-dark w-50">
            Back
          </button>
          <button onClick={nextStep} className="btn btn-dark w-100">
            Confirm & Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
