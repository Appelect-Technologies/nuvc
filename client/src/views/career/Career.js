import { Container, Grid } from "@mui/material";
import React from "react";
import SmallCard from "../../components/career/SmallCard";
import VacancyCard from "../../components/career/VacancyCard";
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
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={2}>
        {jobs?.map((job) => {
          return (
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <VacancyCard {...job} />
            </Grid>
          );
          // return (
          //   <div className="col-12 col-md-6 col-xl-4">
          //     <SmallCard
          //       title={job.title}
          //       salary={job.salary}
          //       icon={job.icon}
          //       id={job._id}
          //       url1={job.url1}
          //       url2={job.url2}
          //     />
          //   </div>
          // );
        })}
      </Grid>
    </Container>
  );
}

export default Career;
