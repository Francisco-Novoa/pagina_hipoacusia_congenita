import React from "react";
import { Box, Card, Typography, CardContent, Paper } from "@mui/material";

import Helmuth from "../static/images/Helmuth.png";
import Elvira from "../static/images/Elvira.jpg";

import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";

const styles = {
  contentInner: {
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(10, 1fr)",
    gridAutoRows: "50px",
    padding: "16px",
  },
  titleBox: { display: "flex", alignItems: "center" },

  contact: {
    gridRow: "span 2",
    gridColumn: "span 7",
  },
  title2: { gridRow: "8", gridColumn: "1/19" },
};

const contactResearch = [
  {
    name: "Dr. Helmuth A. Sánchez, PhD",
    title: "Director",
    subtitle: "Investigador Adjunto",
    place: "Centro Interdisciplinario de Neurociencias de Valparaiso",
    email: "helmuth.sanches@cinv.cl",
    image: Helmuth,
    page: "https://cinv.uv.cl/members/helmuth-sanchez/",
  },
  {
    name: "Flga. Elvira M. Cortese, MSc",
    title: "Directora Alterna",
    subtitle: "",
    place: "Facultad de Medicina, Universidad de Valparaiso",
    email: "elvira.cortese@uv.cl",
    image: Elvira,
    page: "https://orcid.org/0000-0002-6547-2194",
  },
];

export default function Contact() {
  return (
    <Layout>
      <Paper sx={styles.contentInner}>
        <Box
          sx={{
            gridRow: "1/12",
            gridColumn: "1/2",
          }}
        ></Box>
        <Box
          sx={{
            gridRow: "1/12",
            gridColumn: "10/11",
          }}
        ></Box>
        <Box sx={{ gridRow: "span 2", gridColumn: "2/10", padding: "24px" }}>
          <Box sx={styles.titleBox}>
            <Typography component="div" variant="h4">
              EQUIPO DE INVESTIGACIÓN
            </Typography>
          </Box>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              marginTop: "16px",
              marginBottom: "16px",
            }}
          ></Box>
        </Box>
        {contactResearch.map(
          ({ name, title, subtitle, place, email, image, page }, index) => (
            <ContactCard
              name={name}
              title={title}
              subtitle={subtitle}
              place={place}
              email={email}
              image={image}
              page={page}
              sx={{ gridColumn: "span 4", gridRow: "span 4" }}
              key={index}
            />
          )
        )}
      </Paper>
    </Layout>
  );
}
