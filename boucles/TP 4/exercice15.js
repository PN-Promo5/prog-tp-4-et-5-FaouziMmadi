function isAPalindrome(string){
  let i = 0;
  let currentElmt;
  let currentElmt2;

  while(i < string.length / 2){
    currentElmt = string[i];
    currentElmt2 = string[string.length-1-i];
    i++;

    if(currentElmt != currentElmt2){
      return false;
    }
  }
  return true;
}
