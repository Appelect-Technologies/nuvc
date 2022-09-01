import { CircularProgress } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { getSubscriptions } from 'src/services';
import ApplicantsComponent from './list';

const Subscriptions = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);

  const handleFetchData = async () => {
    try {
      setIsFetching(true);
      const res = await getSubscriptions();
      const vals = res.data.data.map((item, i) => ({ ...item, id: i + 1 }));
      setValues(vals);
    } catch (error) {
      console.log(error);
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

export default Subscriptions;
