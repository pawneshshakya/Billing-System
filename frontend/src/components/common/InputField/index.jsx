import { Box } from "@mui/material";
import React from "react";
import { CustomInput, CustomInputLabel } from "../../../commonStyles";

const InputField = ({ inputLabel, onChange, type, value, ...rest }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <CustomInputLabel>{inputLabel}</CustomInputLabel>
      <CustomInput type={type} onChange={onChange} value={value} {...rest} />
    </Box>
  );
};

export default InputField;
