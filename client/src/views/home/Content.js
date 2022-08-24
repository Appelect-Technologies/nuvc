import React from "react";
import ContentCard from "./ContentCard";
import News from "./News";
import Notifications from "./Notifications";
// import SmallCard from "../../components/career/SmallCard";
import { getJobs } from "../../utils/dataApi";

function Content() {
  const [jobs, setJobs] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const jobData = await getJobs("?limit=3");

      setJobs(jobData ? jobData.jobs : []);
    }
    // fetchData();
    return () => {
      setJobs([]);
    };
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ContentCard />
        </div>

        <div className="row">
          <div className="col-12 mb-4 mb-sm-0 col-sm-6">
            <News />
          </div>
          <div className="col-12 mb-4 mb-sm-0 col-sm-6">
            <Notifications />
          </div>
        </div>
        {/* <div className="col-sm-6">
          <Notifications />
          <News />
        </div> */}
        {/* <Notifications />
        <News /> */}
      </div>
      <div style={{ height: 40, marginTop: 10, display: "none" }}>
        <center>
          <h5 className="card-title">Digital Learning</h5>
        </center>
      </div>
      <div className="row" style={{ display: "none" }}>
        {/* {jobs?.map((job) => {
          return (
            <div className="col-md-4 col-sm-12">
              <SmallCard
                title={job.title}
                salary={job.salary}
                icon={job.icon}
                id={job._id}
              />
            </div>
          );
        })} */}
      </div>
      <div style={{ height: 40, marginTop: 10, display: "none" }}>
        <center>
          <a href="#">
            Read more <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </center>
      </div>
    </div>
  );
}

export default Content;
