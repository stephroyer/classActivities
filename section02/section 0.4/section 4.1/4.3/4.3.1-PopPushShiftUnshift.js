const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let PopReturn =nums.pop();
console.log(PopReturn);
console.log(nums);

// remove each of the first two items with shift(), saving each item to a variable
let  shiftReturn=nums.shift();
console.log(shiftReturn);
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
let pushReturn=nums.push(9);
console.log(pushReturn);

let unshiftReturn=nums.unshift(-1);
console.log(unshiftReturn);
console.log(nums);
