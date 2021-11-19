import React from "react";
import { Box, Typography, Paper } from "@mui/material";

import Layout from "../components/Layout";

import Causas from "../static/images/CausasSordera.jpg";
import ADN from "../static/images/adn.png";
import cromosomas from "../static/images/cromosomas.png";
import gjb2 from "../static/images/gjb2.png";
import auditivo from "../static/images/auditivo.png";
import canales from "../static/images/canales.png";
import conexina26 from "../static/images/conexina26.png";

const styles = {
  contentInner: {
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(10, 1fr)",
    gridAutoRows: "50px",
    padding: "16px",
  },
  titleBox: { display: "flex", alignItems: "center" },
};

export default function Deafness() {
  return (
    <Layout>
      <Paper sx={styles.contentInner}>
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
            gridRow: "span 2",
            gridColumn: "2/10",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={styles.titleBox}>
            <Typography component="div" variant="h4">
              HIPOACUSIA GENÉTICA
            </Typography>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            ></Box>
          </Box>
        </Box>

        <Box
          sx={{
            gridRow: "span 4",
            gridColumn: "2/10",
          }}
        >
          <ul>
            <li>
              <Typography variant="body1" sx={{ padding: "8px" }}>
                La hipoacusia sensorioneural congénita (HSNC) es una condición
                frecuente a nivel mundial, que afecta a 1-3 de cada 1000 nacidos
                vivos, siendo la alteración sensorial más común en
                humanos.&nbsp;
              </Typography>
            </li>
            <li style={{ paddingLeft: "8px" }}>
              <Typography variant="body1" sx={{ display: "inline" }}>
                50% de los casos de HSNC corresponden a&nbsp;
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "inline", fontWeight: "bold" }}
              >
                HIPOACUSIA GENÉTICA&nbsp;
              </Typography>
              <Typography variant="body1" sx={{ display: "inline" }}>
                , ya que obedecen a alteraciones en el material genético,
                particularmente en el&nbsp;
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "inline", fontWeight: "bold" }}
              >
                gen GJB2, que codifica para Conexina-26&nbsp;
              </Typography>
              <Typography variant="body1" sx={{ display: "inline" }}>
                (HoangDinh y cols. 2009, Martinez y cols., 2009). Se desconocen
                cuales son las mutaciones más frecuentes, y cual es su
                prevalencia en la población chilena.&nbsp;
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ padding: "8px" }}>
                El desconocimiento de la distribución y frecuencia de dichas
                alteraciones responsables de hipoacusia dificulta el diagnóstico
                y el desarrollo de terapias para pacientes con HSN de origen
                genético.
              </Typography>
            </li>
          </ul>
        </Box>

        <Box
          sx={{
            gridRow: "span 1",
            gridColumn: "3/-1",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">
            POSIBLES CAUSAS DE LA HIPOACUSIA GENÉTICA&nbsp;
          </Typography>
        </Box>

        <Box
          sx={{
            gridRow: "span 13",
            gridColumn: "3/9",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img width="100%" src={Causas} />
          </Box>
        </Box>

        <Box
          sx={{
            gridRow: "span 4",
            gridColumn: "2/6",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img height="100%" src={ADN} />
          </Box>
        </Box>

        <Box
          sx={{
            gridRow: "span 4",
            paddingTop: "25px",
            gridColumn: "6/10",
            textAlign: "center",
          }}
        >
          <Typography variant="body1" sx={{ display: "inline" }}>
            El material genético (ácido desoxirribonucleico, ADN) está
            organizado en estructuras similares a paquetes u “ovillos” llamadas
            cromosomas, las cuales están en el núcleo de cada una de nuestras
            células&nbsp;
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bolder" }}
          >
            ADN&nbsp;
          </Typography>
          <Typography variant="body1" sx={{ display: "inline" }}>
            El material genético (ácido desoxirribonucleico, ADN) está
            organizado en estructuras similares a paquetes u “ovillos”&nbsp;
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bolder" }}
          >
            cromosomas&nbsp;
          </Typography>
          <Typography variant="body1" sx={{ display: "inline" }}>
            , las cuales están en el núcleo de cada una de nuestras células
          </Typography>
        </Box>

        <Box
          sx={{
            gridRow: "span 5",
            gridColumn: "4/8",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img width="100%" src={cromosomas} />
          </Box>
        </Box>

        <Box
          sx={{
            gridRow: "span 3",
            gridColumn: "3/9",
            padding: "8px",
          }}
        >
          <Typography variant="body1" sx={{ display: "inline" }}>
            Los humanos presentamos 23 pares de cromosomas en el núcleo de cada
            una de nuestras células. Cada cromosoma es heredado de cada uno de
            nuestros padres. Esto significa que, en general, los humanos
            contamos con dos copias de cada gen, una heredada del padre y otra
            heredada de la madre. De nuestro interés es el cromosoma 13, el cual
            contiene al gen GJB2 y que codifica a la proteína conexina-26.&nbsp;
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            De nuestro interés es el cromosoma 13, el cual contiene al gen&nbsp;
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold", color: "blue" }}
          >
            GJB2&nbsp;
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            y que codifica a la proteína&nbsp;
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold", color: "blue" }}
          >
            conexina-26.&nbsp;
          </Typography>
        </Box>

        <Box
          sx={{
            gridRow: "span 6",
            gridColumn: "3/9",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img width="100%" src={gjb2} />
          </Box>
        </Box>

        <Box
          sx={{
            gridRow: "span 2",
            gridColumn: "3/9",
            padding: "8px",
          }}
        >
          <Typography variant="body1" sx={{ display: "inline" }}>
            Al analizar la secuencia del ADN contenido en cromosoma 13, se
            observa que&nbsp;
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            el gen GJB2, específicamente su parte codificante (exon-2),&nbsp;
          </Typography>
          <Typography variant="body1" sx={{ display: "inline" }}>
            está contenido entre las posiciones 20.189.581 a 20.188.901.&nbsp;
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            Esta fue la región de análisis de nuestro estudio.
          </Typography>
        </Box>

        <Box
          sx={{
            gridRow: "span 6",
            gridColumn: "2/10",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img width="100%" src={auditivo} />
          </Box>
        </Box>

        <Box
          sx={{
            gridRow: "span 3",
            gridColumn: "3/9",
            padding: "24px",
          }}
        >
          <Typography
            component="span"
            sx={{ width: "100%", fontWeight: "bolder", display: "inline" }}
          >
            CONEXINA-26&nbsp;
          </Typography>
          <Typography
            component="span"
            sx={{ width: "100%", display: "inline" }}
          >
            es una proteína que se expresa en el oído interno, específicamente
            en las células de soporte del interior de la cóclea. Estas células
            brindan apoyo metabólico a las células ciliadas internas (CCI) y
            células ciliadas externas (CCE) , encargadas de detectar las ondas
            sonoras y transformarlas en señales nerviosas que se envían al
            cerebro a través del nervio acústico.
          </Typography>
        </Box>

        <Box
          sx={{
            gridRow: "span 8",
            gridColumn: "3/9",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img width="100%" src={canales} />
          </Box>
        </Box>

        <Box
          sx={{
            gridRow: "span 4",
            gridColumn: "3/9",
            padding: "8px",
          }}
        >
          <Typography variant="body1" sx={{ display: "inline" }}>
            Las células de soporte están conectadas mediante canales de
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            &nbsp;CONEXINA-26.
          </Typography>
          <Typography variant="body1" sx={{ display: "inline" }}>
            &nbsp;Esta proteína pertenece a una familia de moléculas llamadas
            CONEXINAS y que, al estar presente en la membrana celular, genera
            canales de comunicación intercelular (gap-junctions, en ingles), que
            conectan a las células entre sí. Cada canal está formado por la
            unión de dos hemicanales, el cual es la unión de 6 proteínas
            (Conexinas) que se disponen conformando un tubo. La unión de un
            hemicanal de una célula con el hemicanal de una célula vecina
            produce un canal intercelular.
          </Typography>

          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            &nbsp;Mutaciones en el gen de Conexina 26 (GJB2) afectan el estado
            funcional de estos canales en el oído, inhibiendo el acoplamiento
            metabólico y la señalización entre las células de soporte, lo que
            lleva a la falla del tejido coclear, con la consiguiente inducción
            de hipoacusia.
          </Typography>
        </Box>

        <Box
          sx={{
            gridRow: "span 11",
            gridColumn: "3/9",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img width="100%" src={conexina26} />
          </Box>
        </Box>

        <Box
          sx={{
            gridRow: "span 4",
            gridColumn: "3/9",
            padding: "8px",
          }}
        >
          <Typography variant="body1" sx={{ display: "inline" }}>
            Se han descrito más de 100 mutaciones que causan cambios en la
            función comunicante de la proteína CONEXINA-26, y que están
            asociadas a hipoacusia genética.
          </Typography>

          <Typography
            variant="body1"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            &nbsp;El objetivo de este estudio fue identificar todas las
            mutaciones presentes en la región codificante del gen de Conexina 26
            (GJB2, Exón 2) de un grupo de participantes voluntarios con
            hipoacusia sensorioneural de probable causa genética.{" "}
          </Typography>
        </Box>
      </Paper>
    </Layout>
  );
}
