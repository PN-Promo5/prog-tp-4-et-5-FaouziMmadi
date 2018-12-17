function displayEvenElementsOfArray(array){
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    if (currentElmt % 2 === 0) {
      console.log(currentElmt + "even number.");
    } else {
      console.log(currentElmt + "odd number.");
    }
  }
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

displayEvenElementsOfArray(array);
