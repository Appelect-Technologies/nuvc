import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const DataGridCompnent = ({ rows, columns, dgProps = {}, searchFields = [] }) => {
  const [value, setValue] = useState(rows);
  const [search, setSearch] = useState('');

  const requestSearch = () => {
    if (!search.trim()) {
      setValue(rows);
      return;
    }
    // const filteredRows = rows.filter((_) => {
    //   return Object.keys(_).filter((k) => `${_[k]}`?.toLowerCase()?.indexOf(search.toLowerCase()) !== -1);
    // });

    const filteredRows = rows.filter((_) => {
      let arr = searchFields.filter((field) => {
        return _[field].includes(search.toLowerCase());
      });
      return arr.length;
    });

    setValue(filteredRows);
  };

  return (
    <Box
      sx={{
        width: '100%',
        margin: 'auto',
        background: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <Box
        sx={{
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
          padding: '0px 20px',
          paddingTop: '10px',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          background: '#ECF1FA',
        }}
      >
        <Grid container>
          <Grid xs={6}></Grid>
          <Grid xs={6}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', width: '100%' }}>
              <TextField
                onChange={(e) => setSearch(e.target.value)}
                id="outlined-basic"
                placeholder="Search"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '12px',
                    background: 'white',
                  },
                  marginBottom: '10px',
                }}
              />
              <IconButton onClick={requestSearch} color="primary">
                <SearchIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ maxHeight: 500, overflowY: 'auto' }}>
        <DataGrid
          autoHeight
          rows={value}
          columns={columns}
          pageSize={500}
          disableSelectionOnClick
          {...dgProps}
          density="standard"
          sx={{
            background: 'white',
          }}
        />
      </Box>
    </Box>
  );
};

export default DataGridCompnent;
