function maxValueOfArray(array) {
  let i = 0;
  let currentElmt;
  let maxValue = array[0];
  while (i < array.length) {
    i++;
    currentElmt = array[i];
    if(currentElmt > maxValue){
      maxValue = currentElmt;
    }
  }
  return maxValue;
}

let array = [39,1,200,3,4,999,30,7,8,9,110];
let maxValue = maxValueOfArray(array);
console.log(maxValue);
