document.addEventListener('DOMContentLoaded', function() {
    function addToList(itemName, itemPrice, button) {
        // Get the shopping list element
        const shoppingList = document.getElementById('shopping-list');

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = itemName + " - ksh " + itemPrice;

        // Add an event listener to mark item as purchased
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('purchased');
        });

        // Add the new list item to the shopping list
        shoppingList.appendChild(listItem);

        // Change button color to red when clicked
        button.style.backgroundColor = 'red';
    }

    // Attach event listener to the "Clear List" button
    document.getElementById('clear-list').addEventListener('click', function() {
        document.getElementById('shopping-list').innerHTML = '';
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

    // Expose the addToList function to the global scope
    window.addToList = addToList;
});
