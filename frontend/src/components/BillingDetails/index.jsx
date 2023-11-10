import React, { useEffect, useState } from "react";
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
import { getInvoice } from "../../api/implementation";
import { useParams } from "react-router-dom";
import { LabelTypography, ValueTypography } from "../../commonStyles";
const BillingDetails = () => {
  const query = useParams();
  const [invoiceData, setInvoiceData] = useState(null);
  useEffect(() => {
    if (query.id) getInvoiceData(query.id);
  }, [query]);

  const getInvoiceData = async (id) => {
    const data = await getInvoice(id);
    setInvoiceData(data);
  };
  return (
    <Wrapper>
      <CustomCard sx={{ marginBottom: 0 }}>
        <CardContent
          sx={{
            height: "290px",
            padding: "0!important",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CardHeading>Customer Details</CardHeading>
            <CardHeading>Invoice Id: {invoiceData?.invoiceId}</CardHeading>
          </Box>
          <Divider />
          <DetailContainer>
            <TextWrapper>
              <LabelTypography>Name</LabelTypography>
              <ValueTypography>
                : {invoiceData?.customerData?.name}
              </ValueTypography>
            </TextWrapper>
            <TextWrapper>
              <LabelTypography>Address</LabelTypography>
              <ValueTypography>
                : {invoiceData?.customerData?.address}
              </ValueTypography>
            </TextWrapper>
            <TextWrapper>
              <LabelTypography>Pan Card</LabelTypography>
              <ValueTypography>
                : {invoiceData?.customerData?.panCard}
              </ValueTypography>
            </TextWrapper>
            <TextWrapper>
              <LabelTypography>GST Num</LabelTypography>
              <ValueTypography>
                : {invoiceData?.customerData?.gstno}
              </ValueTypography>
            </TextWrapper>
          </DetailContainer>
        </CardContent>
      </CustomCard>
      <CustomCard>
        <CardContent
          sx={{
            minHeight: "290px",
            padding: "0!important",
          }}
        >
          <CardHeading>Items</CardHeading>
          <Divider />
          <DetailContainer p={"0!important"}>
            <TableContainer>
              <Table sx={{ width: "100%" }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Name</CustomTableCell>
                    <CustomTableCell align="right">Quantity</CustomTableCell>
                    <CustomTableCell align="right">Amount</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoiceData?.itemData?.map((item, i) => (
                    <TableRow key={i}>
                      <CustomTableDataCell
                        isshowborder={i === invoiceData?.itemData?.length - 1}
                      >
                        {item.name}
                      </CustomTableDataCell>
                      <CustomTableDataCell
                        isshowborder={i === invoiceData?.itemData?.length - 1}
                        align="right"
                      >
                        {
                          invoiceData?.items?.find((a) => a.itemId === item.id)
                            ?.quantity
                        }
                      </CustomTableDataCell>
                      <CustomTableDataCell
                        isshowborder={i === invoiceData?.itemData?.length - 1}
                        align="right"
                      >
                        <AmountTypography>
                          {invoiceData?.items?.find((a) => a.itemId === item.id)
                            ?.quantity * item.sellingPrice}
                        </AmountTypography>
                      </CustomTableDataCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <CustomTableCell rowSpan={3} />
                    <CustomTableCell align="right">
                      <AmountTypography>
                        Total {!invoiceData?.customerData?.gstno && "+ GST"}
                      </AmountTypography>
                    </CustomTableCell>
                    <CustomTableCell align="right">
                      <AmountTypography>
                        {invoiceData?.totalAmount}
                      </AmountTypography>
                    </CustomTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </DetailContainer>
        </CardContent>
      </CustomCard>
    </Wrapper>
  );
};

export default BillingDetails;

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
