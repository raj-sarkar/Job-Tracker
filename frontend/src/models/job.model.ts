export type JobStatus = "Applied" | "Interview" | "Offer" | "Rejected";

export interface Job {
    _id: string;
    company: string;
    role: string;
    status: JobStatus;
    userId: string;
    appliedDate: string;
    createdAt: string;
    updatedAt: string;
}
