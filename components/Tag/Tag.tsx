import { Tagprops } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
    size = "m",
    children,
    color,
    href,
    className,
    ...props
}: Tagprops): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size === "s",
                [styles.m]: size === "m",
                [styles.ghost]: color === "ghost",
                [styles.primary]: color === "primary",
                [styles.green]: color === "green",
                [styles.gray]: color === "gray",
                [styles.red]: color === "red",
            })}
            {...props}
        >
            {href ? <a href="${href}">${children}</a> : <>{children}</>}
        </div>
    );
};
