import { Button } from "@components/Button";
import { Table, type TableColumnDef } from "@components/Table";
import { Typography } from "@components/Typography";
import { Icon } from "@components/Icon";
import type { Job, JobStatus } from "@models";
import {
    Stack as MuiStack,
    Chip as MuiChip,
    TableContainer as MuiTableContainer,
    Paper as MuiPaper,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useGetJobsQuery } from "@services";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export const Applications = () => {
    const { data: jobs, isLoading, isFetching } = useGetJobsQuery();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    const stausColor: Record<JobStatus, string> = {
        Applied: theme.palette.info.main,
        Interview: theme.palette.warning.main,
        Offer: theme.palette.success.main,
        Rejected: theme.palette.error.main,
    };

    const columnDef: TableColumnDef<Job>[] = [
        {
            columnName: "Company",
            rowRenderer: (value) => (
                <Typography variant={isDesktop ? "h6" : "body2"}>
                    {value.company}
                </Typography>
            ),
        },
        {
            columnName: "Role",
            rowRenderer: (value) => (
                <Typography variant={isDesktop ? "h6" : "body2"}>
                    {value.role}
                </Typography>
            ),
        },
        {
            columnName: "Applied Date",
            rowRenderer: (value) => (
                <Typography variant={isDesktop ? "h6" : "body2"}>
                    {new Date(value.appliedDate).toLocaleDateString()}
                </Typography>
            ),
        },
        {
            columnName: "Status",
            rowRenderer: (value) => (
                <MuiChip
                    label={value.status}
                    sx={{
                        bgcolor: stausColor[value.status],
                        color: theme.palette.background.default,
                        width: "100%",
                        [theme.breakpoints.up("xl")]: {
                            width: "60%",
                        },
                    }}
                />
            ),
        },
        {
            columnName: "Action",
            rowRenderer: () => (
                <MuiStack direction="row" gap={2}>
                    <Button
                        onClick={() => {}}
                        backgroundColor={theme.palette.info.light}
                    >
                        <Icon
                            icon={EditIcon}
                            iconColor={theme.palette.background.default}
                        />
                    </Button>
                    <Button
                        onClick={() => {}}
                        backgroundColor={theme.palette.error.light}
                    >
                        <Icon
                            icon={DeleteIcon}
                            iconColor={theme.palette.background.default}
                        />
                    </Button>
                </MuiStack>
            ),
        },
    ];

    if (isLoading || isFetching) return <>Loading applications container...</>;

    return (
        <MuiStack gap={2}>
            <Typography variant={isDesktop ? "h4" : "h6"}>
                All Job Applications
            </Typography>
            <Button backgroundColor={theme.palette.success.light}>
                <MuiStack direction="row" gap={1}>
                    <Icon icon={AddIcon} iconColor="background.default" />
                    <Typography
                        variant={isDesktop ? "subtitle1" : "body2"}
                        color="background.default"
                    >
                        Add Job
                    </Typography>
                </MuiStack>
            </Button>
            <MuiTableContainer
                component={MuiPaper}
                variant="outlined"
                sx={{ width: "90vw", maxHeight: 700 }}
            >
                <Table
                    columnDef={columnDef}
                    data={jobs ?? []}
                    isLoading={isLoading || isFetching}
                    nullText="No Applications yet"
                />
            </MuiTableContainer>
        </MuiStack>
    );
};
