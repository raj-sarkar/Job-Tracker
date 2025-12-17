import Job from "../models/job.model.js";

export const createJob = async (req, res) => {
    try {
        const { company, role, status, appliedDate } = req.body;

        if (!company) {
            return res
                .status(400)
                .json({ message: "Company name is required" });
        }

        const job = await Job.create({
            userId: req.user._id,
            company,
            role,
            status,
            appliedDate,
        });

        return res.status(201).json(job);
    } catch (error) {
        console.error(
            "Error creating job application controller:",
            error.message
        );
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({ userId: req.user._id });

        return res.status(201).json(jobs);
    } catch (error) {
        console.error(
            "Error getting job applications controller:",
            error.message
        );
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateJob = async (req, res) => {
    try {
        const { company, role, status, appliedDate } = req.body;
        const { jobId } = req.params;

        if (!company) {
            return res
                .status(400)
                .json({ message: "Company name is required" });
        }

        const job = await Job.findByIdAndUpdate(
            jobId,
            {
                company,
                role,
                status,
                appliedDate,
            },
            { new: true }
        );

        return res.status(200).json(job);
    } catch (error) {
        console.error(
            "Error updating job application controller:",
            error.message
        );
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const job = await Job.findById(jobId);

        if (!job) {
            return res
                .status(404)
                .json({ message: "Job application not found" });
        }

        await Job.deleteOne(job);
        return res.status(200).json(job);
    } catch (error) {
        console.error(
            "Error deleting job application controller:",
            error.message
        );
        return res.status(500).json({ message: "Internal server error" });
    }
};
