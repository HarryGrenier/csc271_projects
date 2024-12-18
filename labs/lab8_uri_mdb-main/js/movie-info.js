/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

const favoriteMovie = [
    "Pirates of the Caribbean",
    "https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png",
    5,
    "A blacksmith teams up with an pirate to rescue the governor's daughter."
];

const movieImage = document.querySelector(".movie-image");
movieImage.src = favoriteMovie[1];
movieImage.alt = favoriteMovie[0];

const movieName = document.querySelector(".movie-name");
movieName.textContent = favoriteMovie[0];

const movieDescription = document.querySelector(".description");
movieDescription.textContent = favoriteMovie[3];

const ratingElement = document.querySelector(".rating");
let stars = "";
for (let i = 0; i < 5; i++) {
    stars += i < favoriteMovie[2] ? "★" : "☆";
}
ratingElement.textContent = stars;