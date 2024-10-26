//main.js

// Get references to HTML elements
const productSelector = document.getElementById('product-selector');
const totalPriceDisplay = document.getElementById('total-price');

// Function to update price display based on selected product
function updatePriceDisplay() {
    const productPrice = parseFloat(productSelector.value);
    totalPriceDisplay.textContent = productPrice.toFixed(2); 
}

// Event listener for product selection
productSelector.addEventListener('change', updatePriceDisplay);
