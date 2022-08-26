import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
// import logo from '../../asstes/logo/logo.jpeg'
import top from "../../asstes/top-banner.jpeg";
// import top_alternate from '../../asstes/top_alt.jpg'

//SEED_LOGO_FB.png";
// const number = 0;
// const [width, setWidth] = useState < number > window.innerWidth;

// function handleWindowSizeChange() {
//   setWidth(window.innerWidth);
// }
// useEffect(() => {
//   window.addEventListener("resize", handleWindowSizeChange);
//   return () => {
//     window.removeEventListener("resize", handleWindowSizeChange);
//   };
// }, []);
// const isMobile = width <= 768;

function Botton() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div className="bottom-container">
      {isMobile ? (
        <img
          src={
            "https://nuvc-public.s3.ap-south-1.amazonaws.com/1661528095470-497329847-top.jpeg"
          }
          alt="logo"
          style={{
            width: "100%",
            // height: 220,
            // marginLeft: "15%",
          }}
        />
      ) : (
        <img
          src={
            "https://nuvc-public.s3.ap-south-1.amazonaws.com/1661528095470-497329847-top.jpeg"
          }
          alt="logo"
          style={{
            width: "100%",
            // height: 220,
            // marginLeft: "15%",
          }}
        />
      )}
      {/* <div className="bottom-left-logo">
        <img
          src={logo}
          alt="logo"
          style={{
            width: 182,
            // height: 110,
            marginLeft: "15%",
          }}
        /> 

      </div>*/}
      {/* <div className="bottom-right">
        <img
          src={swach}
          alt="swach"
          style={{
            width: 182,
            // height: 110,
            marginRight: "10%",
          }}
        />
      </div> */}
    </div>
  );
}

export default Botton;
