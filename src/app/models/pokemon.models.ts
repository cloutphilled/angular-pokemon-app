import { Ability } from "./abilities.models";

export interface Pokemon {
    id: number;
    name: string;
    Abilities: Ability[];
}

