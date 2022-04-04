import { Raitingprops } from "./Raiting.props";
import styles from "./Raiting.module.css";
import cn from "classnames";
import Star from "./star.svg";
import { useState, useEffect } from "react";

export const Raiting = ({
    isEditable = false,
    raiting,
    setRaiting,
    className,
    ...props
}: Raitingprops): JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    useEffect(() => {
        constructRaiting(raiting);
    }, [raiting]);

    const constructRaiting = (currentRaiting: number) => {
        const updateArray = raitingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, className, {
                        [styles.filled]: i < currentRaiting,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(raiting)}
                    onClick={() => onClick(i + 1)}
                >
                    <Star tabIndex={isEditable ? 0 : -1} />
                </span>
            );
        });
        setRaitingArray(updateArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRaiting(i);
    };
    const onClick = (i: number) => {
        if (!isEditable || !setRaiting) {
            return;
        }
        setRaiting(i);
    };

    return (
        <div>
            {raitingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};
