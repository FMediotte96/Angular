import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProyectFireRutas } from './proyectFire.routing';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { Peliculas2Component } from './components/peliculas/peliculas2.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    Peliculas2Component
  ],
  imports: [
    BrowserModule,
    ProyectFireRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
