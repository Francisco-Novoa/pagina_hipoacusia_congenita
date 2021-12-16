import React from "react";
import { Paper } from "@mui/material";

import Layout from "../components/Layout";
import Result from "../components/Results";

const styles = {
  contentInner: {
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(20, 5%)",
    gridTemplateRows: "repeat(12, 1fr)",
    padding: "16px",
  },
};

export default function Metodology() {
  return (
    <Layout>
      <Paper sx={styles.contentInner}>
        <Result fat={false} />
      </Paper>
    </Layout>
  );
}
