const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: `Please enter a name for your store.`,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
