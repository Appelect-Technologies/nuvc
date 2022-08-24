import React from "react";
import Footer from "../../components/footer/Footer";
import Banners from "./Banners";
import Content from "./Content";
import Header from "./Header";
import Partner from "./Partner";
import Headlines from "./Headlines";
import Credit from "../pages/Credit";
import OurPrograms from "../OurPrograms";

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
    </div>
  );
}

export default Home;
