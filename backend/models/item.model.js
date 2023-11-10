const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: {
    type: String,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const ItemModel = mongoose.model("item", ItemSchema);

module.exports = ItemModel;
