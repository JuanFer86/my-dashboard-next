import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type.includes("pokemons/toggleFavorite")) {
      const { pokemons, counter } = state.getState() as RootState;

      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
      return;
    }
  };
};
