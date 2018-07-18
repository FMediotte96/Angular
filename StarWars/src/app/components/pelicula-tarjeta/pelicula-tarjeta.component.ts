import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../servicios/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styleUrls: ['./pelicula-tarjeta.component.css']
})
export class PeliculaTarjetaComponent implements OnInit {

  @Input() pelicula:Pelicula;
  @Input() index:number;

  @Output() peliculaSeleccionada: EventEmitter<number>;
  constructor(private ruta:Router) { 
    this.peliculaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }

  verPelicula(){
    this.ruta.navigate(['/pelicula',this.index]);
    this.peliculaSeleccionada.emit(this.index);
  }

}
