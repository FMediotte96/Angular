import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { StarWarsRutas } from './starwars.routing';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculasService } from './servicios/peliculas.service';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeTarjetaComponent } from './components/personaje-tarjeta/personaje-tarjeta.component';
import { PersonajesService } from './servicios/personajes.service';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PeliculasComponent,
    PersonajesComponent,
    PersonajeTarjetaComponent,
    PeliculaTarjetaComponent,
    AboutComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    StarWarsRutas
  ],
  providers: [
    PeliculasService,
    PersonajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
