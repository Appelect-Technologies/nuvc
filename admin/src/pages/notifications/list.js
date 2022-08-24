import { Avatar, Button, Container, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';
import DataGridCompnent from 'src/components/utils/uiComponents/dataGrid';

const cols = [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    renderCell: (param) => <Avatar src={param.value} />,
  },
  {
    field: 'title',
    headerName: 'title',
    width: 300,
  },
  {
    field: 'description',
    headerName: 'description',
    width: 150,
    renderCell: (param) => {
      return <Button onClick={() => alert(param.value)}>See Desc</Button>;
    },
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
    renderCell: (param) => new Date(param.value).toLocaleString(),
  },
];

function ListNews({ data, onAdd = () => {} }) {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4" gutterBottom>
          Notifications
        </Typography>
        <Tooltip title="click to add job">
          <Button variant="contained" onClick={onAdd}>
            Add
          </Button>
        </Tooltip>
      </Stack>
      <DataGridCompnent columns={cols} rows={data} />
    </Container>
  );
}

export default ListNews;
