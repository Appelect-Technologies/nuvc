import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import DataGrid from '../utils/uiComponents/dataGrid';

const Users = ({ data, cols }) => {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4" gutterBottom>
          Users
        </Typography>
      </Stack>
      <DataGrid columns={cols} rows={data} />
    </Container>
  );
};

export default Users;
