import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "151 Pokémons",
  description: "Ad minin sit cupidatat culpa consectetur",
};

export const getPokemonsNames = async (
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
  const pokemons = await getPokemonsNames(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokémons <small className="text-blue-500">estatíco</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
