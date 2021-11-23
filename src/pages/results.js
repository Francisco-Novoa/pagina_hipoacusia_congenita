import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, Paper, Container } from "@mui/material";
import axios from "axios";

import Layout from "../components/Layout";
import {
  DataTableSocioDemografica,
  DataTableClinicaGenetica,
} from "../components/Table";
import { baseUrl } from "../static/constants/constants";

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
    gridColumn: "1/20",
    marginRight: "8px",
    gridTemplateColumns: "repeat(20, 1fr)",
    gridAutoRows: "50px",
  },
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
          <Container>
            <Box>{children}</Box>
          </Container>
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
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(`${baseUrl}/subject`);
      setState([...result.data.subjects]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Paper sx={styles.contentInner}>
        <Box sx={styles.future}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab
                component="span"
                label="VARIABLES SOCIODEMOGRÁFICAS"
                {...a11yProps(0)}
              />
              <Tab
                component="span"
                label="VARIABLES CLÍNICAS Y GENÉTICAS"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box sx={styles.future}>
              <Box
                sx={{
                  gridRow: "1/max-content",
                  gridColumn: "2/19",
                  overflow: "scroll",
                }}
              >
                <DataTableSocioDemografica registros={state} />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box sx={styles.future}>
              <Box
                sx={{
                  gridRow: "1/max-content",
                  gridColumn: "2/19",
                  overflow: "scroll",
                }}
              >
                <DataTableClinicaGenetica registros={state} />
              </Box>
            </Box>
          </TabPanel>
        </Box>
      </Paper>
    </Layout>
  );
}
