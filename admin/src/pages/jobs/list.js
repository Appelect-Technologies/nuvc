import { Avatar, Button, Container, Stack, Tooltip, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import DataGridCompnent from 'src/components/utils/uiComponents/dataGrid';

const cols = [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'icon',
    headerName: 'Image',
    width: 150,
    renderCell: (param) => <Avatar src={param.value} />,
  },
  {
    field: 'title',
    headerName: 'title',
    width: 400,
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
    field: 'exam_date',
    headerName: 'exam date',
    width: 150,
  },
  {
    field: 'application_fee_dis',
    headerName: 'application fee dis',
    width: 180,
  },
  {
    field: 'application_fee',
    headerName: 'application fee',
    width: 180,
  },
  {
    field: 'url1',
    headerName: 'url1',
    width: 150,
  },
  {
    field: 'url2',
    headerName: 'url2',
    width: 150,
  },
  {
    field: 'qualification',
    headerName: 'qualification',
    width: 150,
  },
  {
    field: 'number_of_vacancies',
    headerName: 'No of vacancies',
    width: 150,
  },
  {
    field: 'salary',
    headerName: 'salary',
    width: 150,
  },
  {
    field: 'syllabus url',
    headerName: 'syllabus url',
    width: 150,
  },
];

function ListJobs({ data, onAdd = () => {} }) {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4" gutterBottom>
          Jobs
        </Typography>
        <Tooltip title="click to add job">
          <Button variant="contained" onClick={onAdd}>
            Add Job
          </Button>
        </Tooltip>
      </Stack>
      <DataGridCompnent columns={cols} rows={data} />
    </Container>
  );
}

export default ListJobs;
