import { Autocomplete, Chip, TextField } from "@mui/material";
import { useState } from "react";

const ChipAutoComplete = ({ label, error, helperText, getVal, data }) => {
  const [d, setd] = useState([]);

  const val = () => {
    console.log(d);
  };

  return (
    <Autocomplete
      multiple
      id="tags-filled"
      options={data.map((option) => option.name)}
      renderTags={(value, getTagProps) => {
        setd(value)
        value.map((option, index) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" size="small" label={label} />
      )}
      onChange={val}
    />
  );
};

export default ChipAutoComplete;
