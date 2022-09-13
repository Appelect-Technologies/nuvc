import { CircularProgress } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { getCourses } from 'src/services';
import AllCoursesComponent from './list';
import CreateCourse from './createCourse';
import FullScreenDialog from 'src/components/fullScreenDialog';
import UpdatecourseComponent from './Updatecourse';

const Courses = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);
  const [show, setShow] = useState(false); 
  const [UpdateCourse, setUpdateCourse] = useState({
    show: false,
    data: null,
  });

  const handleFetchData = async () => {
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

  const handleShowUpdateCourseScreen = (values) => {
    setUpdateCourse({
      show: true,
      data: values,
    });
  };

  const handleHideUpdateCourseScreen = () => {
    setUpdateCourse({
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
      <AllCoursesComponent
        data={values}
        onAdd={handleShowDialog}
        handleShowUpdateCourseScreen={handleShowUpdateCourseScreen}
      />
      <FullScreenDialog title="Add Digital Learning Program" open={show} handleClose={handleHideDialog}>
        <CreateCourse />
      </FullScreenDialog>
      {UpdateCourse.show && (
        <FullScreenDialog title="Update Course" open={UpdateCourse.show} handleClose={handleHideUpdateCourseScreen}>
          <UpdatecourseComponent data={UpdateCourse.data} />
        </FullScreenDialog>
      )}
    </Fragment>
  );
};

export default Courses;
