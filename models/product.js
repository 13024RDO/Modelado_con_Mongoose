import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required,
  },
  name: {
    type: String,
    required,
  },
  description: {
    type: String,
    required,
  },
  price: {
    type: Number,
    required,
  },
  stock: {
    type: Number,
    required,
  },
});

const product = mongoose.model("product", productSchema);
export default product;
