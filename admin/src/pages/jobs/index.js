import { Avatar, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getJobs } from 'src/services';
import JobsComponent from './list';

const Jobs = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const res = await getJobs();
        const vals = res.data.jobs.map((item, i) => ({ ...item, id: i + 1 }));
        // setValues(vals);
        console.log('this is jobs: ', vals);
      } catch (error) {
        alert(JSON.stringify(error));
      } finally {
        setTimeout(() => {
          setIsFetching(false);
        }, 500);
      }
    })();
  }, []);

  if (isFetching) return <CircularProgress />;
  return <JobsComponent data={values} />;
};

export default Jobs;
