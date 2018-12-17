function returnOnlyWordsBeginsWithAVowel(array) {
  let i = 0;
  let currentElmt;
  let beginWithAVowel;
  let wordsBeginsWithAVowel = [];

  while (i < array.length) {
    currentElmt = array[i];
    i++;
    beginWithAVowel = itBeginsWithAVowel(currentElmt);
    if (beginWithAVowel) {
      wordsBeginsWithAVowel.push(currentElmt);
    }
  }

  return wordsBeginsWithAVowel;
}

function itBeginsWithAVowel(word) {
  if (word.charAt(0).toUpperCase() === 'A' ||
    word.charAt(0).toUpperCase() === 'E' ||
    word.charAt(0).toUpperCase() === 'I' ||
    word.charAt(0).toUpperCase() === 'O' ||
    word.charAt(0).toUpperCase() === 'U' ||
    word.charAt(0).toUpperCase() === 'Y') {
    return true;
  } else {
    return false;
  }
}
