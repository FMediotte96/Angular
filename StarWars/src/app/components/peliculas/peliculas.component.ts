import { Component, OnInit } from '@angular/core';
import { Pelicula, PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas:Pelicula[] = [];

  constructor(private _peliculasService:PeliculasService) {

  }

  ngOnInit() {
    this.peliculas = this._peliculasService.getPeliculas();
  }

}
