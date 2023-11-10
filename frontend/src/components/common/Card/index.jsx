import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Card = ({ children, onClick, ...rest }) => {
  const StyledPaper = styled(Paper)(({ theme }) => ({
    width: 359,
    height: 120,
    padding: "20px",
    borderRadius: "7px",
    border: "1px solid #BCBCBC",
    background: "#FDFDFD",
    boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)",
  }));
  return (
    <StyledPaper onClick={onClick} {...rest}>
      {children}
    </StyledPaper>
  );
};

export default Card;
