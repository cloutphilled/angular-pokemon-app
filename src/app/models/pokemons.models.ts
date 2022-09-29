
export interface PokemonChar {
    id: number;
    name: string;
    results: PokemonList[];
    Abilities: Ability[];
}
export interface Ability{
    id: number;
    name: string;
}

export interface PokemonList {
    name: string;
    url:string;
}

export interface Pokemon {
    id: string;
    name: string;
    url: string;
    img: string;
}