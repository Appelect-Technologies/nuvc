import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getLeads } from 'src/services';
import AllLeadsComponent from '../../components/leads';

const cols = [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },
  {
    field: 'number',
    headerName: 'number',
    width: 150,
  },
  {
    field: 'reason',
    headerName: 'reason',
    width: 150,
  },
  {
    field: 'message',
    headerName: 'message',
    width: 500,
  },
  {
    field: 'createdAt',
    headerName: 'Date',
    width: 150,
    renderCell: (param) => new Date(param.value).toDateString(),
  },
];

const Leads = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const res = await getLeads();
        const vals = res.data.leads.map((item, i) => ({ ...item, id: i + 1 }));
        setValues(vals);
      } catch (error) {
        alert(JSON.stringify(error));
      } finally {
        setTimeout(() => {
          setIsFetching(false);
        }, 500);
      }
    })();
  }, []);

  if (isFetching) return <CircularProgress />;
  return <AllLeadsComponent data={values} cols={cols} />;
};

export default Leads;
