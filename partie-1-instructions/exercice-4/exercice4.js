// 4. Demande trois valeurs et en affiche la moyenne.

var val1 = Number(prompt('Entrez la valeur 1:'));
var val2 = Number(prompt('Entrez la valeur 2:'));
var val3 = Number(prompt('Entrez la valeur 3:'));

// Calculer la moyenne
var moyenne = (val1 + val2 + val3) / 3;

alert(
  'La moyenne de ' + val1 + ' et ' + val2 + 'et' + val3 + ' est :' + moyenne
);
