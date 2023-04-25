import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [pokemons, setPokemons] = useState([])
  const [pokemonsGen, setPokemonsGen] = useState(pokemons)
  const [generationTitle, setGenerationTitle] = useState("From 1st to 8th Generation")
  const [modal, setModal] = useState(false)
  const [dataModal, setDataModal] = useState(1)
  const [pokemonFiltered, setPokemonFiltered] = useState("")
  const [activeLoading, setActiveLoading] = useState(false)
  const [maxPokeShow, setMaxPokeShow] = useState(18)
  const [hasMore, setHasMore] = useState(true)

  let resultFilter = !pokemonFiltered ?
  pokemonsGen :
  pokemonsGen.filter(product => product.name.toLowerCase().includes(pokemonFiltered.toLowerCase()))

  let sliced = resultFilter.slice(0, maxPokeShow)

  const filterPokemon = (e) => {
    e.preventDefault();
    setPokemonFiltered(e.target.value)
    sliced = !e ?
      resultFilter.slice(0, maxPokeShow) :
      resultFilter.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonFiltered.toLowerCase())).slice(0, maxPokeShow)
  }

  
  const gen1 = 151
  const gen2 = 251
  const gen3 = 386
  const gen4 = 493
  const gen5 = 649
  const gen6 = 721
  const gen7 = 809
  const gen8 = 905
  const gen9 = 1008
  

  const specificGeneration = (e) => {
    if (e === '1') {
      setPokemonsGen(pokemons.slice(0, gen1))
      setGenerationTitle("1st Generation")
    } else if (e === '2') {
      setPokemonsGen(pokemons.slice(gen1, gen2))
      setGenerationTitle("2nd Generation")
    } else if (e === '3') {
      setPokemonsGen(pokemons.slice(gen2, gen3))
      setGenerationTitle("3rd Generation")
    } else if (e === '4') {
      setPokemonsGen(pokemons.slice(gen3, gen4))
      setGenerationTitle("4th Generation")
    } else if (e === '5') {
      setPokemonsGen(pokemons.slice(gen4, gen5))
      setGenerationTitle("5th Generation")
    } else if (e === '6') {
      setPokemonsGen(pokemons.slice(gen5, gen6))
      setGenerationTitle("6th Generation")
    } else if (e === '7') {
      setPokemonsGen(pokemons.slice(gen6, gen7))
      setGenerationTitle("7th Generation")
    } else if (e === '8') {
      setPokemonsGen(pokemons.slice(gen7, gen8))
      setGenerationTitle("8th Generation")
    } else{
      setPokemonsGen(pokemons)
      setGenerationTitle("From 1st to 8th Generation")
    }
  }


  useEffect(() => {
    async function pokemonApiTodos() {

      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`);
      const pokemonsFetch = data.results.map((pokemon, index) => ({
        ...pokemon,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        id: index + 1,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
        fav: false
      }));
      setPokemons(pokemonsFetch)
      setPokemonsGen(pokemonsFetch)
    }
    pokemonApiTodos()
  }, []);


  const generation = (e) => {

    if (e <= gen1) {
      return "Generation I"
    } else if (e > gen1 && e < gen2) {
      return "Generation II"
    } else if (e > gen2 && e < gen3) {
      return "Generation III"
    } else if (e > gen3 && e < gen4) {
      return "Generation IV"
    } else if (e > gen4 && e < gen5) {
      return "Generation V"
    } else if (e > gen5 && e < gen6) {
      return "Generation VI"
    } else if (e > gen6 && e < gen7) {
      return "Generation VII"
    } else if (e > gen7 && e < gen8) {
      return "Generation VIII"
    } else if (e > gen8 && e < gen9) {
      return "Generation IX"
    } else {
      return "Generation X"
    }
  }



  const seeMoreInfo = (e) => {

    async function pokemonAPICall1() {

      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${e}/`);
      const dataToSetDataModal =
      {
        id: e,
        generation: generation(e),
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        abilities: data.abilities,
        types: data.types,
        height: data.height * 10,
        weight: data.weight / 10,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png`,
      }

      async function pokemonSpecies() {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${e}/`);
        const evolutions = data.evolution_chain.url
        const egg_groups = data.egg_groups
        const habitat = data.habitat ? data.habitat.name : "Not defined"
        const original_name = data.names[0].name
        const growth_rate = data.growth_rate.name

        async function pokemonEvolutions() {
          const { data } = await axios.get(`${evolutions}`)
          const evo1 = data.chain.species.name
          let evo1_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(data.chain.species.url).split("/")[6]}.png`;
          let evo1_id = (data.chain.species.url).split("/")[6];

          let evo2 = []
          let evo2_url = []
          let evo2_id = []
          if (data.chain.evolves_to.length) {
            for (let prop in data.chain.evolves_to) {
              evo2.push(data.chain.evolves_to[prop].species.name);
              evo2_url.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(data.chain.evolves_to[prop].species.url).split("/")[6]}.png`);
              evo2_id.push((data.chain.evolves_to[prop].species.url).split("/")[6]);
            }
          } else {
            evo2 = false
            evo2_url = false
            evo2_id = false
          }

          let evo3 = []
          let evo3_url = []
          let evo3_id = []
          if (evo2) {
            if (data.chain.evolves_to[0].evolves_to.length) {
              for (let prop in data.chain.evolves_to) {
                evo3.push(data.chain.evolves_to[0].evolves_to[prop].species.name);
                evo3_url.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(data.chain.evolves_to[0].evolves_to[prop].species.url).split("/")[6]}.png`);
                evo3_id.push((data.chain.evolves_to[0].evolves_to[prop].species.url).split("/")[6]);
              }
            } else {
              evo3 = false
              evo3_url = false
              evo3_id = false
            }
          } else {
            evo3 = false
            evo3_url = false
            evo3_id = false
          }

          const finalDataToSetDataModal = {
            ...dataToSetDataModal,
            data_evol: data.chain,
            evolution_1: [evo1, evo1_url, evo1_id],
            evolution_2: { name: evo2, url: evo2_url, id: evo2_id },
            evolution_3: { name: evo3, url: evo3_url, id: evo3_id },
            egg_groups: egg_groups,
            habitat: habitat,
            original_name: original_name,
            growth_rate: growth_rate
          }
          setDataModal(finalDataToSetDataModal)
          setActiveLoading(true)
        }
        pokemonEvolutions()
      }
      pokemonSpecies()
    }
    pokemonAPICall1()
  }



  const crossCalling = (e) => {
    setActiveLoading(false)
    seeMoreInfo(e)
  }




  const capHy = (e) => {
    const formatedCapHy = e.replaceAll('-', ' ')
    const splitStr = formatedCapHy.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    return splitStr.join(' ')
  }

  return (

    <DataContext.Provider value={{
      pokemons,
      modal,
      setModal,
      dataModal,
      seeMoreInfo,
      filterPokemon,
      pokemonFiltered,
      resultFilter,
      activeLoading,
      setActiveLoading,
      maxPokeShow,
      setMaxPokeShow,
      sliced,
      hasMore,
      setHasMore,
      crossCalling,
      capHy,
      specificGeneration,
      generationTitle
    }}>
      {children}
    </DataContext.Provider>
  )

}