import React from "react";

function Gallery() {
  return (
    <div
      style={{
        width: "100%",
        height: 250,
        marginTop: 15,
      }}
    >
      <div style={{ height: 40, marginTop: 10 }}>
        <center>
          {" "}
          <h4 className="card-title">Achievements/उपलब्धियों</h4>
        </center>
      </div>
      <marquee style={{ scrollamount: "1" }}>
        <img
          src='https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.12.03+PM.jpeg'
          alt="Hire the Right Person"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 37,
          }}
        />
        <img
          src= "https://nuvc-public.s3.ap-south-1.amazonaws.com/1661520434003-624656976-appelect%2Btransparent%2Bbg%2B2.png"
          alt="skill development"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 37,
          }}
        />
        <img
          src="https://nuvc-public.s3.ap-south-1.amazonaws.com/1661520632774-285095033-appelect%2Btransparent%2Bbg%2B2.png"
          alt="india development review"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 37,
          }}
        />
        <img
          src="https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.03.23+PM.jpeg"
          alt="logo"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 34,
          }}
        />
        <img
          src="https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.03.24+PM.jpeg"
          alt="indian development sector"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 37,
          }}
        />
        <img
          src="https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM+(1).jpeg"
          alt="indian development sector"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 37,
          }}
        />
        <img
          src="https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM+(2).jpeg"
          alt="india development review"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 37,
          }}
        />
        <img
          src="https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM+(3).jpeg"
          alt="india development review"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 37,
          }}
        />
        <img
          src="https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM+(4).jpeg"
          alt="skill development"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 37,
          }}
        />
        <img
          src="https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM.jpeg"
          alt="skill development"
          style={{
            width: 182,
            // height: 110,
            marginLeft: 37,
          }}
        />
      </marquee>
    </div>
  );
}

export default Gallery;

