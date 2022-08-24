import { Avatar, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getNews } from 'src/services';
import NewsComponent from './list';

const News = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const res = await getNews('?type=news');
        if (res.data.news) {
          const vals = res.data.news.map((item, i) => ({ ...item, id: i + 1 }));
          // console.log('this is News: ', vals);
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
  return <NewsComponent data={values} />;
};

export default News;
