import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Paper } from "@mui/material";

import Layout from "../components/Layout";
import Gen from "../static/images/gen.png";
import Net from "../static/images/networking.jpg";
import Seq from "../static/images/sequencing.gif";
import UV from "../static/images/UV.png";
import Fono from "../static/images/Fono.png";
import Medi from "../static/images/Medi.png";
import Helmuth from "../static/images/Helmuth.png";
import Elvira from "../static/images/Elvira.jpg";

import ContactCard from "../components/ContactCard";

const styles = {
  contentInner: {
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(20, 5%)",
    gridTemplateRows: "repeat(12, 1fr)",
    padding: "16px",
  },
  about: {
    gridRow: "1/5",
    gridColumn: "2/18",
    marginRight: "8px",
  },
  future: {
    gridRow: "1/max-content",
    gridColumn: "2/18",
    marginRight: "8px",
  },
  links: {
    paddingLeft: "30px",
  },
  title: {
    padding: "24px",
    paddingLeft: 0,
  },
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

export default function About() {
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
              <Tab label="Información General del Proyecto" {...a11yProps(0)} />
              <Tab
                label="Investigadores e Instituciones Asociadas"
                {...a11yProps(1)}
              />
              <Tab label="Información adicional" {...a11yProps(2)} />
              <Tab label="Links de interes" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "16px",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                component="figure"
              >
                <img width="250px" src={Gen} />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                component="figure"
              >
                <img width="125px" src={Net} />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                component="figure"
              >
                <img width="250px" src={Seq} />
              </Box>
            </Box>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            ></Box>
            <Typography variant="h4" sx={styles.title}>
              INFORMACIÓN GENERAL DEL PROYECTO
            </Typography>
            <br />
            <Typography variant="body1">
              La hipoacusia es el desorden sensorial más frecuente en la
              población. Muchos de los casos obedecen a una causa genética. En
              Chile, existe un desconocimiento respecto a las mutaciones
              existentes en la población local. En bibliografía internacional y
              local, el gen que ha sido descrito como el que concentra la mayor
              incidencia de mutaciones asociada a hipoacusia genética,
              corresponde a GJB2, el cual codifica para la proteína Conexina-26.
              <br />
            </Typography>
            <br />
            <Typography variant="body1">
              El objetivo principal de este estudio fue identificar todas las
              mutaciones presentes en la región codificante del gen GJB2 (Exón
              2) de un grupo de participantes voluntarios con hipoacusia
              sensorioneural de probable causa genética.
            </Typography>
            <br />
            <Typography variant="body1">
              El proyecto denominado “Identificación de mutaciones causantes de
              sordera congénita en Chile” (convocatoria de Proyectos FONIS, año
              2018) recibió financiamiento mediante fondos públicos del Fondo
              Nacional de Investigación en Salud (FONIS), dependiente de la
              Agencia Nacional de Investigación y Desarrollo (ANID) del
              Ministerio de Ciencias, Tecnología, Conocimiento e Innovación.
            </Typography>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                marginTop: "32px",
                marginBottom: "16px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                component="figure"
              >
                <img width="175px" src={UV} />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                component="figure"
              >
                <img width="250px" src={Fono} />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                component="figure"
              >
                <img width="250px" src={Medi} />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(10, 1fr)",
                gap: 2,
                gridAutoRows: "50px",
              }}
            >
              <Box sx={{ gridColumn: "span 10", gridRow: "span 2" }}>
                <Typography variant="h4" sx={styles.title}>
                  INVESTIGADORES E INSTITUCIONES ASOCIADAS
                </Typography>
              </Box>
              {contactResearch.map(
                (
                  { name, title, subtitle, place, email, image, page },
                  index
                ) => (
                  <ContactCard
                    name={name}
                    title={title}
                    subtitle={subtitle}
                    place={place}
                    email={email}
                    image={image}
                    page={page}
                    sx={{ gridColumn: "span 5", gridRow: "span 4" }}
                    key={index}
                  />
                )
              )}
              <Box sx={{ gridColumn: "span 10", gridRow: "span 1" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Co-Investigadores
                </Typography>
              </Box>
              <Box sx={{ gridColumn: "span 1", gridRow: "span 3" }}></Box>
              <Box sx={{ gridColumn: "span 8", gridRow: "span 3" }}>
                <ul>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Dr. Agustín D, Martinez, PhD. Departamento de
                      Neurociencias. Facultad de Ciencias. Universidad de
                      Valparaíso
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Dr. Pablo Moya, PhD. Departamento de Fisiologia. Facultad
                      de Ciencias. Universidad de Valparaíso.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Dr. Juan Cristobal Maass, PhD. Instituto de Ciencias
                      Biomedicas. Facultad de Medicina. Universidad de Chile
                    </Typography>
                  </li>
                </ul>
              </Box>
              <Box sx={{ gridColumn: "span 10", gridRow: "span 1" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Instituciones participantes
                </Typography>
              </Box>
              <Box sx={{ gridColumn: "span 1", gridRow: "span 3" }}></Box>

              <Box sx={{ gridColumn: "span 8", gridRow: "span 3" }}>
                <ul>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Universidad de Valparaíso
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Centro Interdisciplinario de Neurociencias de Valparaíso
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Universidad de Chile
                    </Typography>
                  </li>
                </ul>
              </Box>
              <Box sx={{ gridColumn: "span 10", gridRow: "span 1" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Centros colaboradores
                </Typography>
              </Box>
              <Box sx={{ gridColumn: "span 1", gridRow: "span 3" }}></Box>

              <Box sx={{ gridColumn: "span 8", gridRow: "span 5" }}>
                <ul>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Centro de Atención Fonoaudiológica de la Universidad de
                      Valparaíso
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Hospital Carlos Van Buren
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Hospital Dr. Gustavo Fricke
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Instituto de la Sordera (INDESOR)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Hospital Clínico Universidad de Chile
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Hospital Barros Luco Trudeau
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ padding: "8px" }}>
                      Clínica Las Condes
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h4" sx={styles.title}>
              INFORMACIÓN ADICIONAL
            </Typography>
            <br />
            <Typography variant="body1">
              El estallido social en nuestro país (octubre 2019) y la llegada de
              la Pandemia COVID-19 (a partir de marzo 2020) fueron contingencias
              excepcionales que generaron dificultades considerables para la
              ejecución del proyecto. Entre otras cosas, incidieron en el
              deterioro parcial del material almacenado y en el retraso de los
              objetivos planificados, obligando al equipo a realizar ajustes
              metodológicos, entre ellos, la reducción del tamaño muestral.
              Lamentablemente, la contingencia interrumpió el trabajo clínico,
              especialmente lo referente a la interacción con nuevos
              participantes, la extracción y obtención de nuevas muestras.
              <br />
            </Typography>
            <br />
            <Typography variant="body1">
              Por otra parte, una de las dificultades observadas durante la
              ejecución del proyecto fue que la mayoría de los centros de salud
              públicos aún poseen un sistema de registro de historias clínicas
              en papel. Esta realidad dificulta el necesario intercambio de
              datos entre centros y puede llevar a pérdida parcial de
              información médica. El desarrollo de un sistema informático
              integrado que dé solución a estas dificultades, podría facilitar
              el intercambio de información entre especialistas y en definitiva,
              permitir el acceso a un mejor sistema de salud auditiva para las
              personas con hipoacusia.
            </Typography>
            <br />
            <Typography variant="body1">
              Uno de los resultados de este proyecto es esta página web de libre
              acceso que reúne información relevante del proyecto y un resúmen
              de los resultados preliminares del mismo. Este insumo es un aporte
              a futuras investigaciones en el área y/o al desarrollo de
              políticas públicas en salud auditiva en nuestro país.
            </Typography>
            <br />
            <Typography variant="body1">
              Por último, la ejecución de este proyecto ha promovido la
              formación de un grupo interdisciplinario de investigadores y
              clínicos que trabajan en el campo de la pérdida auditiva genética.
              Se espera que este grupo de trabajo especializado contribuya a
              potenciar la investigación en esta área, aún está poco explorada
              en nuestro país.
            </Typography>
            <br />
            <Typography variant="body1" sx={{ paddingBottom: "24px" }}>
              Por último, la ejecución de este proyecto ha promovido la
              formación de un grupo interdisciplinario de investigadores y
              clínicos que trabajan en el campo de la pérdida auditiva genética.
              Se espera que este grupo de trabajo especializado contribuya a
              potenciar la investigación en esta área, aún está poco explorada
              en nuestro país.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box
              sx={{
                padding: "16px",
                marginTop: "16px",
              }}
            >
              <Typography component="div" variant="h4">
                LINKS DE INTERÉS
              </Typography>
            </Box>
            <Box
              sx={{
                gridRow: "7/9",
                gridColumn: "3/16",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <a
                  target="_blank"
                  style={styles.links}
                  href="https://www.youtube.com/watch?v=6opSI0mBPQg"
                >
                  <Typography variant="a">
                    • Entrevista Dr Helmuth Sánchez - Programa Aire Fresco de
                    Radio Duna
                  </Typography>
                </a>
                <a
                  target="_blank"
                  style={styles.links}
                  href="https://www.nidcd.nih.gov/es/espanol/el-viaje-del-sonido-al-cerebro-video"
                >
                  <Typography variant="a">
                    • El viaje del sonido al cerebro. Instituto Nacional de
                    Salud - EEUU (NIH-NIDCD)
                  </Typography>
                </a>
                <a
                  target="_blank"
                  style={styles.links}
                  href="https://www.interreg-sudoe.eu/proyectos/los-proyectos-aprobados/194-impulsando-la-innovacion-en-la-deteccion-precoz-de-la-hipoacusia-infantil-en-el-espacio-sudoe-hacia-una-medicina-personalizada-basada-en-herramientas-genomicas-de-diagnostico"
                >
                  <Typography variant="a">
                    • Impulsando la innovación en la detección precoz de la
                    hipoacusia infantil en el espacio SUDOE: Hacia una medicina
                    personalizada basada en herramientas genómicas de
                    diagnóstico
                  </Typography>
                </a>
                <a
                  target="_blank"
                  href="https://www.interreg-sudoe.eu/proyectos/los-proyectos-aprobados/194-impulsando-la-innovacion-en-la-deteccion-precoz-de-la-hipoacusia-infantil-en-el-espacio-sudoe-hacia-una-medicina-personalizada-basada-en-herramientas-genomicas-de-diagnostico"
                >
                  <Box sx={styles.links}>
                    <Typography variant="a" sx={{ fontWeight: "bold" }}>
                      • TEDxMidAtlantic. Dr. Dereck Braun
                    </Typography>
                    <Typography variant="a">
                      &nbsp;Ventajas evolutivas de genes asociados a sordera.
                      (en ingles)
                    </Typography>
                  </Box>
                </a>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: "16px",
                  }}
                >
                  <Typography component="div" variant="h5">
                    Referencias
                  </Typography>
                </Box>
                <ul>
                  <li>
                    <Typography variant="body1">
                      Hoang Dihn E y cols., (2009) Brain Research 1277, 52-56.
                      doi:10.1016/j.brainres.2009.02.008
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Faundes V. y cols., (2012). Med Clin (Barc).
                      2012;139(10):446–451. doi:10.1016/j.medcli.2012.02.014
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Lopez G. y cols., (2012). Rev Chil Pediatr 2012; 83 (2):
                      154-160.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Martinez AD. y cols., (2009) Antioxid. Redox Signal. 11,
                      309–322. DOI: 10.1089/ars.2008.2138
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Hoang Dihn E y cols., (2009) Brain Research 1277, 52-56.
                      doi:10.1016/j.brainres.2009.02.008
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Sanchez HA y Verselis VK (2014) . Front Cell Neurosci.
                      8:354 doi: 10.3389/fncel.2014.00354
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>
          </TabPanel>
        </Box>
      </Paper>
    </Layout>
  );
}
