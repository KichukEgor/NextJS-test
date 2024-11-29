import Image from "next/image";
import { fetchPokemonByName } from "@/api/pokemon";
import PokemonStats from "@/components/PokemonStats/PokemonStats";

interface PokemonPageProps {
    params: { name: string };
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const pokemon = await fetchPokemonByName(params.name);

  const stats = [
    { label: "Height", value: pokemon.height },
    { label: "Weight", value: pokemon.weight },
    { label: "Base Experience", value: pokemon.base_experience },
  ];

  return (
    <section className="flex flex-col flex-1 justify-center align-middle py-12 bg-gray-100">
      <article className="h-full mx-auto max-w-sm p-6 text-black border border-gray-200 rounded-lg shadow-lg bg-white">
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {pokemon.name}
        </h3>
        <div className="flex justify-center">
          <Image
            src={pokemon.sprites?.front_default || ""}
            alt={pokemon.name}
            width={200}
            height={200}
            className="rounded-lg"
            priority
          />
        </div>
        <PokemonStats stats={stats} />
      </article>
    </section>
  );
}
