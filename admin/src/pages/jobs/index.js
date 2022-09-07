import { CircularProgress } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import FullScreenDialog from 'src/components/fullScreenDialog';
import { getJobs } from 'src/services';
import CreateJobForm from './createJob';
import JobsComponent from './list';
import UpdateJobForm from './updateJob';

const Jobs = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);
  const [show, setShow] = useState(false);
  const [updateJob, setUpdateJob] = useState({
    show: false,
    data: null,
  });

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

  // update funcitons
  const handleShowUpdateJobScreen = (values) => {
    setUpdateJob({
      show: true,
      data: values,
    });
  };

  const handleHideUpdateJobScreen = () => {
    setUpdateJob({
      show: false,
      data: null,
    });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  if (isFetching) return <CircularProgress />;
  return (
    <Fragment>
      <JobsComponent data={values} onAdd={handleShowDialog} handleShowUpdateJobScreen={handleShowUpdateJobScreen} />
      <FullScreenDialog title="Add New Job" open={show} handleClose={handleHideDialog}>
        <CreateJobForm />
      </FullScreenDialog>
      {updateJob.show && (
        <FullScreenDialog title="Update Job" open={updateJob.show} handleClose={handleHideUpdateJobScreen}>
          <UpdateJobForm data={updateJob.data} />
        </FullScreenDialog>
      )}
    </Fragment>
  );
};

export default Jobs;
