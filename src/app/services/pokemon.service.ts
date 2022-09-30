import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemons.models';


const { apiPokemons } = environment;
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemons: Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }
  

  constructor(private readonly http: HttpClient) { }

  public findAllPokemons(): void {
    if(this._pokemons.length > 0 || this.loading) {
      return;
    }

    this._loading = true;
    this.http.get<Pokemon[]>(apiPokemons)
    .pipe(
      finalize(() => {
        this._loading = false;
      })
    ).subscribe({
      next: (pokemons: Pokemon[]) => {
        this._pokemons = pokemons;
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      }
    })
  }


  public pokemonById(id: number): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.id === id);
  }
}