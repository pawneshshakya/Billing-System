import React, { useEffect, useState } from "react";
import Wrapper from "../common/Wrapper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { SubmitButton } from "../../commonStyles";
import { useNavigate } from "react-router-dom";
import { getInvoiceList, searchInvoice } from "../../api/implementation";

const CustomTableCell = styled(TableCell)`
  color: #fff;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 26px 16px;
`;
const CustomTableDataCell = styled(TableCell)`
  padding: 53px 16px !important;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Dashboard = () => {
  const navigate = useNavigate();
  const [invoiceList, setInvoiceList] = useState([]);
  const [filteredInvoiceList, setFilteredInvoiceList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    let data = await getInvoiceList();
    setInvoiceList(data || []);
    setFilteredInvoiceList(data || []);
  };
  const handleChange = async (event) => {
    // console.log(event?.target?.value);
    const value = event?.target?.value;
    const regex = new RegExp(value, "i");
    if (value !== "")
      setFilteredInvoiceList(
        invoiceList.filter((invoice) => regex.test(invoice.invoiceId))
      );
    else setFilteredInvoiceList(invoiceList);
    // if (value !== "") {
    //   let data = await searchInvoice(value);
    //   setInvoiceList(data || []);
    // } else getList();
  };
  return (
    <Wrapper>
      <Box
        sx={{
          width: "612px",
          height: " 68px",
          marginBottom: "61px",
        }}
      >
        <TextField
          fullWidth
          label="Search by Invoice ID"
          id="fullWidth"
          onChange={handleChange}
        />
      </Box>
      <TableContainer>
        <Table sx={{ width: "100%" }} aria-label="spanning table">
          <TableHead>
            <TableRow sx={{ background: "#262562" }}>
              <CustomTableCell>Invoice ID</CustomTableCell>
              <CustomTableCell>Customer name</CustomTableCell>
              <CustomTableCell>Item name (s)</CustomTableCell>
              <CustomTableCell>Amount</CustomTableCell>
              <CustomTableCell></CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvoiceList?.map((invoice, i) => (
              <TableRow key={i}>
                <CustomTableDataCell>{invoice.invoiceId}</CustomTableDataCell>
                <CustomTableDataCell>
                  {invoice.customerName}
                </CustomTableDataCell>
                <CustomTableDataCell>
                  {invoice.items?.join(",")}
                </CustomTableDataCell>
                <CustomTableDataCell>{invoice.totalAmount}</CustomTableDataCell>
                <CustomTableDataCell>
                  <SubmitButton
                    onClick={() =>
                      navigate(`/billingDetails/${invoice.invoiceId}`)
                    }
                  >
                    View
                  </SubmitButton>
                </CustomTableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default Dashboard;
