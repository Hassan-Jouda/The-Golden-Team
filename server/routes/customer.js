import express from "express";
import { getCustomer } from "../controllers/customer.js";
import { addCustomer } from "../controllers/customer.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router is working");
});

router.get("/", getCustomer);
router.post("/addCustomer", addCustomer);

export default router;
