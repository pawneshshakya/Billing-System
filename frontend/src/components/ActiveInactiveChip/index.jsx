import { Box, Typography, styled } from "@mui/material";
import React from "react";
const CustomBox = styled(Box)`
  width: max-content;
  border-radius: 7px;
  padding: 2px 16px;
  position: absolute;
  right: -9px;
  top: 60px;
  background: ${(prop) => (prop.type === "Active" ? "#C5FBCA" : "#ffdada")};
`;
const CustomTypography = styled(Typography)`
  color: ${(prop) => (prop.type === "Active" ? "#00680a" : "#B00707")};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ActiveInactiveChip = ({ title, type }) => {
  return (
    <CustomBox type={type}>
      <CustomTypography type={type}>{title}</CustomTypography>
    </CustomBox>
  );
};

export default ActiveInactiveChip;
