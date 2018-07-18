import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private peliculas:Pelicula[] = [
    {
      titulo: "Star Wars: Episode I The Phantom Menace",
      url: "https://www.starwars.com/films/star-wars-episode-i-the-phantom-menace",
      descripcion: "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
      foto:"/assets/images/films/episodioI.jpg"
    },
    {
      titulo: "Star Wars: Episode II Attack of the Clones",
      url: "https://www.starwars.com/films/star-wars-episode-ii-attack-of-the-clones",
      descripcion: "Padawan Anakin Skywalker must choose between his Jedi duty and forbidden love, while Obi-Wan Kenobi uncovers a sinister plot that leads to war.",
      foto:"/assets/images/films/episodioII.jpg"
    },
    {
      titulo: "Star Wars: Episode III Revenge of the Sith",
      url: "https://www.starwars.com/films/star-wars-episode-iii-revenge-of-the-sith",
      descripcion: "Faced with haunting premonitions that his secret wife, Padmé Amidala, will die, Anakin Skywalker is seduced by the dark side.",
      foto:"/assets/images/films/episodioIII.jpg"
    },
    {
      titulo: "Star Wars: Episode IV A New Hope",
      url: "https://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
      descripcion: "Luke Skywalker begins a journey that will change the galaxy, as he leaves his home planet, battles the evil Empire, and learns the ways of the Force.",
      foto:"/assets/images/films/episodioIV.jpg"
    },
    {
      titulo: "Star Wars: Episode V The Empire Strikes Back",
      url: "https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back",
      descripcion: "After the destruction of the Death Star, the Empire has regrouped -- with Darth Vader leading the hunt for Luke Skywalker.",
      foto:"/assets/images/films/episodioV.jpg"
    },
    {
      titulo: "Star Wars: Episode VI Return of the Jedi",
      url: "https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi",
      descripcion: "Luke Skywalker heads a mission to rescue Han Solo from the clutches of Jabba the Hutt, and faces Darth Vader one last time.",
      foto:"/assets/images/films/episodioVI.jpg"
    },
    {
      titulo: "Star Wars: Episode VII The Force Awakens",
      url: "https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens",
      descripcion: "Thirty years after the defeat of the Empire, Luke Skywalker has vanished and a new threat has risen: " + 
      "The First Order, led by the mysterious Supreme Leader Snoke and his dark side enforcer, Kylo Ren. General Leia Organa’s " + 
      "military force, the Resistance — and unlikely heroes brought together by fate — are the galaxy’s only hope at thwarting a new reign of evil.",
      foto:"https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=118%2C252%2C1384%2C696&width=600"
    },
    {
      titulo: "Rogue One: A Star Wars Story",
      url: "https://www.starwars.com/films/rogue-one",
      descripcion: "From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” " + 
      "an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star," +
      " the Empire’s ultimate weapon of destruction. This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things," +
      " and in doing so, become part of something greater than themselves.",
      foto:"https://lumiere-a.akamaihd.net/v1/images/rogueone_onesheeta_8a255456.jpeg?region=0%2C77%2C1688%2C849&width=600"
    },
    {
      titulo: "Star Wars: Episode VIII The Last Jedi",
      url: "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
      descripcion: "With the destruction of the Republic, the evil First Order reigns. Now, Supreme Leader Snoke looks to crush what's left of the Resistance and cement his grip on the galaxy. " + 
      "But hope survives: Rey has found Luke Skywalker, a legendary Jedi Master who can change the tide of war.",
      foto:"https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-tall-a_6a776211.jpeg?region=0%2C53%2C1536%2C768&amp;width=600"
    },
    {
      titulo: "Solo: A Star Wars Story",
      url: "https://www.starwars.com/films/solo",
      descripcion: "Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and" +
      " dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga’s most unlikely" +
      " heroes. Solo: A Star Wars Story releases in U.S. Theaters on May 25, 2018.",
      foto: "/assets/images/films/solo.jpg"
    }
  ]

  getPeliculas():Pelicula[]{
    return this.peliculas;
  }

  constructor() {

  }

}

export interface Pelicula {
  titulo:string;
  url:string;
  descripcion:string;
  foto:string;
}