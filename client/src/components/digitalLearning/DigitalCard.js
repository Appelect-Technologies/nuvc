import React from "react";
import { Link, useHistory } from "react-router-dom";

function DigitalCard({
  name = "",
  price = "",
  icon = "",
  id = "",
  discp = "",
}) {
  const history = useHistory();

  return (
    <Link to={`/digitalLearning/descp/${id}`}>
      <div class="card shadow-lg m-4">
        <img src={icon} style={{ width: "100%" }} />
        <div class="card-body">
          <h5 class="card-title text-center">{name}</h5>
          <p class="card-text text-justify">{discp}</p>
          <p class="card-text text-center" style={{ fontWeight: "bold" }}>
            INR {price}/-
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DigitalCard;
