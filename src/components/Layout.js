import React from "react";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Body from "./Body";

const styles = {
  mainStyle: {
    backgroundColor: "background.light",
    display: "grid",
    gap: 2,
    gridTemplateColumns: "repeat(10, 10%)",
    gridTemplateRows: "repeat(3, 65px)",
  },
};

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Sordera Congenita</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Grid
        id="container"
        sx={{
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
          fontFamily: "Roboto Slab",
        }}
      >
        <Grid id="layout" container direction="column" sx={styles.mainStyle}>
          <Header id="header" sx={{ gridColumn: "1/11", gridRow: "1/3" }} />
          <Body sx={{ gridColumn: "1/11", gridRow: "3/-1" }}>{children}</Body>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
