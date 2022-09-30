
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { PokemonsPage } from './pages/pokemons/pokemons.page';
import { ProfilePage } from './pages/profile/profile.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonsListItemComponent } from './components/pokemons-list-item/pokemons-list-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';


//Decorator
@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    PokemonsPage,
    PokemonsListComponent,
    ProfilePage,
    LoginFormComponent,
    FavoriteButtonComponent,
    PokemonsListItemComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
