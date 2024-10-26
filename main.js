// Get references to HTML elements
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceDisplay = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// Task 2: Function to update the base price display based on selected product
function updatePriceDisplay() {
    const productPrice = parseFloat(productSelector.value);
    totalPriceDisplay.textContent = productPrice.toFixed(2); 
}

// Task 3: Function to calculate and display total price based on product and quantity
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);

    const totalPrice = productPrice * quantity;
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

// Task 4: Function to display the order summary
function displayOrderSummary() {
    const productText = productSelector.options[productSelector.selectedIndex].text;
    const quantity = parseInt(quantityInput.value);
    const totalPrice = parseFloat(totalPriceDisplay.textContent);

    if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity greater than zero.");
        return;
    }

    // Display the summary with selected product, quantity, and total price
    orderSummary.textContent = `Order Summary: ${productText}, Quantity: ${quantity}, Total Price: $${totalPrice.toFixed(2)}`;
}

productSelector.addEventListener('change', updatePriceDisplay);
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);
placeOrderButton.addEventListener('click', displayOrderSummary);
