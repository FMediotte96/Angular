import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { Peliculas2Component } from './components/peliculas/peliculas2.component';

const RUTAS: Routes = [
  { path: 'peliculas', component: PeliculasComponent},
  { path: 'peliculas2', component: Peliculas2Component},
  { path: '**', pathMatch: 'full', redirectTo:'peliculas'},
];

@NgModule({
  imports: [RouterModule.forRoot(RUTAS)],
  exports: [RouterModule]
})

export class ProyectFireRutas{

}
