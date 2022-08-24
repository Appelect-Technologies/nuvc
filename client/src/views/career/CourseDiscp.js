import React from "react";
// import desc from "../../asstes/desc.jpg";
import banner from "../../asstes/new banners/scholarship.jpeg";
import { useHistory, useParams } from "react-router-dom";
import { getJob } from "../../utils/dataApi";

function CourseDiscp() {
  const history = useHistory();
  let { id } = useParams();

  const [job, setJob] = React.useState(null);

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
    <div>
      <img src={banner} style={{ width: "100%" }} />
      <div className="container">
        <div class="card mx-lg-4  my-4 shadow-sm" style={{ maxWidth: 500 }}>
          <div class="card-header bg-white">
            <h5 class="card-title">{job.title}</h5>
          </div>

          <div class="card-body">
            {
              //           application_fee: "800"
              // description: "We are currently looking for a data entry operate who can operator our databases for updation and maintenance of the data. Data entry operator should have the knowledge of MS Excel for creating spreadsheets. Ideal Data Entry Operator is the one who knows fast typing, having proper knowledge of entering the data in spreadsheets. Candidate having an experience in Data Entry field be our priority. You have to work with the team of Data Manager"
              // exam_date: "20/09/2022"
              // icon: "fas fa-hands-helping"
              // number_of_vacancies: "8000"
              // qualification: "10th"
              // salary: "9999"
              // syllabus_url: "http://localhost/pdf"
              // title: "job 2"
              // __v: 0
              // _id:
            }
            <h5 class="card-subtitle mb-2 text-muted">Job Description</h5>
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

            <button
              type="button"
              class="btn btn-outline-success w-100"
              onClick={() => history.push("/apply/" + id)}
            >
              Apply Now <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>

          {/* <div class="row g-0">
          {/* <div class="col-md-4">
            <img src={desc} class="img-fluid" alt="desc" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CourseDiscp;
