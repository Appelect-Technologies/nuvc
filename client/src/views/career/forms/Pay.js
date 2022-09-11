import React from "react";
import { config } from "../../../config";

function Pay({ id, uid, body, email }) {
  const { phone, jobId, name } = body;

  return (
    <div class="card">
      <div class="card-header bg-white">
        <h4 className="card-title">Payment</h4>
      </div>
      <div class="card-body">
        <form className="form" method="post" action={config.paymentUrl}>
          <div class="mb-3">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              class="form-control"
              value={id}
              id="id"
              name="id"
              required
              onChange={(e) => {
                e.target.value = id;
              }}
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
              required
              onChange={(e) => {
                e.target.value = uid;
              }}
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
              required
              onChange={(e) => {
                e.target.value = email;
              }}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              class="form-control"
              type="number"
              value={phone}
              name="phone"
              id="phone"
              required
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
              required
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
              required
              onChange={(e) => {
                e.target.value = "job";
              }}
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
