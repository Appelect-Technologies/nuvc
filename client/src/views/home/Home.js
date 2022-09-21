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
function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Banners />
      <Headlines />
      <Content />
      <OurPrograms />
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
          <img src={what} alt="" style={{ width: "60px", height: "60px" }} />
        </a>
      </div>
    </div>
  );
}

export default Home;
