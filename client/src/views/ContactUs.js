import React, { Fragment } from "react";
import { useFormik } from "formik";
import { postQuery } from "../utils/dataApi";
import { toast } from "react-toastify";

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
      <div class="container w-auto" style={{ maxWidth: 600 }}>
        <form onSubmit={formik.handleSubmit}>
          <div className="card shadow-sm my-4">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <h5 className="card-title">शिकायत / शुझाव / सहायता</h5>
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
      </div>
    </Fragment>
  );
}

export default ContactUs;
