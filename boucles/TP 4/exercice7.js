function countEvenElementsOfArray(array) {
  let i = 0;
  let currentElmt;
  let nbEvenElements = 0;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    if (currentElmt % 2 === 0) {
      nbEvenElements++;
    }
  }
  return nbEvenElements;
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let nbEvenElements = countEvenElementsOfArray(array);
console.log(nbEvenElements);
