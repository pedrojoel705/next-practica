import Image from "next/image";
import NextLink from 'next/link'
import { Spacer, Text, useTheme } from "@nextui-org/react"





export const Navbar = () => {

    const { theme } = useTheme()

    // console.log(theme);
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray900.value,
        }}>

            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                alt='icono app'
                width={100}
                height={100}
                priority
            />
            <NextLink href="/" >
                <Text color="white" h2>P</Text>
            </NextLink>
            <NextLink href="/" >
                <Text color="white" h3>okemon</Text>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <Text color="white" h4>Favoritos</Text>
            </NextLink>


        </div >
    )
}
