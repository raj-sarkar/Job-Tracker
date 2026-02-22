import { useTheme, Typography as MuiTypography } from "@mui/material";
import type { TypographyProps as MuiTypographyProps } from "@mui/material";
/**
 * Typography wrapper with optional line clamping.
 * @param props - Component props
 * @returns JSX element
 */
export const Typography = (props: MuiTypographyProps) => {
    const { color, ...rest } = props;

    const theme = useTheme();

    return (
        <MuiTypography
            color={color ? color : theme.palette.grey[900]}
            {...rest}
        />
    );
};
