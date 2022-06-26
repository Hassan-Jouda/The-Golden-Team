import express from "express";
import { getWorker } from "../controllers/worker.js";
import { addWorker } from "../controllers/worker.js";

const router = express.Router();

router.get("/", getWorker);
router.post("/addWorker", addWorker);

export default router;
