import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemons } from '../models/pokemons.models';
const {apiPokemons}= environment

@Injectable({
  providedIn: 'root'
})
export class PokemonsPageService {

  private _pokemons: Pokemons[] = [];
  private _error: string = "";
  private _loading: boolean = false;

  get pokemons(): Pokemons[] {
    return this._pokemons;
  }

  get loading(): boolean {
    return this._loading;
  }

  get error(): string {
    return this._error;
  }

  constructor(private readonly http: HttpClient) { }

  public findAllPokemons(): void {
    this._loading = true;
    this.http.get<Pokemons[]>(apiPokemons)
    .pipe(
      finalize(() => {
        this._loading = false;
      })
      )
    .subscribe({
      next: (pokemons: Pokemons[]) => {
        this._pokemons = pokemons;

      },
      error:(error: HttpErrorResponse) => {
        this._error = error.message;

      }
      
    })

  }
}
