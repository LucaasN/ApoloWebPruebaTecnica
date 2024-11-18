import { showToast } from "../utils/util.js";
const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(
      `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response?.json();
    return data;
  } catch (error) {
    showToast("error", "Error fetching pokemons. ", error);
    throw error;
  }
};

export const searchPokemon = async (nameOrId) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
    const data = await response?.json();
    return data;
  } catch (error) {
    showToast("error", "Pokemon not found. ", error);
    throw error;
  }
};

export const getAndSetPokemon = async (nameOrId, fnSet) => {
  try {
    const data = await searchPokemon(nameOrId);
    fnSet(data);
  } catch (error) {
    showToast("error", "Pokemon not found. ", error);
    throw error;
  }
};
