let array = [1,2,2,3,4,4,5,6,6,7,8,8,9,11,22,1,234,2,3,33,33]; //creation du tableau

function affichage(array) { // function to get all elements
  i = 0; // donner une valeur a l'indice
  let currentElmt; //creation du currentElmt
  while (i <array.length) {
    currentElmt = array[i];
    i++
    console.log(currentElmt);
    }
  }

affichage(array); //affichage de la fonction 
