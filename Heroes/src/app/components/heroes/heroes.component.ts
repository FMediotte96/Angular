import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service'
//Necesitamos importar esto para poder recibir los parametros
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit{

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService,
              private ruta: Router) {
    console.log('Constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(index:number){
    console.log(index);
    this.ruta.navigate( ['/heroe', index]);
  }

}
