"use client";

import { Provider } from "react-redux";
import { store } from "./index";
import { useEffect } from "react";
import { setFavoritePokemon } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );

    store.dispatch(setFavoritePokemon(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
