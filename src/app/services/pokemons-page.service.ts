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

  public getPokemonId(url: string): string {

    let words = url.split('/');
    let id = words[words.length - 2];

    return id;

  }
//Find all pokemon function - Including pictures(sprites)
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
        this._pokemon.map(pokemon => pokemon.id = this.getPokemonId(pokemon.url));
        this._pokemon.map(p => p.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`)       
//https://stackoverflow.com/questions/39065921/what-do-raw-githubusercontent-com-urls-represent -Information for the raw.githubusercontent
      },
      error:(error: HttpErrorResponse) => {
        this._error = error.message;

      }
      
    })

  }
}
