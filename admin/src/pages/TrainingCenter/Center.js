import { CircularProgress, List } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import FullScreenDialog from 'src/components/fullScreenDialog';
import { getCenter } from 'src/services';
import { CreateCenter } from 'src/services';
import CreateCenterForm from './createCenters';
import CenterComponent from './list';

const Center = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);
  const [show, setShow] = useState(false);

  const handleFetchData = async () => {
    try {
      setIsFetching(true);
      const res = await getCenter();
<<<<<<< HEAD
      const vals = res.data.CenterComponent.map((item, i) => ({ ...item, id: i + 1 }));
=======
      const vals = res.data.map((item, i) => ({ ...item, id: i + 1 }));
>>>>>>> main
      setValues(vals);
      console.log('this is jobs: ', vals);
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
        <CreateCenterForm />
      </FullScreenDialog>
    </Fragment>
  );
};

export default Center;
