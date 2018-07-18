import { Component, OnInit } from '@angular/core';
import { Pelicula, PeliculasService } from '../../servicios/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas:Pelicula[] = [];

  constructor(private _peliculasService:PeliculasService,
              private ruta:Router) {

  }

  ngOnInit() {
    this.peliculas = this._peliculasService.getPeliculas();
  }

  //Para saber que pelicula vamos a mostrar
  verPelicula(index:number){
    this.ruta.navigate( ['/pelicula',index]);
  }

}
