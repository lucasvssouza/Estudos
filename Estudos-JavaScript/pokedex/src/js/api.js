class Pokemon {
  id;
  name;
  imgURL;
  stats;
  types;
  evolutions;
  generation;
  generationUrl;
}
let pokemonList = [];
async function getPokemonList(offset) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;

  dataList = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      response.results.map(async (pokemon) => {
        let details = await getPokemonDetails(pokemon.url);
        pokemonList = [...pokemonList, details];
        console.log(pokemonList);
      });
    })
    .catch((error) => {
      return error;
    });
}

async function getPokemonDetails(pokemonUrl) {
  let pokemon = new Pokemon();
  fetch(pokemonUrl)
    .then((response) => {
      return response.json();
    })
    .then(async (data) => {
      pokemon.id = data.id;
      pokemon.name = data.name;
      pokemon.imgURL = data.sprites.front_default;
      pokemon.stats = data.stats;
      pokemon.types = data.types;
      species = await pokemonSpecies(data.species.url);
      pokemon.generation = species.generation.name;
      pokemon.generationUrl = species.generation.url;
      // evolution = await pokemonSpecies(species.evolution_chain.url);
      // console.log(evolution.chain.evolves_to);
      // if (evolution.chain.species != undefined){
      //    pokemon.evolutions=[evolution.chain.species]
      //    if(evolution.chain.evolves_to!=undefined){
      //     pokemon.evolutions=[... pokemon.evolutions,evolution.chain.evolves_to]
      //    }
      //   console.log(pokemon.evolutions);
      // }
    })
    .catch((error) => {
      return error;
    });

  return pokemon;
}
async function pokemonEvolutions(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
function pokemonGeneration(pokemon) {}
async function pokemonSpecies(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
getPokemonList();
// console.log(getPokemonDetails("https://pokeapi.co/api/v2/pokemon/2/"));
