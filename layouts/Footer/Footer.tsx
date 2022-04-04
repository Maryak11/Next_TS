import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <p className={styles.footerItem}>
                OwlTop © 2020 - 2021 Все права защищены
            </p>
            <p className={styles.footerItem}>Пользовательское соглашение</p>
            <p className={styles.footerItem}>Политика конфиденциальности</p>
        </footer>
    );
};
