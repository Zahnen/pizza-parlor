function Pizza (size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addToppings = function(toppings) {
  (this.toppings).push(toppings)
}

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
*/