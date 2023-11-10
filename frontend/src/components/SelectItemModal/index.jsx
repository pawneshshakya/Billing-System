import { Box, Modal, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CancelButton,
  CardHeadingText,
  ItemAddButton,
  ModalHeading,
  SubmitButton,
} from "../../commonStyles";
import Card from "../common/Card";
import styled from "@emotion/styled";
import Incrementer from "../Incrementer";
import ActiveInactiveChip from "../ActiveInactiveChip";
import { getItemList } from "../../api/implementation";
const style = {
  position: "relative",
  flexDirection: "column",
  margin: "200px",
  minHeight: "737px",
  padding: "31px 32px 27px 45px!important",
  bgcolor: "background.paper",
};
const Footer = styled(Box)`
  position: absolute;
  bottom: 27px;
  right: 32px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 17px;
`;
const SelectItemModal = ({ open, handleClose, handleSelect }) => {
  // const itemsList = [
  //   { name: "Laptop", isActive: true },
  //   { name: "Headphones", isActive: false },
  // ];
  const [data, setData] = useState([]);
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    let list = await getItemList();
    setItemList(list || []);
  };
  useEffect(() => {
    return () => {
      setData([]);
    };
  }, [open]);
  const addItem = ({ id, name, sellingPrice }) => {
    setData([...data, { itemId: id, name, quantity: 1, sellingPrice }]);
  };
  const getQty = (name) => {
    return data.find((d) => d.name === name).quantity;
  };
  const updateQuantity = (itemName, newQuantity) => {
    let updatedData = [];
    if (newQuantity > 0) {
      updatedData = data.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      );
    } else {
      updatedData = data.filter((d) => d.name !== itemName);
    }

    setData(updatedData);
  };
  const isItemAdded = (name) => {
    return !!data.find((d) => d.name === name);
  };
  return (
    <Modal
      sx={{ overflow: "scroll" }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModalHeading>Select Items</ModalHeading>
        <Stack
          direction={"row"}
          gap={"37px 67px"}
          flexWrap={"wrap"}
          m={"70px 0 0 60px"}
        >
          {itemList.map((item, i) => (
            <Card
              key={i}
              sx={{ ...(!item.isActive && { background: "rgba(0,0,0,.2)" }) }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  position: "relative",
                }}
              >
                <CardHeadingText>{item.name}</CardHeadingText>
                {!item.isActive ? (
                  <ActiveInactiveChip title={"In-Active"} type={"In-Active"} />
                ) : !isItemAdded(item.name) ? (
                  <ItemAddButton onClick={() => addItem(item)}>
                    ADD
                  </ItemAddButton>
                ) : (
                  <Incrementer
                    sx={{ alignSelf: "end" }}
                    itemName={item.name}
                    quantity={getQty(item.name)}
                    updateQuantity={updateQuantity}
                  />
                )}
              </Box>
            </Card>
          ))}
        </Stack>
        <Footer>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <SubmitButton onClick={() => handleSelect(data)}>ADD</SubmitButton>
        </Footer>
      </Box>
    </Modal>
  );
};

export default SelectItemModal;
