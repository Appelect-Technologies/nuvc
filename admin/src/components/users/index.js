import { Avatar, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import DataGrid from '../utils/uiComponents/dataGrid';

const cols = [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'photoURL',
    headerName: 'Profile',
    width: 100,
    renderCell: (param) => <Avatar src={param.value} />,
  },
  {
    field: 'displayName',
    headerName: 'Name',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
];

const Users = ({ data }) => {
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
