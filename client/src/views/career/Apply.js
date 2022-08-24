import React from "react";
import Multistep from "react-multistep";
import Index from "./forms/Index";

function Apply({ user }) {
  return (
    <div className="container">
      <div
        style={{
          padding: 25,
        }}
      >
        <Index user={user} />
      </div>
    </div>
  );
}

export default Apply;
