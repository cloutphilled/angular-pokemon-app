import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/app/models/pokemons.models';

const {apiPokemons } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  private _pokemons: Pokemon[] = [];
  private _error: String = "";
  private _url: String = "";

  get pokemons(): Pokemon[]{
    return this._pokemons;
  }
  get error(): String{
    return this._error;
  }
  get url(): String{
    return this._url
  }


  private _loading: boolean = false;


  constructor(private readonly http: HttpClient) {  }

  public getPokemonId(url: string): string {

    let words = url.split('/');
    let id = words[words.length - 2];

    return id;

}


  



  public findAllPokemons(): void{
    this._loading = true;
    this.http.get<Pokemon[]>(apiPokemons)
    .pipe(
      finalize(() => {
        this._loading = false;
      })
    )
    .subscribe({
      next: (pokemons: Pokemon[]) => {
        this._pokemons = pokemons
        this._pokemons.map(pokemons => pokemons.id = this.getPokemonId(pokemons.url));
        this._pokemons.map(p => p.img = `https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/${p.id}.png`)

      },
      error: () => {
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      }
    })
  }

  public pokemonById(id: String): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.id === id)
  }

 


}


