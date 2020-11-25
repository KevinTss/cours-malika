/**
 * Pour un professeur qui voudrait analyser les cotes d’une interro,
 * écrivez un programme qui demande le nombre de cotes de l’interro,
 * qui demande ensuite au professeur d’entrerces cotes et qui affiche la moyenne
 * des cotes, et quelle est la plus petite cote, ainsi que laplus grande.
 */

// Demander le nombre de cotes
var nombre_de_cotes = Number(prompt('Entrez le nombre de cotes:'));

var total_des_cotes = 0;
var cote_minimum = null;
var cote_maximum = null;

var tour = 1;
while (tour <= nombre_de_cotes) {
  // Demander la cote
  var cote = Number(prompt('Entre la ' + tour + 'er/ère cotes:'));

  // Ajouter la cote à la somme totale
  total_des_cotes = total_des_cotes + cote;

  // Ajouter la cote minimum si c'est le cas, ou si c'est la première fois
  if (cote_minimum === null || cote < cote_minimum) {
    cote_minimum = cote;
  }

  // Ajouter la cote maximum si c'est le cas, ou si c'est la première fois
  if (cote_maximum === null || cote > cote_maximum) {
    cote_maximum = cote;
  }

  // Augmenter tour de 1
  tour++;
}

// Calculer la moyenne
var moyenne = total_des_cotes / nombre_de_cotes;

// Afficher le nombre totale de voiture vendue
alert(
  `
  Vous avez encodé ${nombre_de_cotes} cotes:
  - La moyenne est ${moyenne}
  - La meilleur cote est ${cote_maximum}
  - La moins bonne cote est ${cote_minimum}
  `
);
