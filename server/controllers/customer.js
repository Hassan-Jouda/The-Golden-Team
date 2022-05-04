import customer from "../models/customer.js";

export const getCustomer = (req, res) => {
  customer
    .find()
    .then((customer) => {
      return res.json(customer);
    })
    .catch((err) => res.status(400).json(err.message));
};

export const addCustomer = (req, res) => {
  const newCustomer = new customer(req.body);
  newCustomer
    .save()
    .then((customer) => {
      return res.json(customer);
    })
    .catch((err) => res.status(400).json(err.message));
};
