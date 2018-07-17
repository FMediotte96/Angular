import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  // Pueden ser muchas las coincidencia con las busquedas
  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private ruta: Router) {

   }

  ngOnInit() {
      this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      });
  }
  
  verHeroe(index:number){
    console.log(index);
    this.ruta.navigate( ['/heroe', index]);
  }

}
