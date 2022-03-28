import { Htag, Button, P } from '../components'

export default function Home(): JSX.Element {
    return (
        <div>
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
        </div>
    )
}
