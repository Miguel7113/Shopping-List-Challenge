# Shopping-List-Challenge

## How To Use

Upon entering the website. various drinks are shown with the option to add them to your shopping list which would be at the bottom of the page. Upon clicking 'Add to List' the button turns red and is only reverted after reloading the page as it is a DOM feature. 

An input field is added with a item name and item price box for any shopping list item that is not on the page

### HTML 

HTML is structured to link to the other pages in the heading l5 to l11. 
l13 starts the body and gives it a class for reference in css or cssgrid
l14 to l81 is a repeat for each item where a div is created and adding a specific item using img sources from assets folder, giving it a button that is linked to index.js and using the div class on each item I am able to link it to the css for styling and CSS grid for position of where i want the items on the website.

l82 to l86 is the shopping list div which has a header and button that is linked to js for functionality as well as a class for reference in the css files and similarly with its id

l90 to l94 is the input field which has a item name and a item price input in order to keep it as the same input as the items already on the website. 


### index.css

I use the id references from the HTML file to style each item.

### cssgrid.css

each item and field is placed into a grid container that i used to move to a speific place on the page

### index.js

l1 to l2 Includes the array used for storing the shopping list items
l4 to l8 is the function that will allow users to add items to the list. By using the parameters `itemName` and `itemPrice` and `button` we are able to create an object with that name and price.

ll11 to l16 adds the items to the `shoppingListItems` array that we had declared earlier then updates the shopping list using push.
An if statement is used to change the buttoncolor to red upon being triggered.

l23 to l44 is the function that will clear the current list on display, as well as iterating over the `shoppingListItems` array that creates a <li> for each item. It then adds an event listener for the purchased class when clicked and appends each list item to the shopping list in the DOM using shoppingList.appendChild(ListItem)

l47 to l52 is the event listener that will clear the `shoppingListItems` array upon click on the clear list button. It also updates the shopping list to reflect the empty list through the empty function `updateShoppingListDisplay()`

l55 to l61 is where the event listeners for the "Add to list" Buttons are attached. All buttons that have the linked class `liqour-info` are selected and a click event listener is added through recieving the item name from the <h2> element then recieves the parses for the item price from the <p> element and calls back to `addToList` with the parameters name, price and button.

l66 to l72 is the input bar functionality. It first adds an event listener to the button wit the ID `add-item` then retrieves the values from the input fields for the item name and price. Validates that both item name and price are entered, calls `addToList` with the entered values. Clears the input field after the items are added. And shows an alert if the name or price is missing.

note: The input bar functionality function was referenced from liqour websites however they used arrow functions which im not profecient in so i used basic functions and an if else statement and the same with the add to list event listeners.


https://www.liquorshack.co.ke/ used for reference