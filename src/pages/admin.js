import React, { useState } from "react";
import { Box, Input, Button } from "@mui/material";
import axios from "axios";

import Formulary from "../components/Formulary";
import { baseUrl } from "../static/constants/constants";

const ariaLabel = { "aria-label": "description" };

const styles = {
  login: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentInner: {
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(20, 5%)",
    gridTemplateRows: "repeat(12, 1fr)",
    padding: "16px",
  },

  links: { padding: "8px", color: "#237385" },
};

export default function Deafness() {
  const [state, setState] = useState({
    username: "",
    password: "",
    login: false,
  });

  const onChange =
    (name) =>
    ({ target: { value } }) => {
      setState((prevState) => ({ ...prevState, [name]: value }));
    };

  const login = async () => {
    try {
      const result = (
        await axios.post(`${baseUrl}/login`, {
          username: state.username,
          password: state.password,
        })
      ).data;
      sessionStorage.setItem("token", result.token);
      setState((prevState) => ({ ...prevState, login: true }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      {state.login ? (
        <Box sx={styles.contentInner}>
          <Formulary />
        </Box>
      ) : (
        <Box sx={styles.login}>
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
              onChange={onChange("username")}
              value={state.username}
              placeholder="Usuario"
              inputProps={ariaLabel}
            />
            <Input
              sx={{ margin: "8px" }}
              onChange={onChange("password")}
              type="password"
              value={state.password}
              placeholder="Contraseña"
              inputProps={ariaLabel}
            />
            <Button onClick={login} sx={{ margin: "8px" }}>
              Entrar
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
