import React, { Fragment } from "react";
import { useFormik } from "formik";
import { postQuery } from "../utils/dataApi";
import { toast } from "react-toastify";
import login from "../asstes/logo/favicon.png";

function ContactUs() {
  const handleSubmit = async (values) => {
    try {
      await postQuery(values);
      formik.resetForm();
    } catch (error) {
      toast.error("Error occured");
    } finally {
      setTimeout(() => {
        formik.setSubmitting();
      }, 2000);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      reason: "query",
      email: "",
      number: "",
      message: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Fragment>
      <div className="flex" style={{display:"flex", padding:10}}>
        <div className="container ">
        <div className="card shadow-sm my-4" style={{ padding:10, justifyItems:"center"}}>
        <center>
          <img
            src={login}
            alt="login"
            style={{
              width: 60,
              marginTop: 10,
            }}
         
          />
          <h2 >
          Navachar Udyamita Vikash Council
          </h2>
        </center>
          <h6>
          Navachar Udyamita Vikash Council of India provides a single-Window access to information and services that are elctronicaly delivered to from all Goverment Departments, Institutions and
       and Organization. It has been a popular source of information to a wide range stakeholders - from citizine, to Goverment,business and Indian Diasporsa.
       It is a gateway to access Indian Goverment website at center, state and District levels.
          </h6>
         
          <div >
              <div class="widget no-box">
                <center>
                <h5 class="widget-title">
                  Contact Us At: <span></span>
                </h5>
                </center>
                <address>
                  <b>Address:</b> B15 Shankar Garden, Janakpuri west metro station, New
                  Delhi-110018
                  <br></br>
                </address>
                <div class="emailfield">
                  <p>
                    <b>Phone:</b> <a href="tel:01146579553">011 46579553</a>
                  </p>
                  <p>
                  <b>Timing:</b> <a >Monday - Sunday 9:30 AM - 7 PM</a>
                  </p>
                  <p>
                    <b>Email:</b>
                    <a href="nuvchelp@gmail.com"> nuvchelp@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
        </div>
        </div>

      
      <div class="container w-auto" style={{ maxWidth: 600 }}>
        <form onSubmit={formik.handleSubmit}>
          <div className="card shadow-sm my-4">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <h5 className="card-title">?????????????????? / ??????????????? / ??????????????????</h5>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      disabled={formik.isSubmitting}
                      onChange={formik.handleChange}
                      name="name"
                      value={formik.values.name}
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label for="exampleDataList" class="form-label">
                      Reason
                    </label>
                    <select
                      class="form-select"
                      required
                      disabled={formik.isSubmitting}
                      onChange={formik.handleChange}
                      name="reason"
                      value={formik.values.reason}
                      aria-label="Default select example"
                    >
                      <option value="payment" selected>
                        Payment
                      </option>
                      <option value="query">Query</option>
                      <option value="admission">Admission</option>
                      <option value="exam">Exam</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      disabled={formik.isSubmitting}
                      onChange={formik.handleChange}
                      name="email"
                      value={formik.values.email}
                      className="form-control"
                      placeholder="enter your email"
                    />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      disabled={formik.isSubmitting}
                      placeholder="enter your phone number"
                      onChange={formik.handleChange}
                      name="number"
                      value={formik.values.number}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      disabled={formik.isSubmitting}
                      type="text"
                      className="form-control"
                      placeholder="write your message"
                      onChange={formik.handleChange}
                      name="message"
                      value={formik.values.message}
                    />
                  </div>
                </div>
              </div>

              {formik.isSubmitting ? (
                <button
                  disabled={formik.isSubmitting}
                  type="submit"
                  className="btn btn-dark w-100"
                >
                  <span style={{ marginRight: 5 }}>Submiting...</span>
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </button>
              ) : (
                <button
                  disabled={formik.isSubmitting}
                  type="submit"
                  className="btn btn-dark w-100"
                >
                  <span style={{ marginRight: 5 }}>Submit</span>
                  <span>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </button>
              )}
            </div>
          </div>
        </form>
        <div
          style={{
            width: "60px",
            height: "60px",
            position: "fixed",
            right: "10px",
            bottom: "10px",
          }}
        >
          <a href="https://wa.me/919599581858">
            <img
              src="https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp.svg.webp"
              alt=""
              style={{ width: "60px", height: "60px" }}
            />
          </a>
        </div>
      </div>
      </div>
    </Fragment>
  );
}

export default ContactUs;
