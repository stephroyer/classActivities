//write a function that output your favorite drink,you must use a parameter for the name



function MyFavoriteJuice(juice){
 console.log(juice);

}
MyFavoriteJuice(`lemon` )


// Write a function that outputs your favorite pizza toppings and returns your favorite pizza brand
// Hint: use a rest parameter
function MyfavoritePizza (brand,  ...toppings){
  console.log("My favorite pizza is " +toppings);
  return brand;

}
 const pizzabrsnd =MyfavoritePizza("Domino's" , "cheese")
 console.log("i love pizza from " +pizzabrsnd)

// Write a function that multipys two numbers... set the both numbers to default to 1.

function multipys( numb1=2, numb2=4){
  console.log(numb1*numb2)

}multipys()
