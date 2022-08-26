import { Avatar, CircularProgress } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import FullScreenDialog from 'src/components/fullScreenDialog';
import { getNews } from 'src/services';
import CreateNews from './createNews';
import NewsComponent from './list';

const News = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);
  const [show, setShow] = useState(false);

  const handleShowDialog = () => {
    setShow(true);
  };

  const handleHideDialog = () => {
    setShow(false);
    handleFetchData();
  };

  const handleFetchData = async () => {
    try {
      setIsFetching(true);
      const res = await getNews('?type=news');
      if (res.data.news) {
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

  useEffect(() => {
    handleFetchData();
  }, []);

  if (isFetching) return <CircularProgress />;
  return (
    <Fragment>
      <NewsComponent data={values} onAdd={handleShowDialog} />
      <FullScreenDialog title="Add News" open={show} handleClose={handleHideDialog}>
        <CreateNews />
      </FullScreenDialog>
    </Fragment>
  );
};

export default News;
