import { getAuth } from "firebase/auth";
import React from "react";
// import desc from "../../asstes/desc.jpg";
// import banner from "../../asstes/new banners/scholarship.jpeg";
import { useHistory, useParams } from "react-router-dom";
import { app } from "../../auth/auth";
import { getJob } from "../../utils/dataApi";

function CourseDiscp() {
  const history = useHistory();
  const auth = getAuth(app);
  let { id } = useParams();

  const [job, setJob] = React.useState(null);

  const handleRedirect = () => {
    if (auth && auth.currentUser) {
      history.push("/apply/" + id);
    } else {
      history.push(`/reg?redirect=/apply/${id}`);
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      const jobData = await getJob("?id=" + id);

      setJob(jobData && jobData.job);
    }
    fetchData();
    return () => {
      setJob(null);
    };
  }, []);

  if (!job) {
    return null;
  }

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div class="card mx-lg-4  my-4 shadow-lg" style={{ maxWidth: "80%" }}>
        <div class="card-header bg-white">
          <h4 class="card-title" style={{ textAlign: "center" }}>
            {job.title}
          </h4>
        </div>

        <div class="card-body">
          <img src={job.icon} style={{ width: "100%", height: "22vw" }} />
          <h5
            class="card-subtitle mb-2 text-muted"
            style={{ paddingTop: "1vw" }}
          >
            Job Description
          </h5>
          <p class="card-text">{job.description}</p>
          <h5 class="card-subtitle mb-2 text-muted">
            No. Of Vacancies : {job.number_of_vacancies}
          </h5>

          <h5 class="card-subtitle mb-2 text-muted">
            Educational Qualification : {job.qualification}
            <a href={job.syllabus_url}>
              <i class="fas fa-link"></i>
            </a>
          </h5>

          <h5 class="card-subtitle mb-2 text-muted">Salary : {job.salary}</h5>
          <h5 class="card-subtitle mb-2 text-muted">
            Last Date : {job.lastdate}
          </h5>
          <h5 class="card-subtitle mb-2 text-muted">
            Exame Date : {job.exam_date}
          </h5>
          <h5 class="card-subtitle mb-2 text-muted">
            Fee for General/OBC : {job.application_fee}/-
          </h5>
          <h5 class="card-subtitle mb-2 text-muted">
            Fee for SC/ST or Physically Challenged : {job.application_fee_dis}
            /-
          </h5>

          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>

          {false ? (
            <button
              type="button"
              class="btn btn-success w-100"
              // onClick={() => history.push("/apply/" + id)}
            >
              Already Enrolled <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-outline-success w-100"
              onClick={() => handleRedirect(id)}
            >
              Apply Now <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          )}
        </div>

        {/* <div class="row g-0">
          {/* <div class="col-md-4">
            <img src={desc} class="img-fluid" alt="desc" />
          </div> */}
      </div>
    </div>
  );
}

export default CourseDiscp;
