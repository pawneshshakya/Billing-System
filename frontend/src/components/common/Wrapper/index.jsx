import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { getPageHeading } from "../../../utils";

const Wrapper = ({ children }) => {
  const location = useLocation();
  return (
    <Box sx={{ marginLeft: "177px", padding: "38px 60px 0px 47px" }}>
      <Typography
        sx={{
          color: "#000",
          fontFamily: "Inter",
          fontSize: "31px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          marginTop: "38px",
          marginBottom: "40px",
        }}
      >
        {getPageHeading(location.pathname)}
      </Typography>
      {children}
    </Box>
  );
};

export default Wrapper;
