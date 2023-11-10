import React, { useEffect, useState } from "react";
import Wrapper from "../common/Wrapper";
import { Box, MenuItem } from "@mui/material";
import {
  ButtonContainer,
  CancelButton,
  CustomInputLabel,
  CustomSelect,
  SelectedOption,
  SubmitButton,
} from "../../commonStyles";
import InputField from "../common/InputField";
import { useNavigate, useParams } from "react-router-dom";
import { getItem, saveItem } from "../../api/implementation";

const ItemForm = () => {
  const navigate = useNavigate();
  const initData = {
    name: "",
    sellingPrice: "",
    isActive: true,
  };
  const statusOptions = ["Active", "In-Active"];
  const query = useParams();
  const [itemDetails, setItemDetails] = useState(initData);
  useEffect(() => {
    if (query.id) {
      getItemDetails(query.id);
    }
  }, [query]);

  const getItemDetails = async (id) => {
    const data = await getItem(id);
    setItemDetails(data || initData);
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "isActive") {
      value = value === "Active" ? true : false;
    }
    setItemDetails((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };
  const submitData = async () => {
    let res = await saveItem(itemDetails);
    if (res.msg === "success") navigate("/items");
  };
  return (
    <Wrapper>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "52px" }}>
        <Box sx={{ display: "flex", gap: "70px", flexWrap: "wrap" }}>
          <InputField
            type={"text"}
            name={"name"}
            inputLabel={"Item Name"}
            value={itemDetails.name}
            onChange={handleChange}
          />
          <InputField
            type={"text"}
            name={"sellingPrice"}
            inputLabel={"Customer Selling Price"}
            value={itemDetails.sellingPrice}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "fit-content",
          }}
        >
          <CustomInputLabel>Item Status</CustomInputLabel>
          <CustomSelect
            name={"isActive"}
            value={itemDetails.isActive ? "Active" : "In-Active"}
            onChange={handleChange}
            renderValue={(selected) => {
              return <SelectedOption>{selected}</SelectedOption>;
            }}
            inputProps={{ "aria-label": "Without label" }}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </CustomSelect>
        </Box>
        <ButtonContainer>
          <CancelButton onClick={() => navigate("/items")}>Cancel</CancelButton>
          <SubmitButton onClick={submitData}>
            {query.id ? "Update" : "Create"}
          </SubmitButton>
        </ButtonContainer>
      </Box>
    </Wrapper>
  );
};

export default ItemForm;
