import React, { useState } from "react";
import axios from "axios";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TableRowsIcon from "@mui/icons-material/TableRows";
import InputIcon from "@mui/icons-material/Input";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { TextField, Box, Button } from "@mui/material";

import { baseUrl } from "../static/constants/constants";
import Formulary from "../components/Formulary";
import Result from "./Results";

export default function NestedList() {
  const [open, setOpen] = useState({
    tablas: false,
    buscar: false,
    formulario: false,
  });
  const [data, setData] = useState(false);
  const [reload, setReload] = useState(true);
  const [input, setInput] = useState("");

  const handleClick = (name) => () => {
    setOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const passData = (data) => {
    setData(data);
  };

  const getData = async () => {
    try {
      const result = await axios.get(`${baseUrl}subject/${input}`);
      setData(result.data.subject);
      setInput("");
    } catch (error) {
      setInput("");
      console.error(error);
    }
  };

  return (
    <List
      sx={{ width: "98vw", bgcolor: "#006994" }}
      component="nav"
      subheader={
        <ListSubheader component="div">Panel de Administracion</ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick("tablas")}>
        <ListItemIcon>
          <TableRowsIcon />
        </ListItemIcon>
        <ListItemText primary="Ver Tablas" />
        {open.tablas ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open.tablas}
        timeout="auto"
        unmountOnExit
        sx={{ paddingRight: "16px", paddingLeft: "16px" }}
      >
        <List component="div" disablePadding sx={{ bgcolor: "#ffffff" }}>
          <Result fat={true} passData={passData} reload={reload} />
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick("buscar")}>
        <ListItemIcon>
          <SearchTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Buscar" />
        {open.buscar ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open.buscar}
        timeout="auto"
        sx={{ paddingRight: "16px", paddingLeft: "16px" }}
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
          sx={{
            paddingTop: "16px",
            bgcolor: "#ffffff",
            display: "flex",
            alignItems: "center",
            p: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-basic"
              label="Buscar usando Id"
              variant="outlined"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button onClick={getData}>
              <SearchTwoToneIcon />
            </Button>
          </Box>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick("formulario")}>
        <ListItemIcon>
          <InputIcon />
        </ListItemIcon>
        <ListItemText primary="Formulario" />
        {open.formulario ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open.formulario}
        timeout="auto"
        sx={{ paddingRight: "16px", paddingLeft: "16px" }}
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
          sx={{ paddingTop: "16px", bgcolor: "#ffffff" }}
        >
          <Formulary
            initialValue={data}
            reload={reload}
            setReload={setReload}
          />
        </List>
      </Collapse>
    </List>
  );
}
