import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas:any[] = [
    {
      titulo: "Solo: A Star Wars Story",
      url: "https://www.starwars.com/films/solo",
      description: "With the destruction of the Republic, the evil First Order reigns. Now, Supreme Leader Snoke looks to crush what's left of the Resistance and cement his grip on the galaxy. " + 
      "But hope survives: Rey has found Luke Skywalker, a legendary Jedi Master who can change the tide of war.",
      foto: "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster-1000_27861ab7.jpeg?region=0%2C279%2C1000%2C503&amp;width=600"
    },
    {
      titulo: "Star Wars: Episode VIII The Last Jedi",
      url: "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
      description: "Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and" +
      " dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga’s most unlikely" +
      " heroes. Solo: A Star Wars Story releases in U.S. Theaters on May 25, 2018.",
      foto: "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster-1000_27861ab7.jpeg?region=0%2C279%2C1000%2C503&amp;width=600"
    },


  ]

  constructor() { }

  ngOnInit() {
  }



}
