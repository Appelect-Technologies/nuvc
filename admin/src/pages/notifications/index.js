import { CircularProgress } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import FullScreenDialog from 'src/components/fullScreenDialog';
import { getNotifications } from 'src/services';
import CreateNotification from './createNotification';
import ListComponent from './list';

const Notifications = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);

  const [show, setShow] = useState(false);

  const handleFetchData = async () => {
    try {
      setIsFetching(true);
      const res = await getNotifications('?type=notify');
      if (Array.isArray(res.data.news)) {
        const vals = res.data.news.map((item, i) => ({ ...item, id: i + 1 }));
        setValues(vals);
      }
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
      <ListComponent data={values} onAdd={handleShowDialog} />
      <FullScreenDialog title="Add Notifications" open={show} handleClose={handleHideDialog}>
        <CreateNotification />
      </FullScreenDialog>
    </Fragment>
  );
};

export default Notifications;
