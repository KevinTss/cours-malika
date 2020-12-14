<?php

/**
 * Le programme choisit 50 nombres aléatoires. Chaque nombre doit être compris
 * entre 1 et 100.
 * Votre programme doit donc utiliser la fonction Random que vous trouverez
 * sur internet (recherche à faire.
 * Ensuite le programme demande à l'utilisateur de donner un nombre de son
 * choix compris entre 1 et 100.
 * L'utilisateur gagnera de l'argent en fonction du tirage selon le nombre
 * de fois que son nombre apparaît dans la liste des nombres aléatoires
 * choisis préalablement par le programme.
 * Chaque fois que le nombre de l'utilisateur apparaît dans la liste des
 * nombres choisis préalablement par le programme, l'utilisateur gagnera 10 euros.
 * Ce gain se fera dans la pratique par un message de sortie du genre
 * "vous avez gagné 20 euro".
 *
 * Exemples :
 * - si le nombre apparaît 0 fois, le message de sortie sera "vous avez gagné 0 euro"
 * - si le nombre apparaît 4 fois, le message de sortie sera "vous avez gagné 40 euro"
 * - etc ...
 */

// On crée la fonction pour retourner un nombre aléatoire entre 1 et 100
function getRandomNumber() {
  return rand(1, 100);
}

// On rempli le tableau de 50 nombres aléatoire
$numbers = array();

// On rempli le tableau de 50 nombres aléatoire
for ($i = 0; $i < 50; $i++) {
  $numbers[] = getRandomNumber();
}

// On demande un nombre à l'utilisateur
echo "Entrez un nombre: ";
$userNumber = rtrim(fgets(STDIN));

// On initialise le nombre de match à 0
$matching = 0;

// On compare chacun des nombre aléeatoire avec le nombre de l'utilisateur
for ($i = 0; $i < 50; $i++) {
  // Si le nombre est identique on incrémente le compteur
  if ($userNumber == $numbers[$i]) {
    $matching++;
  }
}

$earnings = $matching * 10;
echo "Vous avez gagné $earnings €";
?>
