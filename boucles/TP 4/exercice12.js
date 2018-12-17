function reverseArray(array) {
  let i = 0;
  let currentElmt;
  let copyArray = [];

  while (i < array.length) {
    currentElmt = array.length - 1 - i;
    copyArray.push(array[currentElmt]);
    i++;
  }
  return copyArray;
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let copyArray = reverseArray(array);

function displayElementsArray(array) {
  let i = 0;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    console.log(currentElmt);
  }
}

displayElementsArray(copyArray);
