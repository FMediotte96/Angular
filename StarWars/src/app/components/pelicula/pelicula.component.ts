import { Component, OnInit } from '@angular/core';
import { Pelicula, PeliculasService } from '../../servicios/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:Pelicula;
  
  constructor(private activarRuta:ActivatedRoute,
              private _peliculasService:PeliculasService) { 

    /* Esta funcion retornara un observador,un observador es como una promesa,
    es algo que esta pendiente de esos cambios.
    En parametros nos retorna los valores
    */
    this.activarRuta.params.subscribe( parametros => {
      this.pelicula = this._peliculasService.getPelicula( parametros['id']);
    });
  }

  ngOnInit() {
  }

}
