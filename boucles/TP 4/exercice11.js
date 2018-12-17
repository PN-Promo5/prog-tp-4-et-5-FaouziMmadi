function copyArrayElementsPlus1(array) {
  let i = 0;
  let currentElmt;
  let copyArray = [0];
  let j;
  let canCopy;

  copyArray.push(array[0]);
  while (i+1 < array.length) {
    currentElmt = array[i+1];
    i++;
    j = 0;
    canCopy = true;
    while (j < copyArray.length) {
      if (currentElmt === copyArray[j]) {
        canCopy = false;
      }
      j++;
    }

  }
  return copyArray;
}

let array = [1,1,2,2,4,6,8,12,18,4,2,1,8,24,30];

console.log(copyArrayElementsPlus1(array));
