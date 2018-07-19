import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private personajes:Personaje[] = [
    {
      nombre: "Anakin Skywalker",
      img: "/assets/images/characters/anakin.jpeg",
      descripcion: "Descubierto como un esclavo en Tatooine por Qui-Gon Jinn y Obi-Wan Kenobi, " +
      "Anakin Skywalker tenía el potencial de convertirse en uno de los Jedi más poderosos de la historia, " +
      "y fue creído por algunos ser el Elegido que traería el equilibrio a la Fuerza. " +
      "Un héroe de las Guerras Clon, Anakin fue cariñoso y compasivo, pero también " +
      "tenía miedo a la pérdida que resultaría ser su perdición."
    },
    {
      nombre: "Darth Vader",
      img: "/assets/images/characters/darthVader.jpg",
      descripcion: "Una vez heroico Caballero Jedi, Darth Vader fue seducido por el lado oscuro de la Fuerza, " + 
      "se convirtió en un Lord Sith y lideró la erradicación de la Orden Jedi por parte del Imperio. " +
      "Permaneció al servicio del Emperador, el malvado Darth Sidious, durante décadas, haciendo cumplir la voluntad de su Maestro " + 
      "y buscando aplastar a la incipiente Alianza Rebelde. Pero aún había algo bueno en él ..."
    },
    {
      nombre: "Obi-wan Kenobi",
      img: "/assets/images/characters/obiwan.jpg",
      descripcion: "Un legendario Maestro Jedi, Obi-Wan Kenobi era un hombre noble y dotado en los caminos de la Fuerza. " + 
      "Entrenó a Anakin Skywalker, sirvió como general en el Ejército de la República durante las Guerras Clon y guió a Luke Skywalker como mentor."
    },
    {
      nombre: "Luke Skywalker",
      img: "/assets/images/characters/lukeSkywalker.jpg",
      descripcion: "Luke Skywalker era un granjero de Tatooine que se elevó desde sus humildes comienzos hasta convertirse en uno de los Jedi más grandes " + 
      "que la galaxia haya conocido. Junto con sus amigos, la Princesa Leia y Han Solo, Luke luchó contra el malvado Imperio, descubrió la verdad de su ascendencia " + 
      "y terminó con la tiranía de los Sith. Una generación más tarde, la ubicación del famoso maestro Jedi fue uno de los mayores misterios de la galaxia. " + 
      "Atormentado por la caída del mal de Ben Solo y convencido de que el Jedi tenía que terminar, Luke buscó el exilio en un mundo distante, ignorando los ruegos de ayuda de la galaxia. " + 
      "Pero su soledad sería interrumpida, y Luke Skywalker tuvo un último y trascendental papel en la lucha entre el bien y el mal."
    },
    {
      nombre: "Leia Organa",
      img: "/assets/images/characters/leiaSky.jpg",
      descripcion: "La Princesa Leia Organa fue una de las líderes más grandes de la Alianza Rebelde, valiente en el campo de batalla y dedicada a acabar con la tiranía " + 
      "del Imperio. Hija de Padmé Amidala y Anakin Skywalker, hermana de Luke Skywalker, y con una debilidad por los sinvergüenzas, Leia se encuentra entre los grandes héroes de la galaxia. " + 
      "Pero la vida bajo la Nueva República no ha sido fácil para Leia. Debilitada por una nueva generación de líderes políticos, se lanzó por su cuenta para oponerse a la Primera Orden como fundadora de la Resistencia. " + 
      "Estos reveses en su carrera política han sido acompañados por más pérdidas personales."
    },
    {
      nombre: "Han Solo",
      img: "/assets/images/characters/hanSolo.jpg",
      descripcion: "Han Solo resurgió de una infancia empobrecida en las mezquinas calles de Corellia para convertirse en uno de los héroes de la Alianza Rebelde. " + 
      "Como capitán del Halcón Milenario, Han y su copiloto Chewbacca llegaron a creer en la causa de la libertad galáctica, uniéndose a Luke Skywalker y la Princesa Leia Organa " + 
      "en la lucha contra el Imperio. Después de la Batalla de Endor, Han se enfrentó a tiempos difíciles en una galaxia caótica, lo que llevó a una confrontación demoledora con su hijo Ben."
    },
    {
      nombre: "Chewbacca",
      img: "/assets/images/characters/chewbacca.jpeg",
      descripcion: "Durante su larga vida, Chewbacca ha sido muchas cosas: guerrero wookiee, contrabandista de as y héroe rebelde. Chewie luchó con la República en Kashyyyk " + 
      "durante las Guerras Clon, luego se hizo amigo de Han Solo mientras estaba en cautiverio Imperial en Mimban. Después de aventuras en Vandor y Kessel, se convirtió en el copiloto de Han a bordo " + 
      "del Halcón Milenario, y eventualmente ayudó a la Alianza a restaurar la libertad en la galaxia. Conocido por su temperamento corto y su precisión con un lanzador de arco, Chewie también tenía un gran corazón " + 
      "y una lealtad inquebrantable hacia sus amigos. Se mantuvo con Han a través de años de agitación, y voló el Halcón junto a Rey después de la muerte del Corellian."
    },
    {
      nombre: "Padmé Amidala",
      img: "/assets/images/characters/padme.jpeg",
      descripcion: "Padmé Amidala era una líder valiente y esperanzada, que se desempeñaba como reina y luego como senadora de Naboo, " + 
      "y también era útil con un sable laser. A pesar de sus ideales y todo lo que hizo por la causa de la paz, su matrimonio secreto " + 
      "y prohibido con el Jedi Anakin Skywalker probaría tener consecuencias nefastas para la galaxia."
    },
    {
      nombre: "Yoda",
      img: "/assets/images/characters/yoda.jpg",
      descripcion: "Yoda era un Maestro Jedi legendario y más fuerte que la mayoría en su conexión con la Fuerza. " + 
      "De tamaño pequeño pero sabio y poderoso, entrenó a Jedi durante más de 800 años, desempeñando papeles integrales en las Guerras de Clones, " + 
      "la instrucción de Luke Skywalker y abriendo el camino a la inmortalidad."
    },
    {
      nombre: "Darth Sidious",
      img: "/assets/images/characters/darthSidious.jpg",
      descripcion: "Arrebatador, poderoso y malvado en el centro, Darth Sidious restauró a los Sith y destruyó la Orden Jedi. " + 
      "Viviendo una doble vida, Sidious era, de hecho, Palpatine, un senador de Naboo y una amenaza fantasma. " + 
      "Lentamente manipuló el sistema político de la República Galáctica hasta que fue nombrado Canciller Supremo, " + 
      "y finalmente Emperador, gobernando la galaxia a través del miedo y la tiranía."
    },
    {
      nombre: "R2-D2",
      img: "/assets/images/characters/r2d2.jpeg",
      descripcion: "Un droide astromecánico ingenioso, R2-D2 sirvió a Padmé Amidala, Anakin Skywalker y Luke Skywalker a su vez, " + 
      "mostrando gran valentía al rescatar a sus amos y sus amigos de muchos peligros. Mecánico de nave estelar experto y asistente de piloto de combate, " + 
      "formó una amistad improbable pero duradera con el quisquilloso droide de protocolo C-3PO."
    },
    {
      nombre: "C-3PO",
      img: "/assets/images/characters/c3po.jpeg",
      descripcion: "C-3PO es un droide programado para la etiqueta y el protocolo, construido por el heroico Jedi Anakin Skywalker y un compañero " + 
      "constante de astromecánico R2-D2. A lo largo de los años, estuvo involucrado en algunos de los momentos más decisivos de la galaxia y emocionantes batallas, " + 
      "y habla con fluidez más de siete millones de formas de comunicación. En los años posteriores a la derrota del Imperio, C-3PO sirvió a Leia Organa, convirtiéndose en el jefe " + 
      "de un anillo de espías de la Resistencia destinado a socavar la Primera Orden."
    },
    {
      nombre: "Rey",
      img: "/assets/images/characters/rey.jpeg",
      descripcion: "Una carroñera endurecida por la vida en los duros desiertos de Jakku, Rey ha sido arrastrada a un conflicto " +  
      "que abarca toda la galaxia y ha aprendido que su vida está siendo moldeada por el misterioso poder de la Fuerza. " + 
      "Ella busca a Luke Skywalker, el Maestro Jedi perdido, con la esperanza de que ayudará a la Resistencia contra la Primera Orden y " + 
      "la ayudará a controlar sus crecientes poderes. Pero cuando esa búsqueda termina en decepción, Rey debe encontrar un nuevo camino a seguir."
    },
    {
      nombre: "Kylo Ren",
      img: "/assets/images/characters/kylo.jpeg",
      descripcion: "Hijo de Han Solo y Leia Organa, Ben Solo fue seducido por el lado oscuro de la Fuerza y ​​se renombró Kylo Ren, " + 
      "convirtiéndose en el campeón de la Primera Orden y el estudiante del Líder Supremo Snoke. Kylo mató a su padre y busca destruir " + 
      "la Resistencia de su madre y los remanentes de la Orden Jedi. Aunque es un servidor del lado oscuro, todavía lucha contra el tirón del lado luminoso de la Fuerza."
    },
    {
      nombre: "Supreme Leader Snoke",
      img: "/assets/images/characters/snoke.jpeg",
      descripcion: "El Líder Supremo de la Primera Orden, el misterioso Snoke no tiene una base permanente de operaciones, prefiriendo contactar " + 
      "a sus subordinados desde un puesto de comando móvil. Snoke es poderoso con el lado oscuro de la Fuerza, y sedujo a Ben Solo a abandonar el camino Jedi " + 
      "para convertirse en su aprendiz. Pero Snoke también comanda al General Hux y la máquina de guerra tecnológica que la Primera Orden ha diseñado para destruir " + 
      "la Resistencia de la Nueva República y Leia Organa. Snoke usó la Fuerza para conectar a Ben y Rey con la esperanza de encontrar el planeta del exilio de Luke Skywalker. " + 
      "Su plan tuvo éxito, pero Ben se volvió hacia él, partiéndolo en dos con el sable de luz de Skywalker."
    },
    {
      nombre: "Finn",
      img: "/assets/images/characters/finn.jpeg",
      descripcion: "FN-2187 fue entrenado desde su nacimiento para servir a la Primera Orden como soldado de asalto, pero una escaramuza en Jakku despertó su conciencia " +  
      "y lo llevó por un camino diferente, uno que resultó heroico y peligroso. Ayudó a Poe Dameron a escapar de la Primera Orden -al recoger el apodo de Finn al hacerlo- " + 
      "y luego buscó su propia libertad junto a Rey y BB-8. Finn ayudó a la Resistencia a destruir la Base Starkiller, pero tuvo que decidir su verdadera lealtad: " + 
      "¿Seguiría luchando junto a los soldados de la Resistencia o buscaría reunirse con Rey y huir del conflicto galáctico? Al principio Finn trató de huir de la guerra, " + 
      "pero una misión junto a Rose Tico lo convenció de que tenía que comprometerse con la causa de la Resistencia."
    },
    {
      nombre: "Stormtroopers",
      img: "/assets/images/characters/stormtrooper.jpg",
      descripcion: "Los Stormtroopers son tropas de choque de élite fanáticamente leales al Imperio e imposibles de influir en la causa imperial. Usan una armadura blanca " + 
      "imponente, que ofrece una amplia gama de equipos de supervivencia y controles de temperatura para permitir que los soldados sobrevivan en casi cualquier entorno. " + 
      "Los Stormtroopers empuñan rifles blásteres y pistolas con gran habilidad y atacan en hordas para abrumar a sus enemigos. Junto con soldados de asalto estándar, el Imperio " + 
      "ha organizado varias unidades especializadas, incluidas tropas de nieve y soldados exploradores."
    },
    {
      nombre: "BB-8",
      img: "/assets/images/characters/bb8.jpeg",
      descripcion: "Un astromecánico asustadizo pero leal, BB-8 acompañó a Poe Dameron en muchas misiones para la Resistencia, ayudando a mantener su Ala-X en funcionamiento. " + 
      "Cuando la misión de Poe a Jakku terminó con su captura por la Primera Orden, BB-8 huyó al desierto con una pista vital de la ubicación del Maestro Jedi Luke Skywalker. " + 
      "Se reincorporó a Poe y al servicio de la Resistencia a tiempo para el ataque a la Base Starkiller, y luego ayudó a Rey a localizar el planeta del exilio de Skywalker."
    },
    {
      nombre: "Poe Dameron",
      img: "/assets/images/characters/poeDameron.jpeg",
      descripcion: "Comandante del cuerpo de cazas estelares de la Resistencia, Poe Dameron es uno de los agentes más confiables de Leia Organa. Un piloto de X-wing decorado, " + 
      "puede pilotar cualquier cosa, lo cual es una suerte dada la frecuencia con la que su naturaleza testaruda lo lleva a problemas. Poe lidera el ataque que destruye la Base Starkiller, " + 
      "pero pronto se encuentra huyendo de la Primera Orden. Al margen de su amado Ala-X, aprende lecciones difíciles sobre liderazgo, heroísmo y sacrificio."
    },
    {
      nombre: "Jyn Erso",
      img: "/assets/images/characters/jynErso.jpeg",
      descripcion: "Detrás de un pasado accidentado prestando sus habilidades a una causa mayor, Jyn Erso es impetuosa, desafiante y ansiosa por llevar la batalla al Imperio. " + 
      "Acostumbrada a operar sola, encuentra un propósito más elevado al asumir una misión desesperada para la Alianza Rebelde."
    }
  ]

  getPersonajes():Personaje[]{
    return this.personajes;
  }

  getPersonaje(index:number):Personaje{
    return this.personajes[index];
  }

  constructor() { }
  
}


export interface Personaje{
  nombre:string;
  img:string;
  descripcion:string;
}
