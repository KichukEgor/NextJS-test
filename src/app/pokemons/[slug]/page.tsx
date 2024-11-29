import Image from "next/image";
import {fetchPokemonByName} from "@/utils/api/api";

interface PokemonPageProps {
    params: { slug: string };
}

export default async function PokemonPage({params}: PokemonPageProps) {
    const pokemon = await fetchPokemonByName(params.slug);

    return (
        <section className="flex flex-col flex-1 justify-center align-middle py-12 bg-gray-100">
            <article className="h-full mx-auto max-w-sm p-6 text-black border border-gray-200 rounded-lg shadow-lg bg-white">
                <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">{pokemon.name}</h3>
                <div className="flex justify-center">
                    <Image
                        src={pokemon.sprites?.front_default}
                        alt={pokemon.name}
                        width={200}
                        height={200}
                        className="rounded-lg"
                        priority
                    />
                </div>
                <dl className="text-center">
                    <div className="mb-4">
                        <dt className="font-semibold text-gray-700">Height:</dt>
                        <dd className="text-gray-600">{pokemon.height}</dd>
                    </div>
                    <div className="mb-4">
                        <dt className="font-semibold text-gray-700">Weight:</dt>
                        <dd className="text-gray-600">{pokemon.weight}</dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-gray-700">Base experience:</dt>
                        <dd className="text-gray-600">{pokemon.base_experience}</dd>
                    </div>
                </dl>
            </article>
        </section>
    );
}
