import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
  location: {
    type: String,
    default: "-",
  },
  bio: {
    type: String,
    default: "-",
  },
  job: String,
  username: {
    type: String,
    default: "-",
  },
});
const customer = mongoose.model("customer", customerSchema);

export default customer;
