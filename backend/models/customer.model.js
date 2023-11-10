const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  panCard: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  gstno: {
    type: String,
    unique: true,
    uppercase: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const CustomerModel = mongoose.model("customer", CustomerSchema);

module.exports = CustomerModel;
