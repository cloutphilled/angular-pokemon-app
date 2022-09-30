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

  // Dependency Injection
  constructor(private http: HttpClient) { }

  // Login
  public login(username: string): Observable<User> {
    return this.checkUsername(username)
      .pipe(
        switchMap((user: User | undefined) => {
          if(user ==undefined){
            return this.createUser(username);
          }
          return of(user);
        })
      )
  }

  // Check if user exists
  private checkUsername(username:string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
      .pipe(
        map((response: User[]) => response.pop()) 
      )
    }

  // Create user
  private createUser(username: string): Observable<User>{
    //user
    const user = {
      username,
      pokemons: [],
    };

    //headers -> api key
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    //POST - create item on server
    return this.http.post<User>(apiUsers, user, {
      headers
    })
  }
}
