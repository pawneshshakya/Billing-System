import { Add, Remove } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import React from "react";
const CustomBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #262562;
  background: #f6f6f6;
`;
const buttonStyles = {
  padding: 0,
  minWidth: "unset",
};
const Incrementer = ({ itemName, quantity, updateQuantity, ...rest }) => {
  const increment = () => {
    updateQuantity(itemName, quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      updateQuantity(itemName, quantity - 1);
    }
  };
  return (
    <CustomBox {...rest}>
      <Button style={buttonStyles} variant="text" onClick={decrement}>
        <Remove sx={{ color: "#262562" }} fontSize="small" />
      </Button>
      {quantity}
      <Button style={buttonStyles} variant="text" onClick={increment}>
        <Add sx={{ color: "#262562" }} fontSize="small" />
      </Button>
    </CustomBox>
  );
};

export default Incrementer;
