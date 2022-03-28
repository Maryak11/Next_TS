import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface Pprops
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    children: ReactNode
    size?: 'small' | 'medium' | 'big'
}
