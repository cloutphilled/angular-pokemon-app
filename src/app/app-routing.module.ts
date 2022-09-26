import { NgModule } from "@angular/core";   
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./pages/login/login.page";
import { PokemonsPage } from "./pages/pokemons/pokemons.page";
import { ProfilePage } from "./pages/profile/profile.page";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login",
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "pokemon",
        component: PokemonsPage
    },
    {
        path: "profile",
        component: ProfilePage
    }

]

@NgModule({
    //import a module
    imports: [
        RouterModule.forRoot(routes)
    ],
    //Expose module and its features
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}