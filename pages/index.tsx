import { Htag, Button, P, Tag, Raiting } from "../components";
import { useState } from "react";
import { withLayout } from "../layouts/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
    const [raiting, setRaiting] = useState<number>(2);

    return (
        <>
            <Htag tag="h1">Привет</Htag>
            <Button appearance="primary" arrow="down">
                Кнопка
            </Button>

            <Button appearance="ghost" arrow="down">
                Кнопка
            </Button>

            <P>Привет</P>
            <P size="big">Привет</P>
            <P size="small">Привет</P>

            <Tag size="s" color="primary">
                Привет
            </Tag>

            <Raiting
                raiting={raiting}
                isEditable={true}
                setRaiting={setRaiting}
            />

            <Tag size="s" color="green">
                Ghbdtn
            </Tag>
            <Tag size="m" color="gray">
                Привет
            </Tag>
            <Tag size="m" color="gray">
                hh.ru
            </Tag>
            <ul>
                {menu.map((item, i) => (
                    <li key={item._id.secondCategory}>
                        {item._id.secondCategory}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(
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

export interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
