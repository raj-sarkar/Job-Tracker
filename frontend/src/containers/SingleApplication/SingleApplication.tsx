import { Typography } from "@components/Typography";
import {
    Stack as MuiStack,
    Box as MuiBox,
    useMediaQuery,
    useTheme,
} from "@mui/material";

export const SingleApplication = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <MuiBox>
            <Typography>{}</Typography>
            <MuiStack direction={isDesktop ? "row" : "column"}></MuiStack>
        </MuiBox>
    );
};
