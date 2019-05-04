function reverseString(str) {
  // split the string into an array of character for each space of ""
  str = str.split("")
  // use array function reverse to reverse the values of index first to last and vice versa
  str = str.reverse()
  // reset to an array using array function join while removing commas with spaces
  str = str.join("")
  return str;
}

reverseString("hello");
reverseString("Howdy");