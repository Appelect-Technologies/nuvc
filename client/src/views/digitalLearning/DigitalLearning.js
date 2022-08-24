import React from "react";
import DigitalCard from "../../components/digitalLearning/DigitalCard";
import { getDigitalCourses } from "../../utils/dataApi";

import madImage from "../../asstes/digital/mad.jpeg";
import dmImage from "../../asstes/digital/digi-marketing.jpeg";
import bsImage from "../../asstes/digital/blog-social.jpeg";
import banner from "../../asstes/new banners/digi_learning.jpeg";

function DigitalLearning() {
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const courseData = await getDigitalCourses("?limit=15");
      if (courseData) {
        const courses = courseData.courses.map((course) => {
          switch (course.name) {
            case "Web Development":
              course.icon = bsImage;
              return course;
            case "Digital Marketting":
              course.icon = dmImage;
              return course;
            case "Mobile Application Development":
              course.icon = madImage;
              return course;
            default:
              return course;
          }
        });
        setCourses(courses);
      }
    }
    fetchData();
    return () => {
      setCourses([]);
    };
  }, []);
  return (
    <div>
      <img src={banner} style={{ width: "100%" }} />
      <div className="container" style={{ paddingTop: 15, paddingBottom: 15 }}>
        <div className="row">
          {courses?.map((course) => {
            return (
              <div className="col-md-4 col-sm-12">
                <DigitalCard
                  name={course.name}
                  price={course.price}
                  icon={course.icon}
                  discp={course.description}
                  id={course._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DigitalLearning;
