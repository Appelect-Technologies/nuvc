import React from "react";
import SmallCard from "../../components/career/SmallCard";
import { getJobs } from "../../utils/dataApi";

function Career() {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const jobData = await getJobs("?limit=15");
      setJobs(jobData ? jobData.jobs : []);
    }
    fetchData();
    return () => {
      setJobs([]);
    };
  }, []);

  return (
    <div className="container">
      {/* <Process /> */}
      <div className="row">
        {jobs?.map((job) => {
          return (
            <div className="col-12 col-md-6 col-xl-4">
              <SmallCard
                title={job.title}
                salary={job.salary}
                icon={job.icon}
                id={job._id}
                url1={job.url1}
                url2={job.url2}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Career;
