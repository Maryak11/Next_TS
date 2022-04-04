import { Htag, Button, P, Tag, Raiting } from "../components";
import { useEffect, useState } from "react";
import { withLayout } from "../layouts/Layout";

function Home(): JSX.Element {
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
                Привет
            </Tag>
            <Tag size="m" color="gray">
                Привет
            </Tag>
            <Tag size="m" color="gray">
                hh.ru
            </Tag>
        </>
    );
}

export default withLayout(Home);
