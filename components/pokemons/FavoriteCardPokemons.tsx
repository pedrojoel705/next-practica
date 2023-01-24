import { Card, Grid } from '@nextui-org/react';
import { FC } from 'react';
import { useRouter } from 'next/router';


interface Props {
    pokemonId: number
}

export const FavoriteCardPokemons: FC<Props> = ({ pokemonId }) => {

    const router = useRouter()

    const navigationRouter = () => {
        return router.push(`/pokemon/${pokemonId}`)


    }


    return (

        <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={navigationRouter} >
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                    width={"100%"}
                    height={140}
                />
            </Card>


        </Grid >


    )
}
