import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import BasicSelect from "../components/Dropdown";
import Selectors from "./Selectors";
import { Button } from "@mui/material";

export default function ReferenceSequence({ array, onChange }) {
  const onChangeLocal = (index) => (name) => (event) => {
    const updatedSeq = [...array];
    updatedSeq[index][name] = event.target.value;
    onChange({ target: { value: updatedSeq } });
  };

  const addSequence = () => {
    onChange({
      target: {
        value: [
          ...array,
          {
            ref_seq: [],
            pos_chr13: [],
          },
        ],
      },
    });
  };

  const removeSequence = () => {
    if (array.length === 1) {
      onChange({
        target: {
          value: [
            {
              ref_seq: [],
              pos_chr13: [],
            },
          ],
        },
      });
    } else {
      const oldArray = [...array];
      oldArray.pop();
      onChange({ target: { value: oldArray } });
    }
  };

  const width = array.length * 2;
  return (
    <Box
      sx={{
        gridColumn: "span 14",
        gridRow: `span ${width}`,
        gridTemplateColumns: "repeat(20, 1fr)",
        gridAutoRows: "50px",
        display: "grid",
        gap: 2,
      }}
    >
      {array.map((elem, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gap: 2,
            gridColumn: "span 18",
            gridRow: `span 2`,
            gridTemplateColumns: "repeat(20, 1fr)",
            gridAutoRows: "50px",
          }}
        >
          <Box sx={{ gridColumn: "span 10", gridRow: "span 2" }}>
            <BasicSelect
              sx={{ maxWidth: "285px" }}
              name={"ref_seq"}
              displayName={"Reference sequence"}
              options={Selectors.ref_seq}
              multiple={true}
              callback={onChangeLocal(index)("ref_seq")}
              value={elem.ref_seq || []}
            />
          </Box>
          <Box sx={{ gridColumn: "span 10", gridRow: "span 2" }}>
            <BasicSelect
              sx={{ maxWidth: "285px" }}
              name={"pos_chr13"}
              multiple={true}
              displayName={"Posicion en cromosoma 13"}
              options={Selectors.pos_chr13}
              callback={onChangeLocal(index)("pos_chr13")}
              value={elem.pos_chr13 || []}
            />
          </Box>
        </Box>
      ))}
      <Box sx={{ gridColumn: "19", gridRow: "1" }}>
        <Button onClick={addSequence}>+</Button>
      </Box>
      <Box sx={{ gridColumn: "20", gridRow: "1" }}>
        <Button onClick={removeSequence}>-</Button>
      </Box>
    </Box>
  );
}
