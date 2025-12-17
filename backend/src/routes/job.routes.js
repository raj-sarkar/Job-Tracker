import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {
    createJob,
    deleteJob,
    getJobs,
    updateJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/", protectRoute, createJob);
router.get("/", protectRoute, getJobs);
router.put("/:jobId", protectRoute, updateJob);
router.delete("/:jobId", protectRoute, deleteJob);

export default router;
