import * as React from "react";
import { Box, TextField } from "@mui/material";

export default function NumberInput({
  sx,
  name,
  displayName,
  callback,
  value,
}) {
  return (
    <Box sx={{ width: "100%", ...sx }}>
      <TextField
        sx={{ width: "100%" }}
        label={displayName}
        value={value}
        name={name}
        type="number"
        onChange={callback}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
    </Box>
  );
}
