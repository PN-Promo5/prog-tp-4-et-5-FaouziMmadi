let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

function displayFirst10ElementsArray(array) {
  i = 0;
  let currentElmt;

  while (i < 10) {
    currentElmt = array[i]
    i++
    if (currentElmt === undefined) {
      return;
    }
console.log(currentElmt);
  }

}


displayFirst10ElementsArray(array);
