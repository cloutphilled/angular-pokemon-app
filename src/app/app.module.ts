
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

//Decorator
@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    PokemonsPage,
    PokemonsListComponent,
    ProfilePage,
    LoginFormComponent,
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
