import * as React from "react";
import { Box, TextField } from "@mui/material";

export default function TextInput({
  sx,
  name,
  displayName,
  callback,
  value,
  rows,
}) {
  return (
    <Box sx={{ width: "100%", ...sx }}>
      <TextField
        sx={{ width: "100%" }}
        label={displayName}
        value={value}
        name={name}
        onChange={callback}
        multiline
        maxRows={rows}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
    </Box>
  );
}
