function confirmEnding(str, target) {
// binding to compare end of string
let start = str.length - (target.length);
// if statement comparing end of string with target string
if (str.substr(start, str.length) == target) {
  return true;
} else {
  return false;
}
}

confirmEnding("Bastian", "n");