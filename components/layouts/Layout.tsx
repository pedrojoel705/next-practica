import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
    title?: string;
    children?: ReactNode;
}


const origin= (typeof window === 'undefined')?'':window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

//console.log(origin)

    return (
        <>
            <Head>
                <title>{title || "Pokemos App"}</title>
                <meta name="author" content="Pedro Fermin"></meta>
                <meta name="description"  content={`Informacion sobre el Pokemon ${title}`}></meta>
                <meta name="keywords"   content={`${title}, pokemon, pokedex, pikachu`}></meta>

                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`}/>
                <meta property="og:image" content={`${origin}/img/banner.png`}/>
            </Head>

            <Navbar />

            <main style={{ padding: "20px 20px" }}>{children}</main>
        </>
    );
};
