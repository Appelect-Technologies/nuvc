import React from "react";
import { toast } from "react-toastify";
import { getJobs } from "../../../utils/dataApi";

function SelectJob({ nextStep, jobId, setSelectedJobId }) {
  const [jobs, setJobs] = React.useState([]);
  const [error, setError] = React.useState("");

  const handleSelectAndContinue = () => {
    if (jobId) {
      nextStep();
      toast.success("1st step completed");
    } else {
      setError("Please select a job");
    }
  };

  const handleSelectJob = (e) => {
    const { value } = e.target;
    setError("");
    setSelectedJobId(value);
  };

  const fetchData = async () => {
    try {
      const jobData = await getJobs("");
      setJobs(jobData ? jobData.jobs : []);
    } catch (error) {
      toast.error("Network Error");
    }
  };

  React.useEffect(() => {
    fetchData();
    return () => {
      setJobs([]);
    };
  }, []);

  return (
    <div className="card my-4 shadow-sm">
      <div className="card-header">
        <h5 className="card-title">Select a Job you want to apply for</h5>
      </div>
      <div className="card-body">
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          onChange={handleSelectJob}
          value={jobId}
        >
          <option selected value={""}>
            Select
          </option>
          {jobs.map((_, i) => (
            <option value={_._id}>{_.title}</option>
          ))}
        </select>
        <p className="text-danger">{error}</p>
      </div>
      <div className="card-footer">
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={handleSelectAndContinue}
        >
          Next <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SelectJob;
