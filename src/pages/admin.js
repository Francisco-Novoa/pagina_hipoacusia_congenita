import React from "react";
import { Box, Input, Button } from "@mui/material";

import Layout from "../components/Layout";
const ariaLabel = { "aria-label": "description" };

const styles = {
  contentInner: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Deafness() {
  return (
    <Box sx={styles.contentInner}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px black solid",
          padding: "32px",
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          sx={{ margin: "8px" }}
          placeholder="Usuario"
          inputProps={ariaLabel}
        />
        <Input
          sx={{ margin: "8px" }}
          placeholder="Contraseña"
          inputProps={ariaLabel}
        />
        <Button sx={{ margin: "8px" }}>Entrar</Button>
      </Box>
    </Box>
  );
}
