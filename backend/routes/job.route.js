// import express from "express";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import { getAdminJobs, getAllJobs, getJobById, postJob, deleteJob } from "../controllers/job.controller.js";

// const router = express.Router();

// router.route("/post").post(isAuthenticated, postJob);
// router.route("/get").get(isAuthenticated, getAllJobs);
// router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
// router.route("/get/:id").get(isAuthenticated, getJobById);

// // New route for deleting a job
// router.route("/delete/:id").delete(isAuthenticated, deleteJob);

// export default router;


import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob, deleteJob } from "../controllers/job.controller.js";

const router = express.Router();

// Post a new job (protected)
router.route("/post").post(isAuthenticated, postJob);

// Fetch all jobs (public)
router.route("/get").get(getAllJobs);

// Fetch admin jobs (protected)
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);

// Fetch a specific job by ID (public)
router.route("/get/:id").get(getJobById);

// Apply to a job (protected)
router.route("/apply/:id").post(isAuthenticated, (req, res) => {
  // Placeholder for apply logic; will be implemented in job_controller.js
  res.status(200).json({ message: "Application submitted" });
});

// Delete a job (protected)
router.route("/delete/:id").delete(isAuthenticated, deleteJob);

export default router;