const BillingModel = require("../models/billing.model");
const CustomerModel = require("../models/customer.model");
const ItemModel = require("../models/item.model");
const {
  generateInvoiceId,
  generateCustomerId,
  generateItemId,
} = require("../utils/utils");

const saveCustomer = async (body) => {
  try {
    if (body.hasOwnProperty("id")) {
      await CustomerModel.updateOne(
        { id: body.id },
        {
          $set: body,
        }
      );
    } else {
      await CustomerModel({
        ...body,
        id: await generateCustomerId(),
      }).save();
    }
    return { msg: "success" };
  } catch (error) {
    console.log("saveCustomer", error);
  }
};
const getCustomersList = async () => {
  try {
    const customers = await CustomerModel.find({}).lean();
    return customers;
  } catch (error) {
    console.log("getCustomerList", error);
  }
};
const getCustomer = async ({ id }) => {
  try {
    const customers = await CustomerModel.findOne({ id }).lean();
    return customers;
  } catch (error) {
    console.log("getCustomer", error);
  }
};
const saveItem = async (body) => {
  try {
    if (body.hasOwnProperty("id")) {
      await ItemModel.updateOne(
        { id: body.id },
        {
          $set: body,
        }
      );
    } else {
      await ItemModel({
        ...body,
        id: await generateItemId(),
      }).save();
    }
    return { msg: "success" };
  } catch (error) {
    console.log("saveItem", error);
  }
};
const getItemsList = async () => {
  try {
    const items = await ItemModel.find({}).lean();
    return items;
  } catch (error) {
    console.log("getItemList", error);
  }
};
const getItem = async ({ id }) => {
  try {
    const items = await ItemModel.findOne({ id }).lean();
    return items;
  } catch (error) {
    console.log("getItemList", error);
  }
};
const generateInvoice = async (body) => {
  try {
    const invoice = await BillingModel({
      ...body,
      invoiceId: await generateInvoiceId(),
    }).save();
    return { msg: "success", invoiceId: invoice.invoiceId };
  } catch (error) {
    console.log("generateInvoice", error);
  }
};
const getInvoice = async ({ id }) => {
  try {
    const invoice = await BillingModel.findOne({ invoiceId: id }).lean();
    const customerData = await CustomerModel.findOne({
      id: invoice.customerId,
    });
    const itemList = invoice.items.map((item) => item.itemId);
    const itemData = await ItemModel.find({ id: { $in: itemList } });
    return { ...invoice, customerData, itemData };
  } catch (error) {
    console.log("getInvoice", error);
  }
};
const getInvoiceList = async () => {
  try {
    let data = [];
    const invoiceList = await BillingModel.find({}).lean();
    for (let i = 0; i < invoiceList.length; i++) {
      const invoice = invoiceList[i];
      const customerData = await CustomerModel.findOne({
        id: invoice.customerId,
      });
      const itemList = invoice.items.map((item) => item.itemId);
      const itemData = await ItemModel.find({ id: { $in: itemList } });
      data.push({
        invoiceId: invoice.invoiceId,
        totalAmount: invoice.totalAmount,
        customerName: customerData.name,
        items: itemData.map((item) => item.name),
      });
    }
    return data;
  } catch (error) {
    console.log("getInvoiceList", error);
  }
};

module.exports = {
  saveCustomer,
  getCustomersList,
  getCustomer,
  saveItem,
  getItemsList,
  getItem,
  generateInvoice,
  getInvoice,
  getInvoiceList,
};
