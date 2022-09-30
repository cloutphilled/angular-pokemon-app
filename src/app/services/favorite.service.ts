import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemons.models';
import { User } from '../models/user.model';
import { PokemonService } from './pokemon.service';
import { UserService } from './user.service';

const { apiKey, apiUsers } = environment

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonService,
    private readonly userService: UserService
  ) { }


  public addToFavorites(pokemonId: string): Observable<User> {

    if(!this.userService.user){
      throw new Error('addToFavorites: There is no user');
    }

    const user: User = this.userService.user;

    const pokemon: Pokemon | undefined = this.pokemonService.pokemonById(pokemonId);

    if(!pokemon) {
      throw new Error('addToFavorites: No pokemon with id: ' + pokemonId)
    }

    if(this.userService.inFavorites(pokemonId)) {
      this.userService.removeFromFavorite(pokemonId);
    } else {
      this.userService.addToFavorites(pokemon);
    }

    const headers = new HttpHeaders ({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })

    return this.http.patch<User>(`${apiUsers}/${user.id}`, {
      pokemon: [...user.pokemon]
    }, {
      headers
    })
    .pipe(
      tap((updatedUser: User) => {
        this.userService.user = updatedUser;
      })
    )
  }
}
