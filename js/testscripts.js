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