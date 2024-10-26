// Get references to HTML elements
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceDisplay = document.getElementById('total-price');

// Task 2: Function to update price display based on selected product
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

// Event listener for Task 2: Update price when product is selected
productSelector.addEventListener('change', updatePriceDisplay);

// Event listeners for Task 3: Update total price when product or quantity changes
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);
