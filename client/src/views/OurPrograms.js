import React from "react";
import enterpreniur from "../asstes/entrepreneur.jpeg";
import employment from "../asstes/employment.jpeg";
import skill from "../asstes/skill.jpeg";
import education from "../asstes/education.jpeg";

function OurPrograms({ data }) {
  return (
    <div
      style={{
        backgroundColor: "#5c007a",
        borderRadius: "2px",
        width: "98.9vw",
        // display: "flex",
        padding: "50px",
      }}
    >
      <center>
        <br />
        <h2 style={{ color: "white", fontWeight: "bold", fontSize: "3rem" }}>
          Our Programs
        </h2>
        <br />
      </center>
      <div class="row no-gutters">
        {data.map((item, i) => (
          <div className="col-md-3 col-sm-12" key={i}>
            <div
              class=" p-3 mb-5 bg-white rounded"
              style={{ boxShadow: " 5px 5px 10px skyblue inset" }}
            >
              <img
                src={item.image}
                class="card-img-top"
                style={{ objectFit: "cover" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ textAlign: "center" }}>
                  {item.heading}
                </h5>
                <p class="card-text" style={{ textAlign: "justify" }}>
                  {item.desc}
                </p>
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
      Rojgar Abhiyan, etc`,
      image:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/%E0%A4%86%E0%A4%A4%E0%A5%8D%E0%A4%AE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%B0+%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4+%E0%A4%B0%E0%A5%8B%E0%A4%9C%E0%A4%97%E0%A4%BE%E0%A4%B0+%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE.png",
    },
    {
      heading: "Entrepreneur Development Center",
      desc: `To match local entrepreneurs with local investors.Promoting awareness on various scheme of Ministry of Micro, Small
      and Medium Enterprises, Startup India, Standup India,
      Entrepreneurship Development Program of different Ministries.
      Promoting awareness on fundraising through loan or equity
      investor.`,
      image:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/Entrepreneurship-post--website.png",
    },
    {
      heading: "Skill Development Program",
      desc: `To train unemployed youth respective of available opportunities and various entrepreneurship skill development program as PMKVY, Sikho Kamao, DAY-NULM, DDUGKY, Hunar se Rojgar Tak, Sankalp scheme, Nayi Roshni, Recruit-Train-Deploy Skill Development Program`,
      image:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/Skill+Development+Program.png",
    },
    {
      heading: "Empowerment Education System",
      desc: `Transform education system on NEW EDUCATION POLICY focus on
      Digital Learning based Pre School in every Panchayat, Online
      Education System, One Compulsory Skill Development Subject in
      every course, Coding Class from class 6, KAUSHAL YUVA - KUSHAL
      BHARAT, AATMANIRBHAR YUVA- AATMANIRBHAR BHARAT.`,
      image:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/NEW++NATIONAL.png",
    },
  ],
};

export default OurPrograms;
