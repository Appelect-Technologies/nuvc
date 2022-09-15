import { CircularProgress } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import FullScreenDialog from 'src/components/fullScreenDialog';
import { getCenter } from 'src/services';
import CreateCenterForm from './createCenters';
import CenterComponent from './list';
import UpdateCenterForm from './UpdateCenter';

const Center = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);
  const [show, setShow] = useState(false);
  const [updateCenter, setUpdateCenter] = useState({
    show: false,
    data: null,
  });

  const handleFetchData = async () => {
    try {
      setIsFetching(true);
      const res = await getCenter();
      const vals = res.data.map((item, i) => ({ ...item, id: i + 1, srNo: i + 1 }));
      setValues(vals);
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
  const handleShowUpdateCenterScreen = (values) => {
    setUpdateCenter({
      show: true,
      data: values,
    });
  };

  const handleHideUpdateCenterScreen = () => {
    setUpdateCenter({
      show: false,
      data: null,
    });
    handleFetchData();
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  if (isFetching) return <CircularProgress />;
  return (
    <Fragment>
      <CenterComponent
        data={values}
        onAdd={handleShowDialog}
        handleShowUpdateCenterScreen={handleShowUpdateCenterScreen}
      />
      <FullScreenDialog title="Training centers" open={show} handleClose={handleHideDialog}>
        <CreateCenterForm />
      </FullScreenDialog>
      {updateCenter.show && (
        <FullScreenDialog title="Update Center" open={updateCenter.show} handleClose={handleHideUpdateCenterScreen}>
          <UpdateCenterForm data={updateCenter.data} />
        </FullScreenDialog>
      )}
    </Fragment>
  );
};

export default Center;
