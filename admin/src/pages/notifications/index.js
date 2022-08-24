import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getNotifications } from 'src/services';
import ListComponent from './list';

const Notifications = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  if (isFetching) return <CircularProgress />;
  return <ListComponent data={values} />;
};

export default Notifications;
