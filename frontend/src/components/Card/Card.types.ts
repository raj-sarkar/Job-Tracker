export interface StyledStackProps {
    color: string;
}

export interface CardItem extends StyledStackProps {
    id: string;
    title: string;
    count?: number;
}

export interface CardProps {
    cardItem: CardItem;
    isDesktop: boolean;
}
