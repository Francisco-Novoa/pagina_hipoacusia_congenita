import React from "react";
import { Tabs, Tab, Box, Typography, Paper } from "@mui/material";

import Layout from "../components/Layout";
import tempDB from "../static/images/tempDB.png";

const styles = {
  contentInner: {
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(20, 5%)",
    gridTemplateRows: "repeat(12, 1fr)",
    padding: "16px",
  },
  future: {
    gridRow: "1/max-content",
    gridColumn: "1/19",
    marginRight: "8px",
    gridTemplateColumns: "repeat(20, 1fr)",
    gridAutoRows: "50px",
  },
  titleBox: { display: "flex", alignItems: "center", flexDirection: "column" },
  links: { padding: "8px", color: "#237385" },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Metodology() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Paper sx={styles.contentInner}>
        <Box sx={styles.future}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="VARIABLES CLÍNICAS Y GENÉTICAS" {...a11yProps(0)} />
              <Tab label="VARIABLES SOCIODEMOGRÁFICAS" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box sx={styles.future}>
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                component="figure"
              >
                <Typography variant="h4" sx={styles.title}>
                  Seccion en contrucción
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gridRow: "1/max-content",
                  gridColumn: "1/19",
                  justifyContent: "center",
                }}
                component="figure"
              >
                <img width="100%" src={tempDB} />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box sx={styles.future}>
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                component="figure"
              >
                <Typography variant="h4" sx={styles.title}>
                  Seccion en contrucción
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gridRow: "1/max-content",
                  gridColumn: "1/19",
                  justifyContent: "center",
                }}
                component="figure"
              >
                <img width="100%" src={tempDB} />
              </Box>
            </Box>
          </TabPanel>
        </Box>
      </Paper>
    </Layout>
  );
}
