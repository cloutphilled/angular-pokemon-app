import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
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

   
}
