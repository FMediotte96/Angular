import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private peliculas:Pelicula[] = [
    {
      titulo: "Star Wars: Episode I The Phantom Menace",
      url: "https://www.starwars.com/films/star-wars-episode-i-the-phantom-menace",
      descripcion: "Anakin Skywalker, un joven esclavo fuerte con la Fuerza, es descubierto en Tatooine. Mientras tanto, los malvados Sith han regresado, promulgando su plan de venganza contra los Jedi.",
      foto:"/assets/images/films/episodioI.jpg"
    },
    {
      titulo: "Star Wars: Episode II Attack of the Clones",
      url: "https://www.starwars.com/films/star-wars-episode-ii-attack-of-the-clones",
      descripcion: "El padawan Anakin Skywalker debe elegir entre su deber Jedi y su amor prohibido, mientras que Obi-Wan Kenobi descubre una siniestra trama que lleva a la guerra.",
      foto:"/assets/images/films/episodioII.jpg"
    },
    {
      titulo: "Star Wars: Episode III Revenge of the Sith",
      url: "https://www.starwars.com/films/star-wars-episode-iii-revenge-of-the-sith",
      descripcion: "Ante las inquietantes premoniciones de que su esposa secreta, Padmé Amidala, morirá, Anakin Skywalker es seducido por el lado oscuro.",
      foto:"/assets/images/films/episodioIII.jpg"
    },
    {
      titulo: "Star Wars: Episode IV A New Hope",
      url: "https://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
      descripcion: "Luke Skywalker comienza un viaje que cambiará la galaxia, cuando abandona su planeta natal, lucha contra el malvado Imperio y aprende los caminos de la Fuerza.",
      foto:"/assets/images/films/episodioIV.jpg"
    },
    {
      titulo: "Star Wars: Episode V The Empire Strikes Back",
      url: "https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back",
      descripcion: "Después de la destrucción de la Estrella de la Muerte, el Imperio se ha reagrupado, con Darth Vader encabezando la búsqueda de Luke Skywalker.",
      foto:"/assets/images/films/episodioV.jpg"
    },
    {
      titulo: "Star Wars: Episode VI Return of the Jedi",
      url: "https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi",
      descripcion: "Luke Skywalker dirige una misión para rescatar a Han Solo de las garras de Jabba the Hutt, y se enfrenta a Darth Vader por última vez.",
      foto:"/assets/images/films/episodioVI.jpg"
    },
    {
      titulo: "Star Wars: Episode VII The Force Awakens",
      url: "https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens",
      descripcion: "Treinta años después de la derrota del Imperio, Luke Skywalker ha desaparecido y ha surgido una nueva amenaza: la Primera Orden, " + 
      "liderada por el misterioso líder supremo Snoke y su ejecutor del lado oscuro, Kylo Ren. La fuerza militar del General Leia Organa, la Resistencia, " + 
      "y héroes improbables unidos por el destino, son la única esperanza de la galaxia para frustrar un nuevo reino del mal.",
      foto:"/assets/images/films/episodioVII.jpeg"
    },
    {
      titulo: "Rogue One: A Star Wars Story",
      url: "https://www.starwars.com/films/rogue-one",
      descripcion: "De Lucasfilm llega la primera de las películas independientes de Star Wars, 'Rogue One: A Star Wars Story', " + 
      "una aventura épica completamente nueva. En un momento de conflicto, un grupo de héroes improbables se unen en una misión para robar los planos a la Estrella de la Muerte, " +  
      "el arma de destrucción definitiva del Imperio. Este evento clave en la línea de tiempo de La Guerra de las Galaxias reúne a personas comunes y " + 
      "corrientes que eligen hacer cosas extraordinarias y, al hacerlo, se vuelven parte de algo más grande que ellos mismos.",
      foto:"/assets/images/films/rogueOne.jpeg"
    },
    {
      titulo: "Star Wars: Episode VIII The Last Jedi",
      url: "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
      descripcion: "Con la destrucción de la República, reina la malvada Primera Orden. Ahora, el Líder Supremo Snoke busca aplastar lo que queda de la Resistencia " + 
      "y consolidar su control sobre la galaxia. Pero la esperanza sobrevive: Rey ha encontrado a Luke Skywalker, un legendario Maestro Jedi que puede cambiar el rumbo de la guerra.",
      foto:"/assets/images/films/episodioVIII.jpeg"
    },
    {
      titulo: "Solo: A Star Wars Story",
      url: "https://www.starwars.com/films/solo",
      descripcion: "Aborda el Halcón Milenario y viaja a una galaxia muy, muy lejana, en Solo: A Star Wars Story, una aventura completamente nueva con el sinvergüenza más " + 
      "querido de la galaxia. A través de una serie de atrevidas escapadas en un submundo criminal oscuro y peligroso, Han Solo se encuentra con su poderoso copiloto Chewbacca " + 
      "y se encuentra con el famoso jugador Lando Calrissian, en un viaje que marcará el curso de uno de los héroes más inverosímiles de la saga Star Wars.",
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