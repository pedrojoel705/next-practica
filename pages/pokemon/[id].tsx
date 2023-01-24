import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { Layout } from "../../components/layouts"
import { Pokemon } from '../../interfaces/pokemons_full';
import { pokeApi } from '../../api';
import { localFavorite } from '../../utils';


interface Props {
    pokemon: Pokemon

}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorite, setIsInFavorite] = useState(localFavorite.existInFavorite(pokemon.id))


    const onToggleFavorite = () => {

        localFavorite.toggleFavorite(pokemon.id);
        setIsInFavorite(!isInFavorite)


    }


    //console.log(pokemon)

    return (
        <Layout title={pokemon.name.charAt(0).toLocaleUpperCase() + pokemon.name.slice(1)} >

            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4} >
                    <Card hoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.pgn'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>

                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button
                                color='gradient'
                                ghost={!isInFavorite}
                                onClick={onToggleFavorite}>
                                {isInFavorite ? ' En favorito' : 'Guardar en  favoritos'}

                            </Button>
                        </Card.Header>


                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction='row' display='flex'>

                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                            </Container>
                        </Card.Body>
                    </Card>

                </Grid>

            </Grid.Container>


        </Layout>




    )
}


// You should use getStaticPaths if you’re stati1ally pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

    console.log({ pokemons151 })

    return {
        paths:
            pokemons151.map(id => ({
                params: { id }
            }))
        ,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }

    //console.log(ctx.params);

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
    console.log(data.name);




    return {
        props: {
            pokemon: data

        },
    };
};




export default PokemonPage


