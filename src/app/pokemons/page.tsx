import { fetchPokemons } from "@/utils/api/api";
import ClientPokemonList from "@/components/ClientPokemonList/ClientPokemonList";

export default async function PokemonListPage() {
    const data = await fetchPokemons(20); // Загружаем первые 20 покемонов на сервере
    const initialPokemons = data.results;

    return (
        <section className="py-12 bg-gray-100">
            <div className="h-full mx-auto p-4 text-black">
                <h1 className="text-3xl font-bold text-center mb-8">Pokémon List</h1>
                <ClientPokemonList initialPokemons={initialPokemons} />
            </div>
        </section>
    );
}
