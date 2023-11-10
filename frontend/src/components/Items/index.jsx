import React, { useEffect, useState } from "react";
import Wrapper from "../common/Wrapper";
import { Box, Stack } from "@mui/material";
import { AddButton, CardHeadingText } from "../../commonStyles";
import ActiveInactiveChip from "../ActiveInactiveChip";
import AddIcon from "../icons/AddIcon";
import { useNavigate } from "react-router-dom";
import Card from "../common/Card";
import { getItemList } from "../../api/implementation";

const Items = () => {
  const navigate = useNavigate();
  const [itemsList, setItemsList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    let data = await getItemList();
    setItemsList(data || []);
  };
  return (
    <Wrapper>
      <Box
        sx={{ display: "flex", justifyContent: "end", marginBottom: "44px" }}
      >
        <AddButton
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/addItems")}
        >
          ADD
        </AddButton>
      </Box>
      <Stack direction={"row"} gap={"47px"} flexWrap={"wrap"}>
        {itemsList.map((item, i) => (
          <Card key={i} onClick={() => navigate(`/editItem/${item.id}`)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
              }}
            >
              <CardHeadingText>{item.name}</CardHeadingText>
              <ActiveInactiveChip
                title={item.isActive ? "Active" : "In-Active"}
                type={item.isActive ? "Active" : "In-Active"}
              />
            </Box>
          </Card>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default Items;
