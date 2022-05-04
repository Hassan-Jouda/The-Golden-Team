import worker from "../models/worker.js";

export const getWorker = (req, res) => {
  worker
    .find()
    .then((worker) => {
      return res.json(worker);
    })
    .catch((err) => res.status(400).json(err.message));
};

export const addWorker = (req, res) => {
  const newWorker = new worker(req.body);
  newWorker
    .save()
    .then((worker) => {
      return res.json(worker);
    })
    .catch((err) => res.status(400).json(err.message));
};
