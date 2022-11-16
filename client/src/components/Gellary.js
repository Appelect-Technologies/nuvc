import React from "react";
import Marquee from "react-fast-marquee";

function gellary() {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        border: "8px solid rgb(63 1 83)",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(63 1 83)",
          color: "#ffffff",
          padding: "2px",
        }}
      >
        <center>
          {" "}
          <a href="./gallery">
            <h1 className="card-title">Achievements/उपलब्धियों</h1>
          </a>
        </center>
      </div>
      <Marquee speed={150} loop={0}>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM.jpeg"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM+(4).jpeg"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM+(3).jpeg"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM+(2).jpeg"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.11.12+PM+(1).jpeg"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.03.24+PM.jpeg"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.03.23+PM.jpeg"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/1661520632774-285095033-appelect%2Btransparent%2Bbg%2B2.png"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/1661520434003-624656976-appelect%2Btransparent%2Bbg%2B2.png"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
        <div>
          <img
            src={
              "https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2022-09-16+at+4.12.03+PM.jpeg"
            }
            style={{
              width: 300,
              // height: 110,
              marginLeft: 37,
            }}
          />
        </div>
      </Marquee>
    </div>
  );
}

export default gellary;
