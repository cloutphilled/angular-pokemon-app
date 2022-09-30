import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemons.models';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  @Input() pokemon: Pokemon[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
