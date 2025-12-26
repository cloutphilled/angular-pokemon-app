import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

const { apiUsers, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(username: string): Observable<User> {
    // Use localStorage for user storage
    if (apiUsers === 'localStorage') {
      return this.loginWithLocalStorage(username);
    }
    return this.checkUsername(username)
      .pipe(
        switchMap((user: User | undefined) => {
          if(user == undefined){
            return this.createUser(username);
          }
          return of(user);
        })
      )
  }

  private loginWithLocalStorage(username: string): Observable<User> {
    const users = JSON.parse(localStorage.getItem('pokemon_users') || '[]');
    let user = users.find((u: User) => u.username === username);
    
    if (!user) {
      user = { id: Date.now(), username, pokemon: [] };
      users.push(user);
      localStorage.setItem('pokemon_users', JSON.stringify(users));
    }
    
    return of(user);
  }

  private checkUsername(username:string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
      .pipe(
        map((response: User[]) => response.pop()) 
      )
    }

  private createUser(username: string): Observable<User>{
    const user = {
      username,
      pokemons: [],
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    return this.http.post<User>(apiUsers, user, {
      headers
    })
  }
}
