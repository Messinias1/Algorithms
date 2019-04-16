function truncateString(str, num) {
  // get str length
  // check if str length is greater than given string length
  //use substring/slice to return till the given length
  var resultString = "";
  //console.log(str.length);
  if(str.length > num) {
   resultString = str.slice(0, num) + "...";
  } else {
    resultString = str;
  }

  return resultString;
}

truncateString("A-tisket a-tasket A green and yellow basket".length + 2);