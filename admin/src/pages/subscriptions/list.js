import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import DataGridCompnent from 'src/components/utils/uiComponents/dataGrid';
import { GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'createdAt',
    headerName: 'Date',
    width: 150,
    renderCell: (param) => `${new Date(param.value).toLocaleString()}`,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
  },
  {
    field: 'subscriptions',
    headerName: 'Subscribed To',
    width: 250,
    renderCell: (param) => param.value.title,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
    renderCell: (param) => param.value,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 150,
    renderCell: (param) => param.row.subscriptions.amount,
  },
  {
    field: 'uid',
    headerName: 'UID',
    width: 300,
  },
  {
    field: 'paymentId',
    headerName: 'Payment ID',
    width: 200,
    renderCell: (param) => param.row.subscriptions.paymentID,
  },
  {
    field: 'orderId',
    headerName: 'Order ID',
    width: 200,
    renderCell: (param) => param.row.subscriptions.orderId,
  },
];

function SubscriptionsList({ data }) {
  return (
    <Container maxWidth="xl">
      <Stack mb={2}>
        <Typography variant="h4" gutterBottom>
          Subscriptions
        </Typography>
      </Stack>
      <DataGridCompnent
        columns={columns}
        rows={data}
        dgProps={{
          components: {
            Toolbar: GridToolbar,
          },
        }}
      />
    </Container>
  );
}

export default SubscriptionsList;
