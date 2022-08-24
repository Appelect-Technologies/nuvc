import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCourses } from 'src/services';
import AllCoursesComponent from './list';

const Courses = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const res = await getCourses();
        const vals = res.data.courses.map((item, i) => ({ ...item, id: i + 1 }));
        setValues(vals);
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
  return <AllCoursesComponent data={values} />;
};

export default Courses;
