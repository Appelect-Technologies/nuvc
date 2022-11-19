import React from "react";
import Footer from "../../components/footer/Footer";
import Banners from "./Banners";
import Content from "./Content";
import Header from "./Header";
import Partner from "./Partner";
import Headlines from "./Headlines";
import Credit from "../pages/Credit";
import OurPrograms from "../OurPrograms";
import what from "../../asstes/WhatsApp.svg.webp";
import Gallery from "../../components/Gellary";
function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Banners />
      <Headlines />
      <Content />
      <OurPrograms />
      <Gallery />
      <Partner />
      {/* <Credit /> */}
      {/* <Footer /> */}
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

export default Home;
