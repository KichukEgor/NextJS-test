const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit: number = 20, offset: number = 0) => {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
        throw new Error('Failed to fetch pokemons');
    }
    return response.json();
};

export const fetchPokemonByName = async (name: string) => {
    const response = await fetch(`${BASE_URL}/pokemon/${name}`);
    if (!response.ok) throw new Error(`Failed to fetch Pokémon details for ${name}`);
    return response.json();
};

