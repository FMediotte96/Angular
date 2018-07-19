import { Component, OnInit } from '@angular/core';
import { Personaje, PersonajesService } from '../../servicios/personajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje:Personaje;

  constructor(private activarRuta:ActivatedRoute,
              private _personajesService:PersonajesService) {
    /* Esta funcion retornara un observador,un observador es como una promesa,
    es algo que esta pendiente de esos cambios.
    En parametros nos retorna los valores
    */
    this.activarRuta.params.subscribe( parametros => {
      //console.log ( parametros );
      // Para ver el parámetro id podria ser, esto porque en la ruta mandamos el id:
      //console.log ( parametros['id']);
      this.personaje = this._personajesService.getPersonaje( parametros['id']);
      //console.log (this.personaje);
    });
  }

  ngOnInit() {
  }

}
