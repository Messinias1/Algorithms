function chunkArrayInGroups(arr, size) {
 // empty array to add
 var newArray = [];
 var count = 0;
// while loop counter and increment index
 while(count < arr.length) {
   //add to newArray values between current index and size
   newArray.push(arr.slice(count, count + size));
   // increase count
   count = count + size;
 }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);