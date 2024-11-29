import { PokemonDetails, PokemonListResponse } from "@/api/pokemon/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchPokemons = async (limit: number = 20, offset: number = 0): Promise<PokemonListResponse> => {
  if (!BASE_URL) {
    throw new Error("BASE_URL is not defined in environment variables");
  }

  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new Error("Failed to fetch pokemons");
  }
  return response.json();
};

export const fetchPokemonByName = async (name: string): Promise<PokemonDetails> => {
  if (!BASE_URL) {
    throw new Error("BASE_URL is not defined in environment variables");
  }

  const response = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!response.ok) throw new Error(`Failed to fetch Pokémon details for ${name}`);
  return response.json();
};
