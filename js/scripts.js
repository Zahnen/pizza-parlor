//Business Logic
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.addPrice = function() {
  let total = 10;
  if (this.size === "medium") {
    total += 4;
  } else if (this.size === "large") {
    total += 6;
  } else {
    total += 0;
  }
  for (let i=0; i < this.toppings.length; i++) {
    total +=1;
  }
  return total;
};

//UI Logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    let size = $("select#size").val();
    let crust = $("select#crust").val();
    let toppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    });
    let finalPizza = new Pizza (size, toppings);
    let cost = finalPizza.addPrice();
    $("#confirmation").fadeIn();
    $("#orderScreen").slideUp();
    $("#finalPizza").html("We'll be making you a " + size + " pizza with " + crust + " crust. If you added any toppings, they'll be listed below:")
    $("#finalToppings").html(toppings.join(" + "));
    $("#orderTotal").html("Your total will be $" + cost +".00");
  });
});

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

Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings)
};

//Cart Business Logic
function Cart (){
  this.pizzas = [];
  this.pieNum = 0;
}
Cart.prototype.addPizza = function (pizza) {
  pizza.pieNum = this.assignPieNum();
  this.pizzas.push(pizza)
}

Cart.prototype.assignPieNum = function() {
  this.pieNum += 1;
  return this.pieNum
}
*/