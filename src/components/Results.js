import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import axios from "axios";

import {
  DataTableSocioDemografica,
  DataTableClinicaGenetica,
} from "../components/Table";
import { baseUrl } from "../static/constants/constants";

const styles = {
  future: {
    gridRow: "1/max-content",
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Results({ fat, passData, reload }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(`${baseUrl}subject`);
      setState([...result.data.subjects]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (reload !== undefined) {
      getData();
    }
  }, [reload]);

  return (
    <Box
      sx={{
        gridRow: "1/max-content",
        gridColumn: fat ? "2/20" : "2/19",
        marginRight: "8px",
        gridTemplateColumns: "repeat(20, 1fr)",
        gridAutoRows: "50px",
      }}
    >
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
      <TabPanel value={value} index={0} id="johny">
        <Box sx={styles.future}>
          <Box
            sx={{
              gridRow: "1/max-content",
              gridColumn: fat ? "2/20" : "3/18",
              overflow: fat ? "visible" : "scroll",
            }}
          >
            <DataTableSocioDemografica
              registros={state}
              fat={fat}
              passData={passData}
            />
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={styles.future}>
          <Box
            sx={{
              gridRow: "1/max-content",
              gridColumn: "2/20",
              overflow: "scroll",
            }}
          >
            <DataTableClinicaGenetica registros={state} passData={passData} />
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
