/* TO DO:

	- Create an array to hold three different usernames. 

	- Create an array with the dates of each review (i.e., 2024-10-30).

	- Create an array to hold the actual reviews. 

	- Create an array to hold three different ratings. 

*/

/* TO DO:

	- Select ALL review card elements and store in a variable.

	- Loop through each card to update its content with review information:
	  - Select the current review rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the review rating element's text to display the generated stars.
	  - Set the review rating element's attribute to current rating from the array. 

	  - Select the current review username element.
	  - Set its text to the username from the array and add a space to separate it from the date.

	  - Select the current review date element.
	  - Set its markup to the date from the array.

	  - Select the current review text element.
	  - Set its text to the review text from the array.
 
*/

const usernames = ["Joe", "Bob", "Sally"];
const reviewDates = ["2024-10-30", "2024-10-31", "2024-11-01"];
const reviews = [
    "Amazing movie! I loved the action!!",
    "A thrilling adventure in every scene",
    "This is a must watch"
];
const ratings = [5, 4, 4];

const reviewCards = document.querySelectorAll(".review-card");

for (let i = 0; i < reviewCards.length; i++) {
    const card = reviewCards[i];

    const ratingElement = card.querySelector(".review-rating");
    let stars = "";
    for (let j = 0; j < 5; j++) {
        stars += j < ratings[i] ? "★" : "☆";
    }
    ratingElement.textContent = stars;
    ratingElement.setAttribute("data-rating", ratings[i]);

    const usernameElement = card.querySelector(".review-username");
    usernameElement.firstChild.textContent = usernames[i] + " ";

    const dateElement = card.querySelector(".review-date");
    dateElement.textContent = reviewDates[i];

    const reviewText = card.querySelector(".review-text");
    reviewText.textContent = reviews[i];
}

const filterDropdown = document.querySelector("#rating-filter");
filterDropdown.addEventListener("change", function() {
	var selected_rating = filterDropdown.value;
    
    for (let i = 0; i < reviewCards.length; i++) {
        const card = reviewCards[i];
        const cardRating = card.querySelector(".review-rating").getAttribute("data-rating");
        
        if (selectedRating === "All" || cardRating === selectedRating) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
});