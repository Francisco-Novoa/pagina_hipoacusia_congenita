import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FormularyItem = ({ value, name }, index) => (
  <MenuItem key={`${name}_${index}`} value={value}>
    {value}
  </MenuItem>
);

export default function BasicSelect({
  sx,
  name,
  options,
  displayName,
  callback,
  value,
  multiple,
}) {
  const improvedOptions = options.map((elem) => ({ value: elem, name }));
  return (
    <Box sx={{ ...sx }}>
      <FormControl fullWidth>
        <InputLabel id={`select_label_${name}`}>{`${displayName}`}</InputLabel>
        <Select
          multiple={multiple}
          labelId={`select_label_${name}`}
          value={value}
          label={`${displayName}`}
          onChange={callback}
        >
          {improvedOptions.map(FormularyItem)}
        </Select>
      </FormControl>
    </Box>
  );
}
