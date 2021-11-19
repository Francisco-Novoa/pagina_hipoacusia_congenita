import * as React from "react";
import { Paper, Box, Typography } from "@mui/material";

import Link from "../components/Link";
import ANID from "../static/images/ANID.png";
import CINV from "../static/images/cinv.png";
import fonoaudiologia from "../static/images/fonoaudiologia.png";
import icb from "../static/images/ICB.png";
import UV from "../static/images/UV.png";

const styles = {
  headerParent: {
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(20, 5%)",
    gridTemplateRows: "repeat(12, 1fr)",
  },
  mainTitleBox: {
    gridColumn: "3/8",
    gridRow: "2/12",
    display: "flex",
    alignItems: "center",
  },
  mainTitle: {
    fontFamily: "Roboto Slab",
    fontWeight: "500",
  },
  image: { gridRow: "2/9" },
  ANID: { gridColumn: 8, marginLeft: "15px" },
  CINV: { gridColumn: 9 },
  fonoaudiologia: { gridColumn: 11 },
  icb: { gridColumn: 15, marginLeft: "-21px" },
  UV: { gridColumn: 13 },
  links: {
    gridColumn: "8/16",
    display: "flex",
    justifyContent: "center",
    gridRow: "9/12",
    alignItems: "center",
    color: "#237385",
  },
  link: {
    marginRight: "16px",
  },
  about: {
    marginLeft: "5px",
    gridColumn: 8,
  },
  deafness: {
    gridColumn: "9/11",
  },
  contact: {
    gridColumn: "11/12",
  },
};

export default function Header({ sx }) {
  return (
    <Paper
      sx={{ ...sx, ...styles.headerParent }}
      elevation={0}
      component="header"
    >
      <Box sx={styles.mainTitleBox}>
        <Typography
          sx={{ ...styles.mainTitle, fontSize: "1.45rem" }}
          variant="h5"
        >
          {"Identificación de mutaciones causantes de sordera congénita en Chile".toUpperCase()}
        </Typography>
      </Box>
      <Box sx={{ ...styles.image, ...styles.ANID }}>
        <img height="100%" src={ANID} />
      </Box>
      <Box sx={{ ...styles.image, ...styles.CINV }}>
        <img height="100%" src={CINV} />
      </Box>
      <Box sx={{ ...styles.image, ...styles.fonoaudiologia }}>
        <img height="100%" src={fonoaudiologia} />
      </Box>
      <Box sx={{ ...styles.image, ...styles.icb }}>
        <img height="100%" src={icb} />
      </Box>
      <Box sx={{ ...styles.image, ...styles.UV }}>
        <img height="100%" src={UV} />
      </Box>
      <Box sx={styles.links}>
        <Link to="/" sx={styles.link}>
          Home
        </Link>
        <Link to="/hipoacusia" sx={styles.link}>
          Hipoacusia Congenita
        </Link>
        <Link to="/study" sx={styles.link}>
          Fases del Estudio
        </Link>
        <Link to="/contact" sx={styles.link}>
          Contacto
        </Link>
      </Box>
    </Paper>
  );
}
