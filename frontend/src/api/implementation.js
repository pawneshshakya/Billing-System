import axios from "axios";
import {
  generateInvoiceUrl,
  getCustomerUrl,
  getCustomersListUrl,
  getInvoiceListUrl,
  getInvoiceUrl,
  getItemsListUrl,
  getItemUrl,
  saveCustomerUrl,
  saveItemUrl,
  searchInvoiceUrl,
} from "./endPoint";

export const saveCustomer = async (body) => {
  try {
    const res = await axios.post(saveCustomerUrl, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCustomersList = async () => {
  try {
    const res = await axios.get(getCustomersListUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCustomer = async (id) => {
  try {
    const res = await axios.get(`${getCustomerUrl}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveItem = async (body) => {
  try {
    const res = await axios.post(saveItemUrl, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getItemList = async () => {
  try {
    const res = await axios.get(getItemsListUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (id) => {
  try {
    const res = await axios.get(`${getItemUrl}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const generateInvoice = async (body) => {
  try {
    const res = await axios.post(generateInvoiceUrl, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getInvoice = async (id) => {
  try {
    const res = await axios.get(`${getInvoiceUrl}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getInvoiceList = async (id) => {
  try {
    const res = await axios.get(getInvoiceListUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const searchInvoice = async (payload) => {
  try {
    const res = await axios.get(searchInvoiceUrl, { params: payload });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
