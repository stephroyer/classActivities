const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firstA= arr.indexOf("a");
const firstB= arr.indexOf("b");
const firstC= arr.indexOf("c");

// find the last index of "a", "b", and "c"
 const lastA= arr.indexOf("a");
 const lastB= arr.indexOf("b");
 const lastC= arr.indexOf("c");
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
while(arr.indexOf["a"] !==arr.lastIndexOf["a"]){
  const lastindex =arr.lastIndexOf("a")
  arr.splice(lastindex, 1)
}
console.log(arr)
