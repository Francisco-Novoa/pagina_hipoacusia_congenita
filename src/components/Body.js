import React from "react";
import { Box } from "@mui/material";

const styles = {
  column: {
    width: "100%",
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(20, 5%)",
  },
  content: {
    gridRow: "1/8",
    gridColumn: "3/16",
  },
  footer: {
    gridRow: "span 1",
    gridColumn: "1/-1",
    height: "100px",
    width: "100px",
  },
};

export default function Body({ children, sx }) {
  return (
    <Box component="main" sx={sx}>
      <Box sx={{ ...styles.column }}>
        <Box sx={styles.content}>{children}</Box>
        <Box sx={styles.footer}></Box>
      </Box>
    </Box>
  );
}
