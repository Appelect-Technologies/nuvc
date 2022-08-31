import React, { useState } from 'react';
import { AppBar, Button, Container, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import DataGridCompnent from 'src/components/utils/uiComponents/dataGrid';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import ReactJson from 'react-json-view';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns = (handleClick) => [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'fname',
    headerName: 'Applicant Name',
    width: 150,
    renderCell: (param) => `${param.row.fname} ${param.row.lname}`,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
  },
  {
    field: 'jobId',
    headerName: 'Job',
    width: 100,
    renderCell: (param) => param.value.title,
  },
  {
    field: 'isPaid',
    headerName: 'Payment',
    width: 100,
    renderCell: (param) => (param.value ? 'Paid' : 'Pending'),
  },
  {
    field: 'action',
    headerName: 'Actions',
    width: 150,
    renderCell: (param) => (
      <Tooltip title="Click to go to url">
        <Button onClick={handleClick.bind(this, param.row)}>View</Button>
      </Tooltip>
    ),
  },
];

function ListJobs({ data }) {
  const [dialog, setDialog] = useState({
    show: false,
    data: null,
  });

  const handleShow = (values) => {
    setDialog({
      show: true,
      data: values,
    });
  };

  const handleHide = () => {
    setDialog({
      show: false,
      data: null,
    });
  };

  const cols = columns(handleShow);

  return (
    <Container maxWidth="xl">
      <Stack mb={2}>
        <Typography variant="h4" gutterBottom>
          Applicants
        </Typography>
      </Stack>
      <DataGridCompnent columns={cols} rows={data} />
      <Dialog open={dialog.show} TransitionComponent={Transition} keepMounted onClose={handleHide}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={handleHide} size="large" color="inherit" edge="start" sx={{ ml: 'auto' }}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <DialogTitle>{'Details'}</DialogTitle>
        <DialogContent>
          <ReactJson src={dialog.data} />
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default ListJobs;
