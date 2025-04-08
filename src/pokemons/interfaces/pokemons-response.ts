export interface PokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}
