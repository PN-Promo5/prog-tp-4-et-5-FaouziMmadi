let array = ['1', '2', '3', '4', '5', '6', '7', '8', '8', '9', '10', '11', '12', '13', '14','15','16'];


function displayLast10ElementsArray(array) {
  i = 0;
  let currentElmt;

  if (array.length <= 10) {
    while (i < array.length) {
      currentElmt = array[i];
      i++;
      console.log(currentElmt);
    }
  } else {
    while (i < 10) {
      currentElmt = array[array.length - 10 + i];
      i++;
      console.log(currentElmt);
    }
  }
}



displayLast10ElementsArray(array);
