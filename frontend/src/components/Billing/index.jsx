import React, { useState } from "react";
import Wrapper from "../common/Wrapper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import {
  AddButton,
  CancelButton,
  LabelTypography,
  SubmitButton,
  ValueTypography,
} from "../../commonStyles";
import AddIcon from "../icons/AddIcon";
import SelectCustomerModal from "../SelectCustomerModal";
import SelectItemModal from "../SelectItemModal";
import Incrementer from "../Incrementer";
import { generateInvoice, getCustomer } from "../../api/implementation";
import { useNavigate } from "react-router-dom";
const Billing = () => {
  const navigate = useNavigate();
  const [custDetails, setCustDetails] = useState(null);
  const [openCustomerModal, setOpenCustomerModal] = useState(false);
  const [openItemModal, setOpenItemModal] = useState(false);
  const [itemData, setItemData] = useState([]);

  const handleCustomerSelect = async (id) => {
    const data = await getCustomer(id);
    setCustDetails(data);
    setOpenCustomerModal(false);
  };
  const handleItemSelect = (data) => {
    setItemData(data);
    setOpenItemModal(false);
  };
  const updateQuantity = (itemName, newQuantity) => {
    let updatedData = [];
    if (newQuantity > 0) {
      updatedData = itemData.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      );
    } else {
      updatedData = itemData.filter((d) => d.name !== itemName);
    }

    setItemData(updatedData);
  };
  const handleCancelButton = () => {
    setCustDetails(null);
    setItemData({});
  };
  const getTotalAmount = () => {
    let total = itemData.reduce(
      (sum, curr) => (sum = sum + curr.quantity * curr.sellingPrice),
      0
    );
    if (!custDetails.gstno) {
      total = total + total * 0.18;
    }
    return total;
  };
  const createInvoice = async () => {
    const payload = {
      customerId: custDetails.id,
      items: itemData,
      totalAmount: getTotalAmount(),
    };
    const res = await generateInvoice(payload);
    if (res.msg === "success") navigate(`/billingDetails/${res.invoiceId}`);
  };
  return (
    <Wrapper>
      <CustomCard>
        <CardContent
          sx={{
            height: "290px",
            padding: "0!important",
          }}
        >
          <CardHeading>Customer Details</CardHeading>
          <Divider />
          {custDetails ? (
            <DetailContainer>
              <TextWrapper>
                <LabelTypography>Name</LabelTypography>
                <ValueTypography>: {custDetails.name}</ValueTypography>
              </TextWrapper>
              <TextWrapper>
                <LabelTypography>Address</LabelTypography>
                <ValueTypography>: {custDetails.address}</ValueTypography>
              </TextWrapper>
              <TextWrapper>
                <LabelTypography>Pan Card</LabelTypography>
                <ValueTypography>: {custDetails.panCard}</ValueTypography>
              </TextWrapper>
              <TextWrapper>
                <LabelTypography>GST Num</LabelTypography>
                <ValueTypography>: {custDetails.gstno}</ValueTypography>
              </TextWrapper>
            </DetailContainer>
          ) : (
            <AddButtonWrapper>
              <AddButton
                variant="contained"
                bgcolor={"#FFFFFF"}
                startIcon={<AddIcon />}
                onClick={() => setOpenCustomerModal(true)}
              >
                ADD
              </AddButton>
            </AddButtonWrapper>
          )}
        </CardContent>
      </CustomCard>
      {custDetails && (
        <CustomCard>
          <CardContent
            sx={{
              [itemData?.length > 0 ? "minHeight" : "height"]: "290px",
              padding: "0!important",
            }}
          >
            <CardHeading>Items</CardHeading>
            <Divider />
            {itemData?.length > 0 ? (
              <DetailContainer p={"0!important"}>
                <TableContainer>
                  <Table sx={{ width: "100%" }} aria-label="spanning table">
                    <TableHead>
                      <TableRow>
                        <CustomTableCell>Name</CustomTableCell>
                        <CustomTableCell align="right">
                          Quantity
                        </CustomTableCell>
                        <CustomTableCell align="right">Amount</CustomTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {itemData.map((item, i) => (
                        <TableRow key={i}>
                          <CustomTableDataCell
                            isshowborder={i === itemData.length - 1}
                          >
                            {item.name}
                          </CustomTableDataCell>
                          <CustomTableDataCell
                            isshowborder={i === itemData.length - 1}
                            align="right"
                          >
                            <Box
                              sx={{ display: "flex", justifyContent: "end" }}
                            >
                              <Incrementer
                                sx={{ alignSelf: "end" }}
                                itemName={item.name}
                                quantity={item.quantity}
                                updateQuantity={updateQuantity}
                              />
                            </Box>
                          </CustomTableDataCell>
                          <CustomTableDataCell
                            isshowborder={i === itemData.length - 1}
                            align="right"
                          >
                            <AmountTypography>
                              {item.quantity * item.sellingPrice}
                            </AmountTypography>
                          </CustomTableDataCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <CustomTableCell rowSpan={3} />
                        <CustomTableCell align="right">
                          <AmountTypography>
                            Total {!custDetails.gstno && "+ GST"}
                          </AmountTypography>
                        </CustomTableCell>
                        <CustomTableCell align="right">
                          <AmountTypography>
                            {getTotalAmount()}
                          </AmountTypography>
                        </CustomTableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </DetailContainer>
            ) : (
              <AddButtonWrapper>
                <AddButton
                  variant="contained"
                  bgcolor={"#FFFFFF"}
                  startIcon={<AddIcon />}
                  onClick={() => setOpenItemModal(true)}
                >
                  ADD
                </AddButton>
              </AddButtonWrapper>
            )}
          </CardContent>
        </CustomCard>
      )}
      {custDetails && itemData?.length > 0 && (
        <ButtonWrapper>
          <CancelButton onClick={handleCancelButton}>Cancel</CancelButton>
          <SubmitButton onClick={createInvoice}>Create</SubmitButton>
        </ButtonWrapper>
      )}
      <SelectCustomerModal
        open={openCustomerModal}
        handleClose={() => setOpenCustomerModal(false)}
        handleSelect={handleCustomerSelect}
      />
      <SelectItemModal
        open={openItemModal}
        handleClose={() => setOpenItemModal(false)}
        handleSelect={handleItemSelect}
        itemData={itemData}
        // setItemData={setItemData}
        // updateQuantity={updateQuantity}
      />
    </Wrapper>
  );
};

export default Billing;

const CustomCard = styled(Card)`
  width: 100%;
  background: #fafafa !important;
  border-radius: 4px;
  box-shadow: none !important;
  margin-bottom: 25px;
`;
const CardHeading = styled(Typography)`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
  padding: 16px 16px 0;
`;
const AddButtonWrapper = styled(Box)`
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  height: calc(100% - 60px);
`;
const DetailContainer = styled(Box)`
  display: flex;
  gap: 17px;
  flex-direction: column;
  padding: 32px 0 0 25px;
`;
const TextWrapper = styled(Box)`
  display: flex;
`;
const CustomTableCell = styled(TableCell)`
  border: none !important;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const CustomTableDataCell = styled(TableCell)`
  border-bottom: ${(prop) =>
    prop.isshowborder ? "1px solid #BCBCBC" : "none"}!important;
  padding-bottom: ${(prop) => (prop.isshowborder ? "65px " : "0")}!important;
  color: #000;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const AmountTypography = styled(Typography)`
  color: #000;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonWrapper = styled(Box)`
  margin-top: 46px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 17px;
`;
