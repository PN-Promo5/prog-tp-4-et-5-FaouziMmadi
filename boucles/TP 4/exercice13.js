
function concatenate2Arrays(array1, array2) {
  let i = 0;
  let currentElmt;
  let concatenateArrays = [];

  while (i < array1.length) {
    currentElmt = array1[i];
    i++;
    concatenateArrays.push(currentElmt);
  }

  i = 0;

  while (i < array1.length) {
    currentElmt = array2[i];
    i++;
    concatenateArrays.push(currentElmt);
  }
  return concatenateArrays;
}
