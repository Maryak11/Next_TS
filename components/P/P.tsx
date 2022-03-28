import { Pprops } from './P.props'
import styles from './P.module.css'
import cn from 'classnames'

export const P = ({ size = 'medium', children }: Pprops): JSX.Element => {
    return (
        <p
            className={cn({
                [styles.small]: size === 'small',
                [styles.medium]: size === 'medium',
                [styles.big]: size === 'big',
            })}
        >
            {children}
        </p>
    )
}
