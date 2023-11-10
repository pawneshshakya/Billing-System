import React, { useEffect, useState } from "react";
import Wrapper from "../common/Wrapper";
import InputField from "../common/InputField";
import { Box, MenuItem } from "@mui/material";
import {
  ButtonContainer,
  CancelButton,
  CustomInputLabel,
  CustomSelect,
  SelectedOption,
  SubmitButton,
} from "../../commonStyles";
import { getCustomer, saveCustomer } from "../../api/implementation";
import { useNavigate, useParams } from "react-router-dom";
const CustomerForm = () => {
  const navigate = useNavigate();
  const initData = {
    name: "",
    address: "",
    panCard: "",
    gstno: "",
    isActive: true,
  };
  const statusOptions = ["Active", "In-Active"];
  const query = useParams();
  // const [status, setStatus] = useState("Active");
  const [custDetails, setCustDetails] = useState(initData);
  useEffect(() => {
    if (query.id) {
      getCustomerDetail(query.id);
    }
  }, [query]);

  const getCustomerDetail = async (id) => {
    const data = await getCustomer(id);
    setCustDetails(data || initData);
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "isActive") {
      value = value === "Active" ? true : false;
    }
    setCustDetails((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };
  const submitData = async () => {
    let res = await saveCustomer(custDetails);
    if (res.msg === "success") navigate("/customers");
  };

  

  return (
    <Wrapper>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "52px" }}>
        <Box sx={{ display: "flex", gap: "70px", flexWrap: "wrap" }}>
          <InputField
            type={"text"}
            name={"name"}
            inputLabel={"Customer Name"}
            onChange={handleChange}
            value={custDetails?.name}
          />
          <InputField
            type={"text"}
            name={"address"}
            inputLabel={"Customer Address"}
            onChange={handleChange}
            value={custDetails?.address}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "70px", flexWrap: "wrap" }}>
          <InputField
            type={"text"}
            name={"panCard"}
            inputLabel={"Customer Pan Card Number"}
            onChange={handleChange}
            value={custDetails.panCard}
            inputProps={{ maxLength: 10 }}
          />
          <InputField
            type={"text"}
            name={"gstno"}
            inputLabel={"Customer GST Number"}
            onChange={handleChange}
            value={custDetails.gstno}
            inputProps={{ maxLength: 15 }}
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
          <CustomInputLabel>Customer Status</CustomInputLabel>
          <CustomSelect
            name={"isActive"}
            value={custDetails.isActive ? "Active" : "In-Active"}
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
          <CancelButton onClick={() => navigate("/customers")}>
            Cancel
          </CancelButton>
          <SubmitButton onClick={submitData}>
            {query.id ? "Update" : "Create"}
          </SubmitButton>
        </ButtonContainer>
      </Box>
    </Wrapper>
  );
};

export default CustomerForm;
