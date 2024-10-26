// Pricing constants
const basePrice = 100; // Base price per trip in USD
const discounts = { 1: 0, 2: 0.05, 3: 0.1 }; // Discounts: 5% for 2 trips, 10% for 3 trips

// Function to calculate price based on number of trips
function calculatePrice(numTrips) {
    const discount = discounts[numTrips];
    const totalPrice = (basePrice * numTrips) * (1 - discount);
    
    // Display the calculated price
    const priceDisplay = document.getElementById("priceDisplay");
    priceDisplay.textContent = `Total Price for ${numTrips} Trip(s): $${totalPrice.toFixed(2)}`;
}
