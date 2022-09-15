import React from 'react';
import { Avatar, Button, Container, Stack, Tooltip, Typography } from '@mui/material';
import DataGridCompnent from 'src/components/utils/uiComponents/dataGrid';

const getColumns = (handleShowUpdateCenterScreen) => [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'srNo',
    headerName: 'Sr.No.',
    width: 150,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 400,
  },
  {
    field: 'district',
    headerName: 'District',
    width: 150,
  },
  {
    field: 'tpName',
    headerName: 'TP Name',
    width: 150,
  },
  {
    field: 'tcName',
    headerName: 'TC Name',
    width: 180,
  },
  {
    field: 'sector',
    headerName: 'Sector',
    width: 180,
  },
  {
    field: 'jobRole',
    headerName: 'Job Role',
    width: 150,
  },
  {
    field: 'tcSpocName',
    headerName: 'TC SPOC Name',
    width: 150,
  },
  {
    field: 'tcSpocEmail',
    headerName: 'TC SPOC Email ID',
    width: 150,
  },
  {
    field: 'TCSpocMobile',
    headerName: '	TC Spoc Mobile',
    width: 150,
  },
  {
    field: 'tcAddress',
    headerName: 'TC Address',
    width: 150,
  },
  // {
  //   field: 'syllabus_url',
  //   headerName: 'syllabus url',
  //   width: 150,
  //   renderCell: (param) => (
  //     <Tooltip title="Click to go to url">
  //       <Button href={param.value} target="_blank">
  //         Link
  //       </Button>
  //     </Tooltip>
  //   ),
  // },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (param) => (
      <Tooltip title="Click to edit">
        <Button
          onClick={() => {
            handleShowUpdateCenterScreen(param.row);
          }}
        >
          Edit
        </Button>
      </Tooltip>
    ),
  },
];

function ListCenter({ data, onAdd = () => {}, handleShowUpdateCenterScreen }) {
  const columns = getColumns(handleShowUpdateCenterScreen);
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h4" gutterBottom>
          Centers
        </Typography>
        <Tooltip title="click to add job">
          <Button variant="contained" onClick={onAdd}>
            Center
          </Button>
        </Tooltip>
      </Stack>
      <DataGridCompnent columns={columns} rows={data} />
    </Container>
  );
}

export default ListCenter;
