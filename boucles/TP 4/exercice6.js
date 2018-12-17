function sumAllElementsArray(array) {
  let i = 0;
  let currentElmt;
  let sum = 0;
  while (i < array.length) {
    currentElmt = array[i];
    i++;
    sum += currentElmt;
  }
  return sum;
}

let array = [1,2,3,4,5,6,7,8,9,10];
let sum = sumAllElementsArray(array);
console.log(sum);
