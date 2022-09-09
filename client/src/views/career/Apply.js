import React from "react";
import Index from "./forms/Index";

function Apply({ user }) {
  return (
    <div className="container-lg">
      <Index user={user} />
    </div>
  );
}

export default Apply;
