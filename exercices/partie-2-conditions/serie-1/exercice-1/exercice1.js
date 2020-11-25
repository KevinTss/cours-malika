/**
 * Pour notre garagiste, écrivez un programme qui calcule le nombre de voitures
 * vendues sur une période.
 * Le garagiste calculera lui-même au préalable le nombre de jours de la période.
 * Le programme doit donc lui demander le nombre de jours de la période,
 * ainsi que les nombres de voitures vendue pour chaque jour de la période.
 * Le programme va ensuite calculer puis afficher le nombre total de voitures
 * vendues dans la période.
 */

// Demander le nombre de jours
var nombre_de_jour = Number(prompt('Entrez le nombre de jours'));

var voiture_vendue_totale = 0;
var tour = 1;
while (tour <= nombre_de_jour) {
  // Demander le nombre de voiture vendue pour le jour x
  var voiture_vendue = Number(
    prompt('Entre le nombre de voiture vendue pour le jour ' + tour)
  );

  // Ajouter les voitures vendue à la somme totale
  voiture_vendue_totale = voiture_vendue_totale + voiture_vendue;

  // Augmenter tour de 1
  tour++;
}

// Afficher le nombre totale de voiture vendue
alert(
  'Vous avez vendu ' +
    voiture_vendue_totale +
    ' voiture(s) en ' +
    nombre_de_jour +
    ' jours.'
);
