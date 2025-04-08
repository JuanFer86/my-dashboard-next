import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const data: PokemonResponse = await res.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2) as string,
    name: pokemon.name,
  }));

  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokémons <small>estatíco</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
