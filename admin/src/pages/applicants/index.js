import { CircularProgress } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { getJobApplicants } from 'src/services';
import ApplicantsComponent from './list';

const Applicants = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);

  const handleFetchData = async () => {
    try {
      setIsFetching(true);
      const res = await getJobApplicants();
      const vals = res.data.jobapplicants.map((item, i) => ({ ...item, id: i + 1 }));
      setValues(vals);
      // console.log('this is jobs: ', vals);
    } catch (error) {
      alert(JSON.stringify(error));
    } finally {
      setTimeout(() => {
        setIsFetching(false);
      }, 500);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  if (isFetching) return <CircularProgress />;
  return (
    <Fragment>
      <ApplicantsComponent data={values} />
    </Fragment>
  );
};

export default Applicants;
