import React from "react";
import DigitalCard from "../../components/digitalLearning/DigitalCard";
import { getDigitalCourses } from "../../utils/dataApi";
import hero from "../../asstes/digital/hero.png";

function DigitalLearning() {
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const courseData = await getDigitalCourses("?limit=15");
      if (courseData) {
        setCourses(courseData.courses);
      }
    }
    fetchData();
    return () => {
      setCourses([]);
    };
  }, []);
  return (
    <div>
      <div>
        <img src={hero} style={{ width: "98.9vw", height: "15vw" }} />
      </div>
      <div
        className="container-fluid"
        style={{ paddingTop: 15, paddingBottom: 15 }}
      >
        <div className="row">
          {courses?.map((course) => {
            return (
              <div className="col-12 col-md-6 col-xl-4">
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
