import mongoose from "mongoose";

const workerSchema = mongoose.Schema({
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
  profession: {
    type: String,
    default: "-",
  },
  college_degree: {
    type: String,
    default: "-",
  },
  job: String,
  username: {
    type: String,
    default: "-",
  },
});

const worker = mongoose.model("worker", workerSchema);

export default worker;
