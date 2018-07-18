import { Component, OnInit } from '@angular/core';
import { Personaje, PersonajesService } from '../../servicios/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes:Personaje[] = [];

  constructor(private _personajesService:PersonajesService,
              private ruta:Router) {

  }

  ngOnInit() {
    this.personajes = this._personajesService.getPersonajes();
  }

  //Para saber que personaje vamos a mostrar
  verPersonaje(index:number){
    this.ruta.navigate( ['/personaje',index]);
  }

}
