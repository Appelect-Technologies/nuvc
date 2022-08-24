import * as React from 'react';
import { default as MuiAppbar } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
  return (
    <React.Fragment>
      <MuiAppbar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NUVC Admin Dashboard
            </Typography>
          </Toolbar>
        </Container>
      </MuiAppbar>

      <Outlet />
    </React.Fragment>
  );
};
export default AppBar;
