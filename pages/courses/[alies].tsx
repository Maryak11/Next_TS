import { withLayout } from "../../layouts/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "../../interfaces/menu.interface";

function Coures({ menu }: CouresProps): JSX.Element {
    return <></>;
}

export default withLayout(Coures);

export const getStaticProps: GetStaticProps<CouresProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<CouresProps[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
        { firstCategory }
    );
    const { data: page } = await axios.post<CouresProps[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
        { firstCategory }
    );
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

export interface CouresProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
