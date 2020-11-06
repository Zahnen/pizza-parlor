//Business Logic
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addToppings = function(toppings) {
  (this.toppings).push(toppings)
}

Pizza.prototype.calcPrice = function(size, toppings) {
  let total = 10
  if (this.size === "medium") {
    total += 4;
  } else if (this.size === "large") {
    total += 6;
  } else {
    total += 0;
  }
  for (let i=0; i < this.toppings.length; i++) {
    total +=1.5;
  }
  return total
}

//UI Logic


/*
Describe: Pizza ()
Test: should correctly create an instance of Pizza
Code: let size = "small";
Code: let pizza1 = new Pizza("small");
Code: let result = newPizza.size;
Expect: result.toEqual("small");

Describe: addToppings()Test: should add toppings to appropriate array within Pizza
Code: let size = "small";
Code: let pizza1 = new Pizza("small");
Code: pizza1.addToppings("cheese");
Code: let result = pizza1.toppings;
Expect: result.toEqual("cheese");

Describe: calcPrice()
Test: should calculate a price based on Pizza size and number of toppings
Code: let size = "small";
Code: let pizza1 = new Pizza("small");
Code: pizza1.addToppings("cheese", "olives");
Code: let result = pizza1.calcPrice();
Expect: result.toEqual("18");
*/