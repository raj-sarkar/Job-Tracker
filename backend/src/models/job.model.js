import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            enum: ["Applied", "Interview", "Offer", "Rejected"],
            default: "Applied",
        },
        appliedDate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const Job = mongoose.model("job", jobSchema);

export default Job;
