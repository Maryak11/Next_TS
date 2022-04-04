import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Tagprops
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: "s" | "m";
    color: "ghost" | "gray" | "green" | "primary" | "red";
    href?: string;
}
