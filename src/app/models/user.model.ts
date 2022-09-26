import { Pokemons } from "./pokemons.models"

export interface User {
    id: number
    username: string
    pokemons: Pokemons[]
}
