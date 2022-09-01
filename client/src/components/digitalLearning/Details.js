import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { getDigitalCourse } from "../../utils/dataApi";
import { app } from "../../auth/auth";
import { getAuth } from "firebase/auth";
import coursePay from "../../utils/coursePay";

import axios from "axios";
import { config } from "../../config";

function CourseDetails() {
  const auth = getAuth(app);
  // pay(jobId, auth?.currentUser?.uid, res.data.body);
  const [course, setCourse] = React.useState(null);
  const history = useHistory();
  let { cid } = useParams();

  const {
    email = "",
    displayName = "",
    phoneNumber = "",
    uid = "",
  } = auth.currentUser || {
    email: "",
    displayName: "",
    phoneNumber: "",
    uid: "",
  };

  const pay = () => {
    if (!auth.currentUser) {
      history.push("/login");
      return;
    }
    if (cid?.length < 6) {
      return;
    }

    coursePay(cid, uid, {
      email,
      name: displayName,
      phone: phoneNumber,
    });
    // payNow({});
  };

  const payNow = async (data) => {
    axios
      .post("https://nuvc.org/pay10", data)
      .then((res) => {
        console.log("payment deetails save");
      })
      .catch((err) => {
        console.log("server error");
      });
  };

  async function fetchData() {
    try {
      const courseData = await getDigitalCourse("?id=" + cid);
      setCourse(courseData && courseData.digital);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    if (!auth.currentUser) {
      history.push("/reg");
    } else {
      fetchData();
    }
    return () => {
      setCourse(null);
    };
  }, []);

  if (!auth.currentUser) {
    return null;
  }

  if (!course) {
    return (
      <div className="container">
        <div
          class="card mb-3"
          style={{ border: "none", borderRadius: 0, marginTop: 10 }}
        >
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div class="card m-1 m-md-4 shadow-sm">
        <div class="row g-0">
          {course.icon && (
            <div className="col-md-4">
              <img
                src={course.icon}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          )}
          <div class="col-md-8">
            <div className="card">
              <div class="card-body">
                <h4 class="card-title">{course.name}</h4>
                <br />
                <h5 class="card-subtitle mb-2">Course Description</h5>
                <p class="card-text">{course.description}</p>
                {course.language && (
                  <h6 class="card-subtitle mb-2">
                    Language : {course.language}
                  </h6>
                )}
                {course.qualification && (
                  <h6 class="card-subtitle mb-2">
                    Pre Educational Qualification : {course.qualification}
                    {/* <a href={course.syllabus_url}>
               <i class="fas fa-link"></i>
             </a> */}
                  </h6>
                )}
                <h6 class="card-subtitle mb-2">Price : {course.price}</h6>
                {course.sector && (
                  <h6 class="card-subtitle mb-2">Sector : {course.sector}</h6>
                )}
                {course.duration && (
                  <h6 class="card-subtitle mb-2">
                    Duration : {course.duration}
                  </h6>
                )}
                {course.availability && (
                  <h6 class="card-subtitle mb-2">
                    Availability : {course.availability}
                  </h6>
                )}

                {course.certificationPartner && (
                  <h6 class="card-subtitle mb-2">
                    Certification Availability from Knowledge Partner:{" "}
                    {course.certificationPartner}
                  </h6>
                )}

                {course.certificationProgram && (
                  <h6 class="card-subtitle mb-2">
                    IT Certification Availability from SEED Program:{" "}
                    {course.certificationProgram}
                  </h6>
                )}

                <p class="card-text">
                  <small class="text-muted">
                    {new Date(course.createdAt).toDateString()}
                  </small>
                </p>

                <form method="post" action={config.paymentUrl}>
                  <input type="text" value={cid} name="id" hidden />
                  <input type="text" value={uid} name="uid" hidden />
                  <input type="text" value={email} name="email" hidden />
                  <input type="text" value={phoneNumber} name="phone" hidden />
                  <input type="text" value={displayName} name="name" hidden />
                  <input type="text" value="course" name="type" hidden />
                  <button
                    type="submit"
                    class="btn w-100 btn-lg btn-outline-success"
                  >
                    Get Now <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
