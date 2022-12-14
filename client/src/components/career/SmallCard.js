import React from "react";
import { useHistory } from "react-router-dom";

function SmallCard({
  title = "",
  salary = "",
  icon = "",
  id = "",
  url1 = "",
  url2 = "",
}) {
  const history = useHistory();
  return (
    <div class="card shadow-sm m-4">
      <div style={{ height: 200, backgroundColor: "#eee" }}>
        <img
          src={icon}
          style={{ width: "100%", objectFit: "contain" }}
          loading="lazy"
          alt="job placement agency"
        />
      </div>

      <figure style={{ textAlign: "center", paddingTop: "30px" }}>
        <blockquote class="blockquote">
          <strong>{title}</strong>
        </blockquote>
        {/* <figcaption class="blockquote-footer">
              INR <cite title="Source Title">{salary}/-</cite>
            </figcaption> */}

        {/* <figcaption class="">
              Apply Now <i class="fas fa-long-arrow-alt-right"></i>
            </figcaption> */}

        <a href={url1}>
          <i class="fas fa-long-arrow-alt-right"></i>
        </a>
        <a href={url2}>
          <i class="fas fa-long-arrow-alt-right"></i>
        </a>

        <br />
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={() => history.push("/creers/descp/" + id)}
        >
          Learn More <i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </figure>
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
  );
}

export default SmallCard;
