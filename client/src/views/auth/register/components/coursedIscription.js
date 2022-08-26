import React from "react";
import { useHistory } from "react-router-dom";

function CourseDiscp({ job }) {
  const history = useHistory();
  return (
    <div className="col-12 col-lg-6 col-xl-4">
      <div
        class="card m-auto mx-lg-4  my-4 shadow-sm"
        style={{ maxWidth: 500 }}
      >
        <div class="card-header bg-white">
          <h5 class="card-title">{job.title}</h5>
        </div>

        <div class="card-body">
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
            // onClick={() => onSelect(job._id)}
            onClick={() => history.push("/apply/" + job._id)}
          >
            Apply Now <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDiscp;
