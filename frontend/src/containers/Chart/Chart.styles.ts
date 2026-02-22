import { styled } from "@mui/material";
import { LineChart as MuiLineChart } from "@mui/x-charts";

export const StyledLineChart = styled(MuiLineChart)(
    ({
        theme: {
            typography: { pxToRem },
            spacing,
        },
    }) => ({
        height: pxToRem(300),
        width: "90vw",
        marginTop: spacing(10),
    })
);
