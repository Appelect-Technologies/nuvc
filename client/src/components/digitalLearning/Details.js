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
      <div
        class="card mb-3"
        style={{ border: "none", borderRadius: 0, marginTop: 10 }}
      >
        <div class="row g-0">
          <div class="col-md-8">
            <div className="card">
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>
                <br />
                <h5 class="card-subtitle mb-2 text-muted">
                  Course Description
                </h5>
                <p class="card-text">{course.description}</p>
                <h5 class="card-subtitle mb-2 text-muted">
                  Language : {course.language}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Pre Educational Qualification : {course.qualification}
                  {/* <a href={course.syllabus_url}>
               <i class="fas fa-link"></i>
             </a> */}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Price : {course.price}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Sector : {course.sector}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Duration : {course.duration}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Availability : {course.availability}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Certification Availability from Knowledge Partner :
                  {course.certificationPartner}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  IT Certification Availability from SEED Program :
                  {course.certificationProgram}
                </h5>

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
                  <button type="submit" class="btn btn-outline-success">
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
