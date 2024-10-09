import mongoose from "mongoose";

const employeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,

    required: true,
  },
  phone: {
    type: Number,
    required,
  },
  adress: {
    type: String,
    required,
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const empleoyer = mongoose.model("empleoyer", employeSchema);

export default empleoyer;
