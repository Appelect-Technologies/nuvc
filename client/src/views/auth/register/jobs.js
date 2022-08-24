import React from "react";
import { toast } from "react-toastify";
import { getJobs } from "../../../utils/dataApi";
import CourseDiscp from "./components/coursedIscription";

function Jobs() {
  const [jobs, setJobs] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);

  const fetchData = async () => {
    try {
      const jobData = await getJobs("?limit=15");
      setJobs(jobData ? jobData.jobs : []);
    } catch (error) {
      toast.error("Error occured");
    } finally {
      setIsFetching(false);
    }
  };

  React.useEffect(() => {
    fetchData();
    return () => {
      setJobs([]);
    };
  }, []);

  if (!isFetching && jobs.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row">
      {jobs.map((job, i) => (
        <CourseDiscp job={job} onSelect={(id) => console.log(id)} />
      ))}
    </div>
  );
}

export default Jobs;
