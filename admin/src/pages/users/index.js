import { Avatar, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getUsers } from 'src/services';
import AllUsersComponent from '../../components/users';

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
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
  },
];

const AllUsers = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const res = await getUsers();
        const vals = res.data.users.map((item, i) => ({ ...item, id: i + 1 }));
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
  return <AllUsersComponent data={values} cols={cols} />;
};

export default AllUsers;
