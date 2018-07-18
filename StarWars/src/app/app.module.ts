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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PeliculasComponent,
    PersonajesComponent,
    PersonajeTarjetaComponent
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
