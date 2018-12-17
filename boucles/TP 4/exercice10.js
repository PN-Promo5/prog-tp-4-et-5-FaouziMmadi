function isOrdered(array){
  let i = 1;
  let currentElmt;
  while (i < array.length) {
    currentElmt = array[i];
    if(currentElmt < array[i-1]){
      return false;
    }
    i++;
  }
  return true;
}

let array = [11,22,33,44,55,66,77,88,99,111];
let array2 = [55,44,99,77,2,15,18,4,11];

console.log(isOrdered(array));
console.log(isOrdered(array2));
