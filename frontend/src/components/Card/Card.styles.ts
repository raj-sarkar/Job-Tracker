import { Stack as MuiStack, styled } from "@mui/material";
import type { StyledStackProps } from "./Card.types";

const customProps: PropertyKey[] = ["color"];

export const StyledStack = styled(MuiStack, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledStackProps>(
    ({
        theme: {
            palette,
            typography: { pxToRem },
        },
        color,
    }) => ({
        backgroundImage: `linear-gradient(to bottom,${palette.grey[100]} ,${color})`,
        padding: pxToRem(10),
        borderRadius: pxToRem(10),
    })
);
