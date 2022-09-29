import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemons.models';
import { PokemonsPageService } from 'src/app/services/pokemons-page.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.css']
})
export class PokemonsPage implements OnInit {

  get pokemon(): Pokemon[] {
    return this.pokemonsPageService.pokemon;
  }

  get loading(): boolean {
    return this.pokemonsPageService.loading;
  }

  get error(): string {
    return this.pokemonsPageService.error;
  }

  constructor(
    private readonly pokemonsPageService: PokemonsPageService 
    ){}

   ngOnInit(): void  {
     this.pokemonsPageService.findAllPokemons();
  }

  

}
