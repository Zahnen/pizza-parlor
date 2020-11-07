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
  $("form#orderAgain").submit(function(event) {
    event.preventDefault();
    location.reload();
  });
});
