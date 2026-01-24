import { api } from "@api";
import type { Job } from "@models";

const jobApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query<Job[], void>({
            query: () => ({
                url: "job",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetJobsQuery } = jobApi;
