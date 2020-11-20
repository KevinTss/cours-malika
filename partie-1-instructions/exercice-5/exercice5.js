// 5. Demande les valeurs de x et y, et calcule z tel que y est la moyenne de x et z.

var x = Number(prompt('Entrez la valeur X:'));
var y = Number(prompt('Entrez la valeur Y:'));

// Calculer la moyenne de Y = (X + Z) / 2
var z = y * 2 - x;

alert('La moyenne de z est :' + z);
