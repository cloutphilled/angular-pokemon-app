import { NgModule } from "@angular/core";   
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginPage } from "./pages/login/login.page";
import { PokemonsPage } from "./pages/pokemons/pokemons.page";
import { ProfilePage } from "./pages/profile/profile.page";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/pokemons",
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "pokemons",
        component: PokemonsPage,
        // canActivate: [AuthGuard]
    },
    {
        path: "profile",
        component: ProfilePage,
        // canActivate: [AuthGuard]
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