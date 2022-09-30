import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemons.models';

@Component({
  selector: 'app-pokemons-list-item',
  templateUrl: './pokemons-list-item.component.html',
  styleUrls: ['./pokemons-list-item.component.css']
})
export class PokemonsListItemComponent implements OnInit {

  @Input() pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
