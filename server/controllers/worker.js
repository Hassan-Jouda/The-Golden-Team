import worker from "../models/worker.js";

export const getWorker = async (req, res) => {
  try {
    const data = await worker.find();
    res.json(data);
  } catch (error) {
    res.send(error.message);
  }
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
