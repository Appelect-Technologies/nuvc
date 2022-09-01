import { DataGrid } from '@mui/x-data-grid';
import { TextField, Box, Grid } from '@mui/material';
import React, { useState } from 'react';

const DataGridCompnent = ({ rows, columns, dgProps = {} }) => {
  const [value, setValue] = useState(rows);
  const requestSearch = (searchedVal) => {
    const filteredRows = rows.filter((_) =>
      Object.keys(_).some((k) => _[k].toString().toLowerCase().indexOf(searchedVal.toLowerCase()) !== -1)
    );
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
            <TextField
              onChange={(e) => requestSearch(e.target.value)}
              id="outlined-basic"
              label="Search"
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
          </Grid>
        </Grid>
      </Box>
      <DataGrid
        autoHeight
        rows={value}
        columns={columns}
        pageSize={6}
        disableSelectionOnClick
        {...dgProps}
        density="comfortable"
        sx={{
          background: 'white',
        }}
      />
    </Box>
  );
};

export default DataGridCompnent;
