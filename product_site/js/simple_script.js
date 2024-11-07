// Pricing constants
const discounts = { 1: 0, 2: 0.05, 3: 0.1 }; // Discounts: 5% for 2 trips, 10% for 3 trips

// Function to calculate price based on the number of trips
function calculatePrice(numTrips,basePrice) {
    const discount = discounts[numTrips] || 0;
    const totalPrice = (basePrice * numTrips) * (1 - discount);

    // Display the calculated price
    const priceDisplay = document.getElementById("priceDisplay");
    priceDisplay.textContent = `Total Price for ${numTrips} Trip(s): $${totalPrice.toFixed(2)}`;
}

// Generates seasonal message to display
function getSeasonalMessage() {
    const month = new Date().getMonth() + 1;
    if (month >= 5 && month <= 8) {
        return "Prime Fishing Season!";
    } else {
        return "Prepare for cooler waters.";
    }
}

// Function to display seasonal message
function displaySeasonalMessage() {
    // Call getSeasonalMessage to get the message
    const message = getSeasonalMessage();

    // Display the message in the designated element
    const seasonalMessage = document.getElementById("seasonalMessage");
    if (seasonalMessage) {
        seasonalMessage.textContent = message;
    }
}


// Loop to dynamically create a list of popular fish species
const fishList = ["Striped Bass", "Bluefish", "Fluke", "Black Sea Bass"];
function displayFishList() {
    const fishContainer = document.getElementById("popularFishList");
    fishList.forEach(fish => {
        let listItem = document.createElement("li");
        listItem.textContent = fish;
        fishContainer.appendChild(listItem);
    });
}

// While loop to display countdown to the next fishing season
function daysUntilSeasonStart() {
    const startSeason = new Date(new Date().getFullYear(), 4, 1); // Assuming May 1st
    const today = new Date();
    let daysLeft = Math.ceil((startSeason - today) / (1000 * 60 * 60 * 24));

    const countdown = document.getElementById("seasonCountdown");
    if (countdown) {
        countdown.textContent = daysLeft > 0 
            ? `Only ${daysLeft} days until the next fishing season!` 
            : "Fishing season is ongoing!";
    }
}

// Loop through a Nodelist of all dropdown menu links to add a custom style
function styleDropdownLinks() {
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    if (dropdownLinks.length > 0) {
        dropdownLinks.forEach(link => {
            link.style.color = "lightblue"; // Change link color to light blue
        });
    }
}

// Run functions on page load
window.onload = function() {
    displayFishList();
    daysUntilSeasonStart();
    styleDropdownLinks();
    displaySeasonalMessage();
};
