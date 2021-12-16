import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const ReferenceSequenceTable = ({ ref_seq }) => {
  return (
    <>
      {ref_seq[0].ref_seq.length !== 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "14px", fontWeight: "normal" }}>
                Reference&nbsp;Sequence
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  display: "flex",
                  alignItems: "center",
                }}
                align="center"
              >
                Posicion&nbsp;Cromosoma 13
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ref_seq.map(({ ref_seq, pos_chr13 }, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{ref_seq.join(", ")}</TableCell>
                  <TableCell align="right">{pos_chr13.join(", ")}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : null}
    </>
  );
};

const RegistroSocioDemografico = ({ record, passData }) => {
  const {
    subject,
    sxo_bco,
    edad_a,
    edad_m,
    e_gest,
    peso_nac,
    region,
    u_r,
    m_educ,
    n_educ1,
    n_educ2,
    ocupacion,
    i_percap,
    prevision,
  } = record;
  return (
    <TableRow
      onClick={() => {
        if (passData) {
          passData(record);
        }
      }}
    >
      <TableCell>{subject}</TableCell>
      <TableCell align="right">
        {edad_a != 0
          ? `${edad_a}\u00A0años`
          : edad_m
          ? `${edad_m}\u00A0meses`
          : ""}
      </TableCell>
      <TableCell align="center">{e_gest}</TableCell>
      <TableCell align="center">{peso_nac}</TableCell>
      <TableCell align="center">{sxo_bco}</TableCell>
      <TableCell align="center">{region}</TableCell>
      <TableCell align="center">{u_r}</TableCell>
      <TableCell align="center">{m_educ}</TableCell>
      <TableCell align="center">{n_educ1}</TableCell>
      <TableCell align="center">{n_educ2}</TableCell>
      <TableCell align="center">{ocupacion}</TableCell>
      <TableCell align="center">{i_percap}</TableCell>
      <TableCell align="center">{prevision}</TableCell>
    </TableRow>
  );
};

export function DataTableSocioDemografica({ registros, passData }) {
  return (
    <Table>
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
        </TableRow>
      </TableHead>
      <TableBody>
        {registros?.length
          ? registros.map((registro, index) => (
              <RegistroSocioDemografico
                record={registro}
                key={index}
                passData={passData}
              />
            ))
          : null}
      </TableBody>
    </Table>
  );
}

const RegistroClinicoGenetico = ({ record, passData }) => {
  const {
    subject,
    edad_dg_a,
    edad_dg_m,
    dg_audio_od,
    dg_audio_oi,
    perfil_od,
    perfil_oi,
    had_od,
    had_oi,
    edad_had_a,
    edad_had_m,
    prog_adod,
    prog_adoi,
    r_dis,
    a_flia_ha,
    comorbi_1,
    comorbi_2,
    alelo,
    aa_codon,
    haplotipo,
    gen_adic,
    ref_seq2,
    gen,
    mut_prot,
    ref_seq,
    progresividad,
  } = record;
  return (
    <TableRow
      onClick={() => {
        if (passData) {
          passData(record);
        }
      }}
    >
      <TableCell>{subject}</TableCell>
      <TableCell align="center">
        {edad_dg_a
          ? `${edad_dg_a}\u00A0años`
          : edad_dg_m
          ? `${edad_dg_m}\u00A0meses`
          : ""}
      </TableCell>
      <TableCell align="center">{dg_audio_od}</TableCell>
      <TableCell align="center">{dg_audio_oi}</TableCell>
      <TableCell align="center">{perfil_od}</TableCell>
      <TableCell align="center">{perfil_oi}</TableCell>
      <TableCell align="center">{progresividad}</TableCell>
      <TableCell align="center">{had_od}</TableCell>
      <TableCell align="center">{had_oi}</TableCell>
      <TableCell align="center">
        {edad_had_a
          ? `${edad_had_a}\u00A0años`
          : edad_had_m
          ? `${edad_had_m}\u00A0meses`
          : ""}
      </TableCell>
      <TableCell align="center">{prog_adod}</TableCell>
      <TableCell align="center">{prog_adoi}</TableCell>
      <TableCell align="center">{r_dis}</TableCell>
      <TableCell align="center">{a_flia_ha}</TableCell>
      <TableCell align="center">{comorbi_1}</TableCell>
      <TableCell align="center">{comorbi_2}</TableCell>
      <TableCell align="center">{alelo}</TableCell>
      <TableCell align="center">{aa_codon}</TableCell>
      <TableCell align="center">{haplotipo}</TableCell>
      <TableCell align="center">{ref_seq2}</TableCell>
      <TableCell align="center">{gen}</TableCell>
      <TableCell align="center">{gen_adic}</TableCell>
      <TableCell align="center">{mut_prot}</TableCell>
      <TableCell align="center">
        <ReferenceSequenceTable ref_seq={ref_seq} />
      </TableCell>
    </TableRow>
  );
};

export function DataTableClinicaGenetica({ registros, passData }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Sujeto</TableCell>
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
          <TableCell align="center">Progresividad</TableCell>
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
          <TableCell align="center">Alelos</TableCell>
          <TableCell align="center">Aminoácido&nbsp;(Codon)</TableCell>
          <TableCell align="center">Haplotipo</TableCell>
          <TableCell align="center">Reference&nbsp;Sequence&nbsp;2</TableCell>
          <TableCell align="center">Gen</TableCell>
          <TableCell align="center">
            Información&nbsp;genética adicional
          </TableCell>
          <TableCell align="center">Mutación&nbsp;en&nbsp;proteínas</TableCell>
          <TableCell align="center">Sequences</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {registros?.length
          ? registros.map((registro, index) => (
              <RegistroClinicoGenetico
                record={registro}
                key={index}
                passData={passData}
              />
            ))
          : null}
      </TableBody>
    </Table>
  );
}
