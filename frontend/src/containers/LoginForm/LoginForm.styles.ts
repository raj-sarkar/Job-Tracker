import { Box as MuiBox, styled } from "@mui/material";
import { Button } from "@components/Button";

export const StyledBox = styled(MuiBox)(
    ({
        theme: {
            palette,
            typography: { pxToRem },
            spacing,
        },
    }) => ({
        width: "90vw",
        margin: "auto",
        marginTop: pxToRem(100),
        padding: spacing(2, 0),
        maxWidth: pxToRem(600),
        borderRadius: pxToRem(10),
        border: `${pxToRem(1)} solid ${palette.grey[500]}`,
        display: "flex",
        flexDirection: "column",
        gap: pxToRem(16),
        alignItems: "center",
    })
);

export const StyledButton = styled(Button)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        width: "50%",
        height: pxToRem(40),
    })
);
