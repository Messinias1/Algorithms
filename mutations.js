function mutation(arr) {
  // lower case both strings for comparison purposes
  let wordOne = arr[0].toLowerCase();
  let wordTwo = arr[1].toLowerCase();
// length of 2nd word is important because we are iterating through its letters to see if they are in 1st word
  for (var i = 0; i < wordTwo.length; i++) {
    // value holder for character
    let value = wordOne.indexOf(wordTwo[i]);
    // -1 is the the result meaning its not contained in wordOne
    if (value === -1) {
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]);