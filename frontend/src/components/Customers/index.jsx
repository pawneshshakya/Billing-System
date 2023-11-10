import React, { useEffect, useState } from "react";
import Wrapper from "../common/Wrapper";
import { Box, Stack } from "@mui/material";
import Card from "../common/Card";
import { AddButton, CardHeadingText } from "../../commonStyles";
import { useNavigate } from "react-router-dom";
import ActiveInactiveChip from "../ActiveInactiveChip";
import AddIcon from "../icons/AddIcon";
import { getCustomersList } from "../../api/implementation";

const Customers = () => {
  const navigate = useNavigate();
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    let data = await getCustomersList();
    setCustomerList(data || []);
  };

  return (
    <Wrapper>
      <Box
        sx={{ display: "flex", justifyContent: "end", marginBottom: "44px" }}
      >
        <AddButton
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/addCustomer")}
        >
          ADD
        </AddButton>
      </Box>
      <Stack direction={"row"} gap={"47px"} flexWrap={"wrap"}>
        {customerList?.map((customer, i) => (
          <Card
            key={i}
            onClick={() => navigate(`/editCustomer/${customer.id}`)}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
              }}
            >
              <CardHeadingText>{customer.name}</CardHeadingText>
              <ActiveInactiveChip
                title={customer.isActive ? "Active" : "In-Active"}
                type={customer.isActive ? "Active" : "In-Active"}
              />
            </Box>
          </Card>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default Customers;
