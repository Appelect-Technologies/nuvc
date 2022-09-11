import { Avatar, Button, Container, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';
import DataGridCompnent from 'src/components/utils/uiComponents/dataGrid';

const getColumns = (handleShowUpdateCourseScreen) => [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'icon',
    headerName: 'Image',
    width: 150,
    renderCell: (param) => <Avatar src={param.value} />,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    renderCell: (param) => <Button onClick={() => alert(param.value)}>See Desc</Button>,
  },
  {
    field: 'qualification',
    headerName: 'Qualification',
    width: 150,
  },
  {
    field: 'language',
    headerName: 'Language',
    width: 150,
  },
  {
    field: 'duration',
    headerName: 'Duration',
    width: 150,
  },
  {
    field: 'sector',
    headerName: 'Sector',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
  },
  {
    field: 'availability',
    headerName: 'Availability',
    width: 150,
  },
  {
    field: 'certificationProgram',
    headerName: 'Certification Program',
    width: 200,
  },
  {
    field: 'certificationPartner',
    headerName: 'Certification Partner',
    width: 200,
  },

  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (param) => (
      <Tooltip title="Click to edit">
        <Button onClick={() => handleShowUpdateCourseScreen(param.row)}>Edit</Button>
      </Tooltip>
    ),
  },
];

const ListCourses = ({ data, onAdd = () => {}, handleShowUpdateCourseScreen }) => {
  const columns = getColumns(handleShowUpdateCourseScreen);

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4" gutterBottom>
          Digital Learning Programs
        </Typography>
        <Tooltip title="click to add job">
          <Button variant="contained" onClick={onAdd}>
            Add New Program
          </Button>
        </Tooltip>
      </Stack>
      <DataGridCompnent columns={columns} rows={data} />
    </Container>
  );
};

export default ListCourses;
