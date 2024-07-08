document.addEventListener('DOMContentLoaded', function() {
    let shoppingListItems = [];

    function addToList(itemName, itemPrice, button) {
        // Create a new list item object
        let listItem = {
            name: itemName,
            price: itemPrice
        };

        // Add the item to the shopping list array
        shoppingListItems.push(listItem);

        // Update the displayed shopping list
        updateShoppingListDisplay();

        // Change button color to red when clicked
        button.style.backgroundColor = 'red';
    }

    function updateShoppingListDisplay() {
        // Get the shopping list element
        const shoppingList = document.getElementById('shopping-list');

        // Clear the current list display
        shoppingList.innerHTML = '';

        // Display each item in the shopping list array
        shoppingListItems.forEach(function(item, index) {
            // Create a new list item element
            let listItem = document.createElement('li');
            listItem.textContent = item.name + " - ksh " + item.price;

            // Add an event listener to mark item as purchased
            listItem.addEventListener('click', function() {
                listItem.classList.toggle('purchased');
            });

            // Add the new list item to the shopping list
            shoppingList.appendChild(listItem);
        });
    }

    // Attach event listener to the "Clear List" button
    document.getElementById('clear-list').addEventListener('click', function() {
        // Clear the shopping list array
        shoppingListItems = [];
        
        // Update the displayed shopping list
        updateShoppingListDisplay();
    });

    // Attach event listeners to all "Add to List" buttons
    let buttons = document.querySelectorAll('.liquor-info button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let itemName = this.parentElement.querySelector('h2').textContent;
            let itemPrice = parseInt(this.parentElement.querySelector('p').textContent.replace('Price: ksh ', '').replace(',', ''));
            addToList(itemName, itemPrice, this);
        });
    });
});
