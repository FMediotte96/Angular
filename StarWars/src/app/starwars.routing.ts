import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { NgModule } from '@angular/core';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const RUTAS: Routes = [
  { path:'body', component: BodyComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'body' },
];

@NgModule({
  imports: [RouterModule.forRoot(RUTAS)],
  exports: [RouterModule]
})

export class StarWarsRutas {
  
}

