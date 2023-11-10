const BillingModel = require("../models/billing.model");
const CustomerModel = require("../models/customer.model");
const ItemModel = require("../models/item.model");

const generateCustomerId = async () => {
  const lastDocument = await CustomerModel.findOne(
    {},
    {},
    { sort: { id: -1 } }
  );

  if (!lastDocument) {
    return "C0001";
  }
  const lastId = lastDocument.id;
  const numericPart = parseInt(lastId.substring(1), 10); // Extract the numeric part and convert it to an integer
  const nextNumericPart = numericPart + 1;

  // Pad the numeric part with leading zeros to match the desired format
  const nextCustomerId = "C" + nextNumericPart.toString().padStart(4, "0");
  return nextCustomerId;
};
const generateItemId = async () => {
  const lastDocument = await ItemModel.findOne({}, {}, { sort: { id: -1 } });

  if (!lastDocument) {
    return "I0001";
  }

  const lastId = lastDocument.id;
  const numericPart = parseInt(lastId.substring(1), 10); // Extract the numeric part and convert it to an integer
  const nextNumericPart = numericPart + 1;

  // Pad the numeric part with leading zeros to match the desired format
  const nextItemId = "I" + nextNumericPart.toString().padStart(4, "0");
  return nextItemId;
};

const generateInvoiceId = async () => {
  const invoiceId =
    "INVC" +
    Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
  const data = await BillingModel.findOne({ invoiceId }).lean();
  if (!data) return invoiceId;
  await generateInvoiceId();
};

module.exports = { generateCustomerId, generateItemId, generateInvoiceId };
