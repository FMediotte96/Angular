import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { NgModule } from '@angular/core';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

const RUTAS: Routes = [
  { path:'body', component: BodyComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'personajes', component: PersonajesComponent},
  { path: 'acercaDe', component: AboutComponent},
  { path: 'personaje/:id',component: PersonajeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'body' },
];

@NgModule({
  imports: [RouterModule.forRoot(RUTAS)],
  exports: [RouterModule]
})

export class StarWarsRutas {
  
}

