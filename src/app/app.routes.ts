import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'patnavbarh3', component: NavbarComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
