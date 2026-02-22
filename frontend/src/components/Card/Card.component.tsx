import { StyledStack } from "./Card.styles";
import type { CardProps } from "./Card.types";
import {
    Typography as MuiTypography,
    Divider as MuiDivider,
} from "@mui/material";

export const Card = (props: CardProps) => {
    const { cardItem, isDesktop } = props;

    return (
        <StyledStack color={cardItem.color} key={cardItem.id}>
            <MuiTypography variant={isDesktop ? "h4" : "h6"} textAlign="center">
                {cardItem.count}
            </MuiTypography>
            <MuiDivider />
            <MuiTypography variant={isDesktop ? "h6" : "caption"}>
                {cardItem.title}
            </MuiTypography>
        </StyledStack>
    );
};
