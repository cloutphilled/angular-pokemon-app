import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemons.models';
const {apiPokemons}= environment

@Injectable({
  providedIn: 'root'
})
export class PokemonsPageService {
  
  private _pokemon: Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;

  get pokemon(): Pokemon[] {
    return this._pokemon;
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
    this.http.get<Pokemon[]>(apiPokemons)
    .pipe(
      finalize(() => {
        this._loading = false;
      }),
      map((x: any) => x.results)
      )
    .subscribe({
      next: (pokemon: Pokemon[]) => {
        this._pokemon = pokemon;       

      },
      error:(error: HttpErrorResponse) => {
        this._error = error.message;

      }
      
    })

  }
}
