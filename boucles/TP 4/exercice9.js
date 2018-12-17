function displayMaxAndMinValuesOfArray(array){
  let i = 0;
  let currentElmt;
  let maxValue = array[0];
  let minValue = array[0];
  while (i < array.length) {
    i++;
    currentElmt = array[i];
    if(currentElmt > maxValue){
      maxValue = currentElmt;
    }
    if (currentElmt < minValue) {
      minValue = currentElmt;
    }
  }
  console.log("Minimum = "+ minValue);
  console.log("Maximum = "+ maxValue);
}

let array = [9,0,2,66,26,5,0,55,78,8,9,10,27];
displayMaxAndMinValuesOfArray(array);
