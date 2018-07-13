



/*
Este archivo tiene una sintaxis en particular ya definida
Agregar esta extension en Visual Studio Code "ng-router"
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroe', component: HeroesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class APP_ROUTING {
}

