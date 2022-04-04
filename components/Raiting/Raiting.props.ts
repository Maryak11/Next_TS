import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Raitingprops
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    raiting: number;
    setRaiting?: (rating: number) => void;
}
