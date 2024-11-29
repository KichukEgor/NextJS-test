"use client";

import { useState } from "react";
import Link from "next/link";
import { fetchPokemons } from "@/api/pokemon";

type Pokemon = {
    name: string;
};

export default function ClientPokemonList({ initialPokemons }: { initialPokemons: Pokemon[] }) {
  const [pokemons, setPokemons] = useState(initialPokemons);
  const [offset, setOffset] = useState(initialPokemons.length);
  const [loading, setLoading] = useState(false);

  const loadMorePokemons = async () => {
    setLoading(true);
    try {
      const data = await fetchPokemons(20, offset);
      setPokemons((prev) => [...prev, ...data.results]);
      setOffset((prev) => prev + 20);
    } catch (error) {
      console.error("Failed to load more Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pokemons.map(({ name }: Pokemon) => (
          <Link
            key={name}
            href={`/pokemons/${name}`}
            aria-label={`View details about ${name}`}
            className={`text-center capitalize cursor-pointer border p-4 bg-white rounded shadow 
              hover:shadow-md transition-shadow fade-in opacity-0 animation-delay`}
          >
            {name}
          </Link>
        ))}
      </ul>

      <div className="text-center mt-8">
        <button
          onClick={loadMorePokemons}
          disabled={loading}
          aria-label="Load more pokemons"
          className={`w-40 px-6 py-2 rounded text-white font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Loading..." : "More"}
        </button>
      </div>
    </>
  );
}
