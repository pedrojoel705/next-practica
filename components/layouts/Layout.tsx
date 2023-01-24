import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from '../ui';


interface Props {
    title?: string
    children?: ReactNode
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>

            <Head>
                <title>{title || "Pokemos App"}</title>
                <meta name="author" content="Pedro Fermin"></meta>
                <meta name="description" content={`Informacion sobre el Pokemon ${title}`}></meta>
                <meta name="keywords" content={`${title}, pokemon, pokedex, pikachu`}></meta>
            </Head>

            <Navbar />

            <main style={{ padding: '20px 20px' }}>

                {children}

            </main>
        </>
    )
}

