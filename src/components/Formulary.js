import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import axios from "axios";

import BasicSelect from "../components/Dropdown";
import NumberInput from "../components/NumberInput";
import TextInput from "../components/TextInput";
import ReferenceSequence from "../components/ReferenceSequence";
import { baseUrl } from "../static/constants/constants";

import Selectors from "./Selectors";

const styles = {
  mainStyle: {
    display: "grid",
    gridRow: "1/max-content",
    gridColumn: "2/18",
    marginRight: "8px",
    gridTemplateColumns: "repeat(20, 1fr)",
    gridAutoRows: "50px",
    gap: 2,
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#006994",
    boxShadow: 24,
    p: 1,
  },
};

const emptyState = {
  subject: 0,
  sxo_bco: Selectors.sxo_bco[1],
  edad_a: 0,
  edad_m: 0,
  e_gest: 0,
  peso_nac: 0,
  region: Selectors.region[0],
  u_r: Selectors.u_r[0],
  m_educ: Selectors.m_educ[0],
  n_educ1: Selectors.n_educ1[0],
  n_educ2: Selectors.n_educ2[0],
  ocupacion: Selectors.ocupacion[0],
  i_percap: 0,
  prevision: Selectors.prevision[0],
  edad_dg_a: 0,
  edad_dg_m: 0,
  dg_audio_od: Selectors.dg_audio[0],
  dg_audio_oi: Selectors.dg_audio[0],
  perfil_od: Selectors.perfil_audiometrico[0],
  perfil_oi: Selectors.perfil_audiometrico[0],
  had_od: Selectors.had[0],
  had_oi: Selectors.had[0],
  edad_had_a: 0,
  progresividad: Selectors.simple[0],
  edad_had_m: 0,
  prog_adod: Selectors.prog_ado[0],
  prog_adoi: Selectors.prog_ado[0],
  r_dis: Selectors.simple[0],
  a_flia_ha: Selectors.simple[0],
  comorbi_1: Selectors.simple[0],
  comorbi_2: "",
  alelo: "",
  aa_codon: "",
  haplotipo: "",
  gen_adic: "",
  ref_seq2: "",
  gen: "",
  mut_prot: "",
  ref_seq: [
    {
      ref_seq: [],
      pos_chr13: [],
    },
  ],
};

export default function Formulary({ initialValue, reload, setReload }) {
  const [state, setState] = useState(emptyState);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChange = (name, number) => (event) => {
    setState((prevState) => ({
      ...prevState,
      [name]: number ? parseInt(event.target.value, 0) : event.target.value,
    }));
  };

  useEffect(() => {
    if (initialValue) {
      setState(initialValue);
    }
  }, [initialValue]);

  const onSubmit = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        `${baseUrl}subject`,
        {
          subject: state,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      if (reload !== undefined) {
        setReload(!reload);
      }
      setState(emptyState);
    } catch (error) {
      console.error(error);
    }
  };

  const onClean = () => {
    setState(emptyState);
  };

  const onDelete = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.delete(
        `${baseUrl}subject/${state.subject}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      if (reload !== undefined) {
        setReload(!reload);
      }
      setState(emptyState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ ...styles.mainStyle }}>
      <Box
        sx={{
          gridColumn: "3/21",
          gridRow: "span 2",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">FORMULARIO</Typography>
        <br />
        <Typography variant="h5">VARIABLES SOCIODEMOGRÁFICAS</Typography>
      </Box>
      <Box sx={{ gridColumn: "1/3", gridRow: "1/35" }}></Box>
      <Box sx={{ gridColumn: "18/21", gridRow: "3/35" }}></Box>
      <Box sx={{ gridColumn: "span 3", gridRow: "span 1" }}>
        <NumberInput
          name={"subject"}
          displayName={"Sujeto"}
          callback={onChange("subject", true)}
          value={state.subject}
        />
      </Box>
      <Box sx={{ gridColumn: "span 2", gridRow: "span 1" }}>
        <NumberInput
          name={"edad_a"}
          displayName={"Edad (años)"}
          callback={onChange("edad_a", true)}
          value={state.edad_a}
        />
      </Box>
      <Box sx={{ gridColumn: "span 2", gridRow: "span 1" }}>
        <NumberInput
          name={"edad_m"}
          displayName={"Edad (meses)"}
          callback={onChange("edad_m", true)}
          value={state.edad_m}
        />
      </Box>
      <Box sx={{ gridColumn: "span 4", gridRow: "span 1" }}>
        <NumberInput
          name={"e_gest"}
          displayName={"Edad gestacional (semanas)"}
          callback={onChange("e_gest", true)}
          value={state.e_gest}
        />
      </Box>
      <Box sx={{ gridColumn: "span 3", gridRow: "span 1" }}>
        <NumberInput
          name={"peso_nac"}
          displayName={"Peso al nacer (g)"}
          callback={onChange("peso_nac", true)}
          value={state.peso_nac}
        />
      </Box>
      <Box sx={{ gridColumn: "span 3", gridRow: "span 1" }}>
        <NumberInput
          name={"i_percap"}
          displayName={"Ingreso percápita familiar"}
          callback={onChange("i_percap", true)}
          value={state.i_percap}
        />
      </Box>
      <Box sx={{ gridColumn: "span 4", gridRow: "span 1" }}>
        <BasicSelect
          name={"sxo_bco"}
          displayName={"Sexo Biológico"}
          options={Selectors.sxo_bco}
          callback={onChange("sxo_bco")}
          value={state.sxo_bco}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"region"}
          displayName={"Región"}
          options={Selectors.region}
          callback={onChange("region")}
          value={state.region}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"u_r"}
          displayName={"Urbano-Ruralidad"}
          options={Selectors.u_r}
          callback={onChange("u_r")}
          value={state.u_r}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"m_educ"}
          displayName={"Modalidad educacional"}
          options={Selectors.m_educ}
          callback={onChange("m_educ")}
          value={state.m_educ}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"n_educ1"}
          displayName={"Nivel educacional al momento del estudio"}
          options={Selectors.n_educ1}
          callback={onChange("n_educ1")}
          value={state.n_educ1}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"n_educ2"}
          displayName={"Nivel educacional máximo alcanzado"}
          options={Selectors.n_educ2}
          callback={onChange("n_educ2")}
          value={state.n_educ2}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"ocupacion"}
          displayName={"Ocupación"}
          options={Selectors.ocupacion}
          callback={onChange("ocupacion")}
          value={state.ocupacion}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"prevision"}
          displayName={"Prevision de salud"}
          options={Selectors.prevision}
          callback={onChange("prevision")}
          value={state.prevision}
        />
      </Box>
      <Box sx={{ gridColumn: "3/18", gridRow: "8" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <Typography variant="h5" sx={styles.title}>
            VARIABLES CLÍNICAS Y GENÉTICAS
          </Typography>
        </Box>
      </Box>
      <ReferenceSequence array={state.ref_seq} onChange={onChange("ref_seq")} />
      <Box sx={{ gridColumn: "span 5", gridRow: "span 1" }}>
        <NumberInput
          name={"edad_dg_a"}
          displayName={"Edad de diagnóstico audiológico (años)"}
          callback={onChange("edad_dg_a", true)}
          value={state.edad_dg_a}
        />
      </Box>
      <Box sx={{ gridColumn: "span 5", gridRow: "span 1" }}>
        <NumberInput
          name={"edad_dg_m"}
          displayName={"Edad de diagnóstico audiológico (meses)"}
          callback={onChange("edad_dg_m", true)}
          value={state.edad_dg_m}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"dg_audio_od"}
          displayName={"Diagnóstico audiológico oído derecho"}
          options={Selectors.dg_audio}
          callback={onChange("dg_audio_od")}
          value={state.dg_audio_od}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"dg_audio_oi"}
          displayName={"Diagnóstico audiológico oído izquierdo"}
          options={Selectors.dg_audio}
          callback={onChange("dg_audio_oi")}
          value={state.dg_audio_oi}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"perfil_od"}
          displayName={"Perfil audiometrico oído derecho"}
          options={Selectors.perfil_audiometrico}
          callback={onChange("perfil_od")}
          value={state.perfil_od}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"perfil_oi"}
          displayName={"Perfil audiometrico oído izquierdo"}
          options={Selectors.perfil_audiometrico}
          callback={onChange("perfil_oi")}
          value={state.perfil_oi}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"progresividad"}
          displayName={"Progresividad"}
          options={Selectors.simple}
          callback={onChange("progresividad")}
          value={state.progresividad}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}></Box>

      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"had_od"}
          displayName={"HAD oído derecho"}
          options={Selectors.had}
          callback={onChange("had_od")}
          value={state.had_od}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"had_oi"}
          displayName={"HAD oído izquierdo"}
          options={Selectors.had}
          callback={onChange("had_oi")}
          value={state.had_oi}
        />
      </Box>
      <Box sx={{ gridColumn: "span 5", gridRow: "span 1" }}>
        <NumberInput
          name={"edad_had_a"}
          displayName={"Edad de inicio use de HAD (años)"}
          callback={onChange("edad_had_a", true)}
          value={state.edad_had_a}
        />
      </Box>
      <Box sx={{ gridColumn: "span 5", gridRow: "span 1" }}>
        <NumberInput
          name={"edad_had_m"}
          displayName={"Edad de inicio use de HAD (meses)"}
          callback={onChange("edad_had_m", true)}
          value={state.edad_had_m}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"prog_adod"}
          displayName={"Financiamiento de HAD oído derecho"}
          options={Selectors.prog_ado}
          callback={onChange("prog_adod")}
          value={state.prog_adod}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"prog_adoi"}
          displayName={"Financiamiento de HAD oído izquierdo"}
          options={Selectors.prog_ado}
          callback={onChange("prog_adoi")}
          value={state.prog_adoi}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"r_dis"}
          displayName={"Registro de la discapacidad"}
          options={Selectors.simple}
          callback={onChange("r_dis")}
          value={state.r_dis}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"a_flia_ha"}
          displayName={"Antecedentes familiares de hipoacusia"}
          options={Selectors.simple}
          callback={onChange("a_flia_ha")}
          value={state.a_flia_ha}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}>
        <BasicSelect
          name={"comorbi_1"}
          displayName={"Morbilidad e historia clínica relevante"}
          options={Selectors.simple}
          callback={onChange("comorbi_1")}
          value={state.comorbi_1}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 1" }}></Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 2" }}>
        <TextInput
          name={"comorbi_2"}
          displayName={
            "Comorbilidad. Antecedentes relevantes en historia clínica"
          }
          rows={4}
          callback={onChange("comorbi_2")}
          value={state.comorbi_2}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 2" }}>
        <TextInput
          name={"alelo"}
          displayName={"Alelos (direct)"}
          rows={1}
          callback={onChange("alelo")}
          value={state.alelo}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 2" }}>
        <TextInput
          name={"aa_codon"}
          displayName={"Aminiácido (Codon)"}
          rows={1}
          callback={onChange("aa_codon")}
          value={state.aa_codon}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 2" }}>
        <TextInput
          name={"haplotipo"}
          displayName={"Haplotipo"}
          rows={1}
          callback={onChange("haplotipo")}
          value={state.haplotipo}
        />
      </Box>

      <Box sx={{ gridColumn: "span 7", gridRow: "span 2" }}>
        <TextInput
          name={"gen"}
          displayName={"Gen"}
          rows={1}
          callback={onChange("gen")}
          value={state.gen}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 2" }}>
        <TextInput
          name={"gen_adic"}
          displayName={"Información genética adicional"}
          rows={1}
          callback={onChange("gen_adic")}
          value={state.gen_adic}
        />
      </Box>

      <Box sx={{ gridColumn: "span 7", gridRow: "span 2" }}>
        <TextInput
          name={"mut_prot"}
          displayName={"Mutación en proteínas"}
          rows={1}
          callback={onChange("mut_prot")}
          value={state.mut_prot}
        />
      </Box>
      <Box sx={{ gridColumn: "span 7", gridRow: "span 2" }}>
        <TextInput
          name={"ref_seq2"}
          displayName={"Reference sequence 2"}
          rows={1}
          callback={onChange("ref_seq2")}
          value={state.ref_seq2}
        />
      </Box>
      <Box
        sx={{
          gridColumn: "span 7",
          gridRow: "span 2",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <Button variant="outlined" onClick={onSubmit}>
          Guardar
        </Button>
        <Button variant="outlined" onClick={onClean}>
          Limpiar Formulario
        </Button>
        <Button variant="outlined" color="error" onClick={handleOpen}>
          Eliminar
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Box
            sx={{
              width: "100%",
              bgcolor: "#fafafa",
              display: "flex",
              flexDirection: "column",
              minHeight: "150px",
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              sx={{ textAlign: "center" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Vas a borrar un registro. Esta accion es irreversible.
            </Typography>
            <Typography sx={{ textAlign: "center" }}>¿Estas Seguro?</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                sx={{ mx: 4 }}
                color="error"
                onClick={onDelete}
              >
                Si
              </Button>
              <Button variant="outlined" sx={{ mx: 4 }} onClick={handleClose}>
                No
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
