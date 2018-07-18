import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../servicios/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje-tarjeta',
  templateUrl: './personaje-tarjeta.component.html',
  styleUrls: ['./personaje-tarjeta.component.css']
})
export class PersonajeTarjetaComponent implements OnInit {

  @Input() personaje:Personaje;
  @Input() index:number;

  @Output() personajeSeleccionado: EventEmitter<number>;
  constructor(private ruta:Router) { 
    this.personajeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verPersonaje(){
    this.ruta.navigate(['/personaje',this.index]);
    this.personajeSeleccionado.emit(this.index);
  }
}
