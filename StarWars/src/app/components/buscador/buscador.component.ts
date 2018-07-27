import { Component, OnInit } from '@angular/core';
import { Personaje, PersonajesService } from '../../servicios/personajes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  personajes:Personaje[] = [];
  termino:string;

  constructor(private activarRuta:ActivatedRoute,
              private _personajesService:PersonajesService,
              private ruta:Router) {
    console.log("Llegue hasta aca componente buscador");
  }

  ngOnInit() {
    this.activarRuta.params.subscribe( parametros => {
      this.termino = parametros['termino'];
      this.personajes = this._personajesService.buscarPersonajes(this.termino);
      console.log(this.personajes);
    })
  }

   //Para saber que pelicula vamos a mostrar
   verPersonaje(index:number){
    this.ruta.navigate( ['/personaje',index]);
  }

}
