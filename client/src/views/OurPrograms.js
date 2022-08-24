import React from "react";
import entrepreneur from "../asstes/program/entrepreneur.jpeg";
import employment from "../asstes/program/employment.jpeg";
import skill from "../asstes/program/skill.jpeg";
import education from "../asstes/program/education.jpeg";

function OurPrograms({ data }) {
  return (
    <div class="container">
      <center>
        <br />
        <h4>Our Programs</h4>
        <br />
      </center>
      <div class="row no-gutters">
        {data.map((item, i) => (
          <div className="col-12 col-sm-6 col-xl-3" key={i}>
            <div class="card">
              <img
                src={item.image}
                class="card-img-top"
                style={{ objectFit: "cover" }}
              />
              <div class="card-body">
                <h5 class="card-title">{item.heading}</h5>
                <p class="card-text">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

OurPrograms.defaultProps = {
  data: [
    {
      heading: "Employment and Councelling Center",
      desc: `Provice database of available employment opportunities in
      goverment or Non-government sector.Promoting awareness on National
      apprentice program, National Career service, NSDC ASEEM PORTAL,
      SKILL INDIA, GOVERNMENT Employment exchange, Atmanirvar Bharat
      Rojgar Abhiyan, Gareeb Kalyan Rojgar Abhiyan etc`,
      image: entrepreneur,
    },
    {
      heading: "Entrepreneur Development Center",
      desc: `To match local entrepreneurs with local investors.Promoting awareness on various scheme of Ministry of Micro, Small
      and Medium Enterprises, Startup India, Standup India,
      Entrepreneurship Development Program of different Ministries.
      Promoting awareness on fundraising through loan or equity
      investor.`,
      image: employment,
    },
    {
      heading: "Skill Development Program",
      desc: `To train unemployed youth respective of available opportunities.
      various entrepreneurship skill development program as PMKVY, Sikho
      Kamao, DAY-NULM, DDUGKY, Hunar se Rojgar Tak, Sankalp scheme, Nayi
      Roshni, Recruit-Train-Deploy Skill Development Program`,
      image: skill,
    },
    {
      heading: "Empowerment Education System",
      desc: `Transform education system on NEW EDUCATION POLICY focus on
      Digital Learning based Pre School in every Panchayat, Online
      Education System, One Compulsory Skill Development Subject in
      every course, Coding Class from class 6, KAUSHAL YUVA - KUSHAL
      BHARAT, AATMANIRBHAR YUVA- AATMANIRBHAR BHARAT.`,
      image: education,
    },
  ],
};

export default OurPrograms;
