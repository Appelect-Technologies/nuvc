import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const AutoComplete = ({ data, handleChange, value, id, label }) => {
  const options = data?.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  return (
    <Autocomplete
      id={id}
      size="small"
      fullWidth
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          onBlur={(e) => handleChange(e.target.value)}
          {...params}
          label={label}
          value={value}
        />
      )}
    />
  );
};

export default AutoComplete;
