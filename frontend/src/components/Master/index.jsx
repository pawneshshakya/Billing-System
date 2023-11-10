import React from "react";
import Card from "../common/Card";
import Wrapper from "../common/Wrapper";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardHeadingText, CardSubHeadingText } from "../../commonStyles";

const Master = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Stack direction={"row"} gap={"47px"} flexWrap={"wrap"}>
        <Card onClick={() => navigate("/customers")}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <CardHeadingText>Customer</CardHeadingText>
            <CardSubHeadingText>
              Read or Create customer data
            </CardSubHeadingText>
          </Box>
        </Card>
        <Card onClick={() => navigate("/items")}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <CardHeadingText>Items</CardHeadingText>
            <CardSubHeadingText>Read or Create items data</CardSubHeadingText>
          </Box>
        </Card>
      </Stack>
    </Wrapper>
  );
};

export default Master;
