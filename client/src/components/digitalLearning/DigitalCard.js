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
      <div class="card shadow-sm m-4">
        <div style={{ height: 200, backgroundColor: "#eee" }}>
          <img
            src={icon}
            style={{ width: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <div class="card-body">
          <h4 class="card-title text-center">{name}</h4>
          <p class="card-text text-justify">{discp}</p>
          <p
            class="card-text text-center"
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            INR {price}/-
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DigitalCard;
