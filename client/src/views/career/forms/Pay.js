import React from "react";
import { config } from "../../../config";
import pay from "../../../utils/pay";

function Pay({ id, uid, body, email }) {
  const { phone, jobId, name } = body;
  const handlePay = () => {
    // body.jobId = id;
    pay(id, uid, body);
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
    <div class="card">
      <div class="card-header bg-white">
        <h4 className="card-title">Payment</h4>
      </div>
      <div class="card-body">
        {/*  
      <h5 class="card-title">{email}</h5>
        <p class="card-text">{id}</p>
         <button class="btn btn-primary" onClick={handlePay}>
            Pay
          </button> */}
        <form className="form" method="post" action={config.paymentUrl}>
          <div class="mb-3">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              class="form-control"
              value={id}
              id="id"
              name="id"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="uid">UID</label>
            <input
              type="text"
              class="form-control"
              value={uid}
              id="uid"
              name="uid"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              class="form-control"
              value={email}
              name="email"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="jobId">Job Id</label>
            <input
              type="text"
              class="form-control"
              value={jobId}
              id="jobId"
              name="jobId"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              class="form-control"
              type="number"
              value={phone}
              name="phone"
              id="phone"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              value={name}
              name="name"
              id="name"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              class="form-control"
              value="job"
              name="type"
              id="type"
            />
          </div>

          <div className="mb-3">
            <button type="submit" class="btn btn-primary w-100">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pay;
