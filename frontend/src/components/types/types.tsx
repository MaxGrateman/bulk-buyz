export interface IReview {
    id: number;
    date: string;
    "info": string;
}

export interface IVariant {
    id: number;
    img: string;
    price: number;
    variant: string;
    value: string;
}

export interface ICard {
    id: number;
    name: string;
    img: string;
    variants: IVariant[];
    description: string;
}

export interface window {
    onYouTubeIframeAPIReady?: () => void;
}

