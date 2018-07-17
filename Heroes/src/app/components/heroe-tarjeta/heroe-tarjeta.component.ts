import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:Heroe;

  @Input() index:number;

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  verHeroe(){
    console.log(this.index);
    this.ruta.navigate( ['/heroe', this.index]);
  }

}
