import React from "react";
import image from "../.././asstes/bcd.jpeg";

function update() {
  return (
    <>
      <div className="update" style={{ height: "70vw" }}>
        <img
          src={image}
          alt="/"
          style={{ width: "80vw", marginLeft: "10%", marginTop: "5%" }}
        />
      </div>
    </>
  );
}

export default update;
