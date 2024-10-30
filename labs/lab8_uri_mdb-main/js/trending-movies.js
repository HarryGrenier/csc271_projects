
const favorite_movies = ["Pirates of the Caribbean: The Curse of the Black Pearl","The Room","The Martian"];
const favorite_movie_posters = [
	"https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png",
	"https://upload.wikimedia.org/wikipedia/en/e/e1/TheRoomMovie.jpg",
	"https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg"
];

const favorite_movies_sites = [
	"Pirates_of_the_Caribbean.html",
	"",
	""
];
const movie_ratings = [3, 1, 4];


const movie_cards = document.querySelectorAll("div.movie-card");

for (let i = 0; i < movie_cards.length; i++) {
    const image = movie_cards[i].querySelector(".movie-image");
    image.src = favorite_movie_posters[i];
    image.alt = favorite_movies[i];

    const link = movie_cards[i].querySelector(".movie-link");
    link.href = favorite_movies_sites[i];
    link.textContent = favorite_movies[i];

    const ratingElement = movie_cards[i].querySelector(".rating");
    let stars = "";
    for (let j = 0; j < 5; j++) {
        stars += j < movie_ratings[i] ? "★" : "☆";
    }
    ratingElement.textContent = stars;
}