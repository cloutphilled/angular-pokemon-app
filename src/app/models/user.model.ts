import { Pokemon } from "../models/pokemons.models"

export interface User {
    id: number
    username: string
    pokemon: Pokemon[]
}
