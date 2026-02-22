import { StyledLineChart } from "./Chart.styles";
import type { chartProps } from "./Chart.types";
import { normalizeDate } from "@utils";

export const Chart = (props: chartProps) => {
    const { jobs } = props;
    const jobsPerDay = jobs.reduce<Record<string, number>>((acc, job) => {
        const date = normalizeDate(job.appliedDate);
        acc[date] = (acc[date] || 0) + 1;
        return acc;
    }, {});

    const last30Days = Array.from({ length: 30 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (29 - i));
        return normalizeDate(d);
    });

    const chartData = last30Days.map((date) => ({
        date,
        count: jobsPerDay[date] ?? 0,
    }));

    const xAxisData = chartData.map((item) => item.date);
    const seriesData = chartData.map((item) => item.count);

    return (
        <StyledLineChart
            aria-label="Job applications over time"
            hideLegend
            grid={{ horizontal: true }}
            xAxis={[
                {
                    data: xAxisData,
                    scaleType: "band",
                    disableTicks: true,
                },
            ]}
            yAxis={[
                {
                    min: 0,
                    max: Math.max(...seriesData) + 3,
                    tickMinStep: 1,
                    disableTicks: true,
                    label: "Applications",
                    disableLine: true,
                },
            ]}
            series={[
                {
                    data: seriesData,
                    label: "Applications",
                    showMark: false,
                    area: true,
                },
            ]}
        />
    );
};
