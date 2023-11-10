const mongoose = require("mongoose");

const BillingSchema = new mongoose.Schema({
  invoiceId: {
    type: String,
    required: true,
    unique: true,
  },
  customerId: {
    type: String,
    ref: "customer",
  },
  items: [
    {
      itemId: { type: String, ref: "item" },
      quantity: { type: Number, require: true },
      amount: { type: Number, require: true },
    },
  ],
  totalAmount: {
    type: Number,
    require: true,
  },
});

const BillingModel = mongoose.model("billing", BillingSchema);

module.exports = BillingModel;
