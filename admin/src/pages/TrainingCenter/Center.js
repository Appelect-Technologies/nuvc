import { CircularProgress, List } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import FullScreenDialog from 'src/components/fullScreenDialog';
import { getCenter } from 'src/services';
import CreateJobForm from './createCenters';
import CenterComponent from './list';

const Center = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);
  const [show, setShow] = useState(false);

  const handleFetchData = async () => {
    try {
      setIsFetching(true);
      const res = await getCenter();
      const vals = res.data.map((item, i) => ({ ...item, id: i + 1 }));
      setValues(vals);
      // console.log('this is jobs: ', vals);
    } catch (error) {
      // alert(JSON.stringify(error));
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
      <CenterComponent data={values} onAdd={handleShowDialog} />
      <FullScreenDialog title="Center " open={show} handleClose={handleHideDialog}>
        <CreateJobForm />
      </FullScreenDialog>
    </Fragment>
  );
};

export default Center;
