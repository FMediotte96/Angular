import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})

export class BodyComponent{
   
    mostrar=true;

    frase:any = {
        mensaje: 'El mejor ritmo es un ritmo suicida, y hoy es un gran día para morir',
        autor: 'Steve Prefontaine'
    }

    personajes:string[] = ["Ironman","Cap. America","Hulk","Scarlet Witch","Thor","Hawkeye"];
}
