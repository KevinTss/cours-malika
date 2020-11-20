// 6. Demande les paramètres a et b d’une équation de droite y=ax+b
// Demande ensuite la valeur d’une abscisse et en calcule l’ordonnée sur la droite

var a = Number(prompt('Entrez la valeur A:'));
var b = Number(prompt('Entrez la valeur B:'));
var x = Number(prompt("Entrez la valeur de l'abscisse:"));

// Calculer l'équation de la droite y=ax+b
var y = a * x + b;

alert("L'abscisse est :" + y);
