function copyArrayElementsPlus1(array) {
  let i = 0;
  let currentElmt;
  let copyArray = [];
  while (i < array.length) {
    currentElmt = array[i] + 1;
    i++;
    copyArray.push(currentElmt);
  }
  return copyArray;
}

let array = [1,2,4,6,8,12,18,24,30];

console.log(copyArrayElementsPlus1(array));
