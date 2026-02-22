import { styled, Box as MuiBox } from "@mui/material";

export const StyledBox = styled(MuiBox)(
    ({
        theme: {
            palette,
            typography: { pxToRem },
        },
    }) => ({
        position: "sticky",
        top: 0,
        backgroundColor: palette.primary.main,
        zIndex: 100,
        height: pxToRem(70),
    })
);
