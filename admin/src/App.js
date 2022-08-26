import React from 'react';
// import React, { useState, useEffect } from 'react';
import Router from './routes';
// import { useDispatch } from 'react-redux';
import ThemeProvider from './theme';
// import * as AuthActions from './store/auth/actions';

// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import { Toaster } from 'react-hot-toast';

// ----------------------------------------------------------------------

export default function App() {
  // const [isFetching, setIsFetching] = useState(false);
  // const dispatch = useDispatch();

  // const handleFetchSession = async () => {
  //   try {
  //     if (!localStorage.getItem('access_token')) return;
  //     setIsFetching(true);
  //     dispatch(AuthActions.UserSession());
  //   } catch (error) {
  //     console.error('Error while fetching session: ', error);
  //   } finally {
  //     setIsFetching(false);
  //   }
  // };

  // useEffect(() => {
  //   handleFetchSession();
  // }, []);

  // if (isFetching) {
  //   return <div>fetching...</div>;
  // }
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}
