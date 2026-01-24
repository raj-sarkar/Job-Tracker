import { Card, type CardItem } from "@components/Card";
import { Typography } from "@components/Typography";
import { Chart } from "@containers/Chart";
import { Stack as MuiStack, useTheme, useMediaQuery } from "@mui/material";
import { useGetJobsQuery } from "@services";

export const Home = () => {
    const { data: jobs, isLoading, isFetching } = useGetJobsQuery();
    const theme = useTheme();
    const palette = theme.palette;
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    const cards: CardItem[] = [
        {
            id: "item-1",
            title: "Total",
            count: jobs?.length,
            color: palette.text.disabled,
        },
        {
            id: "item-2",
            title: "Applied",
            count: jobs?.filter((job) => job.status === "Applied").length,
            color: palette.warning.main,
        },
        {
            id: "item-3",
            title: "Interviews",
            count: jobs?.filter((job) => job.status === "Interview").length,
            color: palette.info.main,
        },
        {
            id: "item-4",
            title: "Offers",
            count: jobs?.filter((job) => job.status === "Offer").length,
            color: palette.success.main,
        },
    ];

    if (isLoading || isFetching) return <>Loading...</>;

    return (
        <MuiStack alignItems="center">
            <Typography variant={isDesktop ? "h4" : "h6"}>
                Job Application Dashboard
            </Typography>
            <MuiStack direction="row" gap={isDesktop ? 5 : 2} mt={5}>
                {cards.map((card) => (
                    <Card key={card.id} cardItem={card} isDesktop={isDesktop} />
                ))}
            </MuiStack>
            <Chart jobs={jobs ?? []} />
        </MuiStack>
    );
};
