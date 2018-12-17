function isAnAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  } else {
    let string1Split = string1.split("");
    let string2Split = string2.split("");
    string1Split.sort();
    string2Split.sort();
    let i = 0;
    while (i < string1Split.length) {
      if(string1Split[i] !== string2Split[i]){
        return false;
      }
      i++;
    }
    return true;
  }
}
