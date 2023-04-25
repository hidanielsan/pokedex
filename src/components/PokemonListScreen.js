import PokemonCard from './PokemonCard';
import { useContext } from "react";
import { DataContext } from '../context/DataProvider';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function PokemonListScreen() {

    const {
        resultFilter,
        maxPokeShow, setMaxPokeShow,
        sliced,
        hasMore, setHasMore,
        generationTitle
    } = useContext(DataContext)


    const showMorePokemon = () => {
        setMaxPokeShow(maxPokeShow + 6)
        if (resultFilter <= sliced) {
            setHasMore(false)
        }
    }

    return (
        <div className="container" style={{ marginTop: "185px" }}>
            <h1 className='text-white mb-4 px-2'>{generationTitle}</h1>

            <InfiniteScroll
                dataLength={sliced.length}
                next={showMorePokemon}
                hasMore={hasMore}
                loader={<p className='text-white h2 text-center'>Loading...</p>}
            >

                {sliced.map(pokemon => (
                    <PokemonCard
                        id={pokemon.id}
                        name={pokemon.name}
                        url={pokemon.url}
                        fav={pokemon.fav}
                        key={pokemon.id}
                    />
                ))
                }

            </InfiniteScroll>
        </div>
    );
}





