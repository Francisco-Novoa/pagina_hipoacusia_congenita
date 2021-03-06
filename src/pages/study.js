import React from "react";
import { Tabs, Tab, Box, Typography, Paper } from "@mui/material";

import Layout from "../components/Layout";

import Muestras from "../static/images/tomaDeMuestras.png";
import Gel from "../static/images/gel.png";
import Secuenciacion from "../static/images/Secuenciacion.png";
import implantes from "../static/images/implantes.png";
import implantes2 from "../static/images/implantes2.png";
import equipoClinico from "../static/images/equipoClinico.png";

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
    gridColumn: "2/18",
    marginRight: "8px",
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
              <Tab label="Fase Clinica" {...a11yProps(0)} />
              <Tab label="Fase Analisis Genetico" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(10, 1fr)",
                gridAutoRows: "50px",
              }}
            >
              <Box
                sx={{
                  gridRow: "1/-1",
                  gridColumn: "1/2",
                }}
              ></Box>
              <Box
                sx={{
                  gridRow: "1/-1",
                  gridColumn: "10/11",
                }}
              ></Box>
              <Box
                sx={{
                  gridColumn: "2/10",
                  gridRow: "span 4",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography component="div" variant="h4">
                  FASE CL??NICA
                </Typography>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    marginTop: "16px",
                    marginBottom: "16px",
                  }}
                ></Box>
                <Typography component="div" variant="h5">
                  VARIABLES SOCIODEMOGR??FICAS Y CL??NICAS
                </Typography>
                <br />
                <Typography component="div" variant="h5">
                  TOMA DE MUESTRAS
                </Typography>
              </Box>

              <Box
                sx={{
                  gridRow: "span 6",
                  gridColumn: "2/5",
                  padding: "8px",
                }}
              >
                <Box
                  component="figure"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "0",
                  }}
                >
                  <img width="100%" src={implantes} />
                </Box>
              </Box>
              <Box
                sx={{
                  gridRow: "span 1",
                  gridColumn: "6/9",
                }}
              ></Box>
              <Box
                sx={{
                  gridRow: "span 5",
                  gridColumn: "6/9",
                }}
              >
                <Typography variant="body1" sx={{ display: "inline" }}>
                  Una vez identificados los participantes voluntarios, se les
                  invit?? a participar mediante firma de consentimiento
                  informado. Luego, se procedi?? a recolectar un n??mero
                  importante de&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  variables sociodemogr??ficas y cl??nicas, las cuales fueron
                  tabuladas y analizadas.
                </Typography>
              </Box>

              <Box
                sx={{
                  gridRow: "span 12",
                  gridColumn: "2/5",
                  padding: "8px",
                }}
              >
                <Box
                  component="figure"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img width="100%" src={Muestras} />
                </Box>
              </Box>

              <Box
                sx={{
                  gridRow: "span 5",
                  gridColumn: "6/9",
                  padding: "8px",
                }}
              >
                <Box
                  component="figure"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img width="100%" src={implantes2} />
                </Box>
              </Box>

              <Box
                sx={{
                  gridRow: "span 3",
                  gridColumn: "6/9",
                  paddingRight: "24px",
                  paddingLeft: "48px",
                  marginTop: "32px",
                }}
              >
                <Typography variant="body1" sx={{ display: "inline" }}>
                  Posteriormente, se procedi?? a la realizar una&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  toma de muestra de saliva e hisopado bucal mediante uso de
                  cotonito&nbsp;
                </Typography>
                <Typography variant="body1" sx={{ display: "inline" }}>
                  como lo muestra la figura.
                </Typography>
              </Box>

              <Box
                sx={{
                  gridRow: "span 4",
                  gridColumn: "6/9",
                  paddingRight: "24px",
                  paddingLeft: "48px",
                }}
              >
                <Typography variant="body1" sx={{ display: "inline" }}>
                  Las muestras fueron transportadas en cadena de fr??o (4??c) para
                  luego realizarse la&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  extracci??n y purificaci??n del material gen??tico (ADN)
                  contenido en las c??lulas bucales.nbsp;
                </Typography>
              </Box>

              <Box
                sx={{
                  gridColumn: "2/10",
                  gridRow: "span 2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography component="div" variant="h4">
                  EQUIPO CL??NICO
                </Typography>
              </Box>

              <Box
                sx={{
                  gridRow: "span 12",
                  gridColumn: "2/10",
                  padding: "8px",
                }}
              >
                <Box
                  component="figure"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img width="100%" src={equipoClinico} />
                </Box>
              </Box>

              <Box
                component="figure"
                sx={{
                  gridRow: "span 5",
                  gridColumn: "2/10",
                  padding: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography component="div" variant="h5">
                    EQUIPO CL??NICO
                  </Typography>
                </Box>

                <ul>
                  <li>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Flga. Elvira M. Cortese, MSc.
                    </Typography>
                    <Typography variant="body1" sx={{}}>
                      Escuela de Fonoaudiolog??a. Facultad de Medicina
                      Universidad de Valpara??so
                    </Typography>
                    <Typography variant="body1">
                      elvira.cortese@uv.cl
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Flga. Virginia Olivares, MSc.
                    </Typography>
                    <Typography variant="body1" sx={{}}>
                      Escuela de Fonoaudiolog??a. Facultad de Medicina
                      Universidad de Valpara??so
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Flgo. Alfredo Herrera
                    </Typography>
                    <Typography variant="body1" sx={{}}>
                      Escuela de Fonoaudiolog??a. Facultad de Medicina
                      Universidad de Valpara??so
                    </Typography>
                  </li>
                </ul>
              </Box>

              <Box
                component="figure"
                sx={{
                  gridRow: "span 8",
                  gridColumn: "2/10",
                  padding: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography component="div" variant="h5">
                    COLABORADORES
                  </Typography>
                </Box>

                <ul>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", display: "inline" }}
                    >
                      Dr. Juan Crist??bal Maass
                    </Typography>
                    <Typography variant="body1" sx={{ display: "inline" }}>
                      , Hospital Cl??nico Universidad de Chile
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", display: "inline" }}
                    >
                      Dr. Cristian Papusinky
                    </Typography>
                    <Typography variant="body1" sx={{ display: "inline" }}>
                      , Hospital Carlos Van Buren.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", display: "inline" }}
                    >
                      Dra. Gabriela Vergara
                    </Typography>
                    <Typography variant="body1" sx={{ display: "inline" }}>
                      , Hospital Gustavo Fricke.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", display: "inline" }}
                    >
                      Dra. Ursula Zelada
                    </Typography>
                    <Typography variant="body1" sx={{ display: "inline" }}>
                      , Hospital Ramon Barros Luco Trudeau.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", display: "inline" }}
                    >
                      Dra. Gloria Ribalta
                    </Typography>
                    <Typography variant="body1" sx={{ display: "inline" }}>
                      , Cl??nica Las Condes.
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(10, 1fr)",
                gridAutoRows: "50px",
              }}
            >
              <Box
                sx={{
                  gridRow: "1/-1",
                  gridColumn: "1/2",
                }}
              ></Box>
              <Box
                sx={{
                  gridRow: "1/-1",
                  gridColumn: "10/11",
                }}
              ></Box>
              <Box
                sx={{
                  gridColumn: "2/10",
                  gridRow: "span 3",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography component="div" variant="h4">
                  FASE DE AN??LISIS GENETICO
                </Typography>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    marginTop: "16px",
                    marginBottom: "16px",
                  }}
                ></Box>
                <br />
                <Typography component="div" variant="h5">
                  AMPLIFICACI??N Y SECUENCIACI??N DEL ADN
                </Typography>
              </Box>
              <Box
                sx={{
                  gridRow: "span 6",
                  gridColumn: "2/6",
                  padding: "8px",
                }}
              >
                <Box
                  component="figure"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "0",
                    flexDirection: "column",
                  }}
                >
                  <img id="bandas" width="100%" src={Gel} />
                  <label
                    style={{ alignSelf: "flex-end", fontSize: "14px" }}
                    htmlFor="#bandas"
                  >
                    Imagen 1
                  </label>
                </Box>
              </Box>
              <Box
                sx={{
                  gridRow: "span 5",
                  gridColumn: "7/10",
                  paddingTop: "24px",
                }}
              >
                <Typography variant="body1" sx={{ display: "inline" }}>
                  Luego, usando la&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  t??cnica de PCR&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    display: "inline",
                    fontStyle: "italic",
                  }}
                >
                  (Polimerase Chain Reaction,&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  R
                </Typography>
                <Typography variant="body1" sx={{ display: "inline" }}>
                  eacci??n en&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  C
                </Typography>
                <Typography variant="body1" sx={{ display: "inline" }}>
                  adena de la&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  P
                </Typography>
                <Typography variant="body1" sx={{ display: "inline" }}>
                  olimerasa), se procedi?? a copiar y amplificar selectivamente
                  el ex??n 2 del gen GJB2, que codifica para&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  Conexina-26.&nbsp;
                </Typography>
                <Typography variant="body1" sx={{ display: "inline" }}>
                  El producto amplificado (amplic??n) es purificado en un gel de
                  agarosa y extra??do para su posterior secuenciaci??n g??nica
                  (bandas en imagen 1).
                </Typography>
              </Box>
              <Box
                sx={{
                  gridRow: "span 9",
                  gridColumn: "3/9",
                  padding: "8px",
                }}
              >
                <Box
                  component="figure"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img id="sequenciacion" width="100%" src={Secuenciacion} />
                  <label
                    style={{ alignSelf: "flex-end", fontSize: "14px" }}
                    htmlFor="#sequenciacion"
                  >
                    Imagen 2
                  </label>
                </Box>
              </Box>

              <Box
                sx={{
                  gridRow: "span 5",
                  gridColumn: "3/9",
                  paddingTop: "24px",
                }}
              >
                <Typography variant="body1" sx={{ display: "inline" }}>
                  Finalmente, se analizan las &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  secuencias obtenidas, compar??ndolas con secuencias
                  can??nicas&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    display: "inline",
                  }}
                >
                  (normales) disponibles en bases de datos p??blicas de
                  investigaci??n cient??fica (ej.: NIH-NIDCD), de modo de
                  identificar mutaciones potencialmente patog??nicas. &nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline", fontWeight: "bold" }}
                >
                  En el ejemplo (im??gen n??2), se observa el gen can??nico
                  (wild-type, WT), comparado con el gen de un paciente, que
                  contiene una mutaci??n (G sustituida por A) y que causa la
                  sustituci??n D66N en la prote??na Conexina-26.
                </Typography>
              </Box>
            </Box>
          </TabPanel>
        </Box>
      </Paper>

      {/* </TabPanel>
          <TabPanel value={value} index={1}>
            <ul>
              <li>
                <Typography variant="body1">
                  Realizar diagnostico gen??tico de forma temprana en casos
                  especiales, como en sorderas progresivas y planificar un
                  abordaje oportuno, orientando el tratamiento y los criterios
                  de adaptaci??n prot??sica con base en la evidencia
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Desarrollar medidas preventivas eficaces con base en la
                  evidencia.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Realizar consejo gen??tico y orientaci??n a las familias.
                </Typography>
              </li>
            </ul>
          </TabPanel>
        </Box> */}
      {/* </Paper> */}
    </Layout>
  );
}
