import { CircularProgress } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import FullScreenDialog from 'src/components/fullScreenDialog';
import { getJobs } from 'src/services';
import CreateJobForm from './createJob';
import JobsComponent from './list';

const Jobs = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);
  const [show, setShow] = useState(false);

  const handleFetchData = async () => {
    try {
      setIsFetching(true);
      const res = await getJobs();
      const vals = res.data.jobs.map((item, i) => ({ ...item, id: i + 1 }));
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

  const handleShowDialog = () => {
    setShow(true);
  };

  const handleHideDialog = () => {
    setShow(false);
    handleFetchData();
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  if (isFetching) return <CircularProgress />;
  return (
    <Fragment>
      <JobsComponent data={values} onAdd={handleShowDialog} />
      <FullScreenDialog title="Add New Job" open={show} handleClose={handleHideDialog}>
        <CreateJobForm />
      </FullScreenDialog>
    </Fragment>
  );
};

export default Jobs;
