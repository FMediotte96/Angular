import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit() {
  }

  buscarPersonaje(termino:string){
    this.ruta.navigate(['/buscar', termino]);
    setTimeout('document.formulario.reset()',0);
  }

}
