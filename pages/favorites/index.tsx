
import { useEffect, useState } from 'react';


import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui';
import { localFavorite } from '../../utils';
import { FavoritePokemons } from '../../components/pokemons';

const FavoritePage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {

        setFavoritePokemons(localFavorite.pokemons())

    }, [])




    return (
        <Layout title='Pokemons-Favoritos'>


            {
                favoritePokemons.length === 0
                    ?
                    (<NoFavorites />)
                    :
                    (<FavoritePokemons pokemons={favoritePokemons} />)
            }



        </Layout>
    )
}

export default FavoritePage