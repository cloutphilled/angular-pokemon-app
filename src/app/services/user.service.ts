import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.models';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  //? after user is same as | undefined
  private _user?: User;

  public get user(): User | undefined{
    return this._user;
  }
  set user(user: User | undefined){
    StorageUtil.StorageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
   }

   public inFavorites(pokemonId: number): boolean {
    if(this._user) {
      return Boolean(this.user?.pokemon.find((pokemon: Pokemon) => pokemon.id === pokemonId))
    }
    return false;
   }

   public addToFavorites(pokemon: Pokemon): void {
    if(this._user) {
      this._user.pokemon.push(pokemon);
    }
   }

   public removeFromFavorite(pokemonId: number): void {
    if(this._user) {
      this._user.pokemon = this._user.pokemon.filter((pokemon: Pokemon) => pokemon.id !== pokemonId)
    }
   }
}
