import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const styles = {};

export default function DataTable() {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Sujeto</TableCell>
          <TableCell align="center">Edad</TableCell>
          <TableCell align="center">Edad&nbsp;Gestacional</TableCell>
          <TableCell align="center">Peso&nbsp;al&nbsp;Nacer&nbsp;(g)</TableCell>
          <TableCell align="center">Sexo&nbsp;Biológico</TableCell>
          <TableCell align="center">Región</TableCell>
          <TableCell align="center">Urbano-Ruralidad</TableCell>
          <TableCell align="center">Modalidad&nbsp;educacional</TableCell>
          <TableCell align="center">
            Nivel&nbsp;educacional&nbsp;al momento&nbsp;del&nbsp;estudio
          </TableCell>
          <TableCell align="center">
            Nivel&nbsp;educacional Maximo&nbsp;Alcanzado
          </TableCell>
          <TableCell align="center">Ocupación</TableCell>
          <TableCell align="center">
            Ingresos&nbsp;percápita familiar&nbsp;(clp)
          </TableCell>
          <TableCell align="center">
            Prevision&nbsp;de&nbsp;Salud&nbsp;(años)
          </TableCell>
          <TableCell align="center">
            Edad&nbsp;de&nbsp;diagnostico audiológico
          </TableCell>
          <TableCell align="center">
            Diagnóstico audiológico oído&nbsp;derecho
          </TableCell>
          <TableCell align="center">
            Diagnóstico audiológico oído&nbsp;izquierdo
          </TableCell>
          <TableCell align="center">
            Perfil&nbsp;audiometrico oído&nbsp;derecho
          </TableCell>
          <TableCell align="center">
            Perfil&nbsp;audiometrico oído&nbsp;izquierdo
          </TableCell>
          <TableCell align="center">HAD&nbsp;oído derecho</TableCell>
          <TableCell align="center">HAD&nbsp;oído izquierdo</TableCell>
          <TableCell align="center">
            Edad&nbsp;de&nbsp;inicio uso&nbsp;de&nbsp;HAD
          </TableCell>
          <TableCell align="center">
            Financiamiento&nbsp;HAD oído&nbsp;derecho
          </TableCell>
          <TableCell align="center">
            Financiamiento&nbsp;HAD oído&nbsp;izquierdo
          </TableCell>
          <TableCell align="center">
            Registro&nbsp;de la&nbsp;discapacidad
          </TableCell>
          <TableCell align="center">
            Antecedentes&nbsp;familiares de&nbsp;hipoacusia
          </TableCell>
          <TableCell align="center">
            Morbilidad&nbsp;e&nbsp;historia clínica&nbsp;relevante
          </TableCell>
          <TableCell align="center">
            Comorbilidad.&nbsp;Antecedentes relevantes&nbsp;en&nbsp;historia
            clínica.&nbsp;Descriptivo
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell align="right">1</TableCell>
          <TableCell align="center">2</TableCell>
          <TableCell align="center">200g</TableCell>
          <TableCell align="center">Femenina</TableCell>
          <TableCell align="center">Metropolitana</TableCell>
          <TableCell align="center">Urbano</TableCell>
          <TableCell align="center">Educacion Regular con PIE</TableCell>
          <TableCell align="center">Educacion Básica</TableCell>
          <TableCell align="center">Educación preescolar completa</TableCell>
          <TableCell align="center">Estudiante</TableCell>
          <TableCell align="center">167.000</TableCell>
          <TableCell align="center">Isapre</TableCell>
          <TableCell align="center">23 meses</TableCell>
          <TableCell align="center">HSN profunda, HSN severa</TableCell>
          <TableCell align="center">Plano Descendente</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
