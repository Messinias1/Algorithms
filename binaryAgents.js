function binaryAgent(str) {
  var split = str.split(' ');
  var newArray = [];
  var result = [];
  
  for(var i = 0; i < split.length; i++) {
    
    newArray.push(parseInt(split[i], 2));
    result.push(String.fromCharCode(newArray[i]));
    
  }
  
  return result.join('');
}