# _Zahnen's 'Za_

#### _A webpage to place a pizza order at Zahnen's 'Za, November 6, 2020_

#### By _**Zahnen Garner**_

## Description

_This webpage was created as my independent project for my fourth week at Epicodus. The webpage allows users to choose selections for a pizza order including the size of the pizza, toppings, and crust type. The webpage was created to apply concepts I learned this week which include constructors and objects._

## Setup/Installation Requirements

### If you would like to run the webpage on GitHub Pages
* _Open your browser_
* _Navigate to https://zahnen.github.io/pizza-parlor_
* _Place a pizza order by selecting your pizza's size, crust, and toppings_
* _Click 'Pizza Time!' to see an order confirmation and a total price_

### If you would like to run the webpage locally
* _Open your browser_
* _Navigate to https://github.com/Zahnen/pizza-parlor_
* _Click the green "Code" button toward the top right of the page_
* _Download the ZIP file by selecting this option in the dropdown menu_
* _Right click and extract the contents of the file to the location of your choosing_
* _Once extracted, open the directory you've just extracted._
* _Open the file titled "index.html"_
* _Place a pizza order by selecting your pizza's size, crust, and toppings_
* _Click 'Pizza Time!' to see an order confirmation and a total price_

  **OR**

* _Open your git-capable command line program (I recommend Terminal on Mac or Git Bash on PC)_
* _Ensure you are within the directory you'd like the file to be created in._
* _Enter the command "$ git clone https://github.com/Zahnen/pizza-parlor" in your command line_
* _Once cloned, use the "$ cd " command to navigate to the directory created in the previous step._
* _Once in the newly cloned directory, enter the command "$ start index.html" to open the webpage in your default browser._
* _Place a pizza order by selecting your pizza's size, crust, and toppings_
* _Click 'Pizza Time!' to see an order confirmation and a total price_

## Specs

**Describe: Pizza Object Constructor**

* _Test: should correctly create an instance of Pizza_
* _Code: let size = "small";_
* _Code: let pizza1 = new Pizza("small");_
* _Code: let result = newPizza.size;_
* _Expect: result.toEqual("small");_

**Describe: Add Toppings Function / addToppings()**

* _Test: should add toppings to appropriate array within Pizza_
* _Code: let size = "small";_
* _Code: let pizza1 = new Pizza("small");_
* _Code: pizza1.addToppings("cheese");_
* _Code: let result = pizza1.toppings;_
* _Expect: result.toEqual("cheese");_

**Describe: Price Calculation / addPrice()**
* _Test: should calculate a price based on Pizza size and number of toppings_
* _Code: let size = "small";_
* _Code: let pizza1 = new Pizza("small");_
* _Code: pizza1.addToppings("cheese", "olives");_
* _Code: let result = pizza1.addPrice();_
* _Expect: result.toEqual("18");_

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you notice a bug or require support, please reach out to me via email. I can be reached at zahnen@gmail.com_

## Technologies Used

_This webpage required use of the following programs/languages/libraries to create:_
* _GitBash_
* _Visual Studio Code_
* _GitHub_
* _GitHub Pages_
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

### License

*Licensed under MIT*


Copyright (c) 2020 **_Zahnen Garner_**