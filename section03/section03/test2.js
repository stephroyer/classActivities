// Function to format toppings list with "and" before the last item
function listToppings(toppings) {
  if (toppings.length === 0) return "";
  if (toppings.length === 1) return toppings[0];
  if (toppings.length === 2) return `${toppings[0]} and ${toppings[1]}`;
  return `${toppings.slice(0, -1).join(", ")}, and ${toppings[toppings.length - 1]}`;
}

// Get pizza order with special message for cheese-only pizzas
function getPizzaOrder(size, crust, ...toppings) {
  if (toppings.length === 0) {
    console.log(`One ${size} ${crust} crust cheese pizza coming up!`);
  } else {
    console.log(`One ${size} ${crust} crust pizza with ${listToppings(toppings)} coming up!`);
  }
  return [size, crust, toppings];
}

// Prepare pizza (simple function for now)
function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

// Serve pizza with correct grammar for plain cheese
function servePizza(pizza) {
  if (pizza.toppings.length === 0) {
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust cheese pizza. Enjoy!`);
  } else {
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${listToppings(pizza.toppings)}. Enjoy!`);
  }
  return pizza;
}

// --- Example Usage ---

// Order with toppings
let orderWithToppings = getPizzaOrder("large", "thick", "pepperoni", "onions");
let cooked1 = preparePizza(orderWithToppings);
servePizza(cooked1);

// Cheese-only pizza
let cheeseOrder = getPizzaOrder("medium", "thin");
let cooked2 = preparePizza(cheeseOrder);
servePizza(cooked2);