import React, { useEffect, useState } from "react";
import { Box, Modal, Stack } from "@mui/material";
import {
  CancelButton,
  CardHeadingText,
  ModalHeading,
} from "../../commonStyles";
import Card from "../common/Card";
import ActiveInactiveChip from "../ActiveInactiveChip";
import { getCustomersList } from "../../api/implementation";
const style = {
  margin: "200px",
  minHeight: "737px",
  padding: "31px 45px!important",
  bgcolor: "background.paper",
};
const SelectCustomerModal = ({ open, handleClose, handleSelect }) => {
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    if (open) getList();
    return () => {
      setCustomerList([]);
    };
  }, [open]);
  const getList = async () => {
    let data = await getCustomersList();
    setCustomerList(data || []);
  };
  const handleClick = (customer) => {
    if (customer.isActive) {
      handleSelect(customer.id);
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ModalHeading>Select Customer</ModalHeading>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
        </Box>
        <Stack
          direction={"row"}
          gap={"37px 67px"}
          flexWrap={"wrap"}
          mt={"70px"}
        >
          {customerList.map((customer, i) => (
            <Card
              key={i}
              sx={{
                ...(!customer.isActive && { background: "rgba(0,0,0,.2)" }),
              }}
              onClick={() => handleClick(customer)}
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
      </Box>
    </Modal>
  );
};

export default SelectCustomerModal;
