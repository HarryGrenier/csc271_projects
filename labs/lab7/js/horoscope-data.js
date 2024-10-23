var my_zodiac_sign = "sagittarius";
var my_birth_month = "December ";
var my_birthday = 6;
var my_lucky_num = 12;
var my_description = "Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie.";
var my_belief = false;
var mood_rating_me = 4.6;
var mood_rating_part1 = 3.3;
var mood_rating_part2 = 3.8;
var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
const statements = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];

document.getElementById("sign").innerHTML = my_zodiac_sign;

var birthday = document.getElementsByClassName("birthday");
var text = document.createTextNode(my_birth_month + my_birthday + "th");
birthday[0].appendChild(text);

var luckyNum = document.getElementsByClassName("luckyNum");
var text = document.createTextNode(my_lucky_num);
luckyNum[0].appendChild(text);

var paragraphs = document.getElementsByTagName("p");
for(let i = 0; i< paragraphs.length; i++){
    if(i == 0){
        paragraphs[i].innerHTML = my_description;
    }
    else if(i == 1){
        var text = document.createTextNode(my_belief);
        var bold = document.createElement("strong")
        bold.appendChild(text);
        paragraphs[i].appendChild(bold); 
    }
    else if(i == 2){
        rating = ((mood_rating_me + mood_rating_part1 + mood_rating_part2)/3);
        var text = document.createTextNode("Today's mood rating for " + my_zodiac_sign + ": " + mood_rating_me +" out of 5. The average mood rating of Aries, Libra, and Sagittarius is: " + rating);
        paragraphs[i].appendChild(text);
    }
    else if(i == 3){
        var text = document.createTextNode("My zodiac sign is: " + signs[11]);
        paragraphs[i].appendChild(text);
    }
    else if(i == 4){
        var text = document.createTextNode("Avery's zodiac sign is: " + signs[3]);
        paragraphs[i].appendChild(text);
    }
    else if(i == 5){
        var text = document.createTextNode("Rosalinda's zodiac sign is: " + signs[9]);
        paragraphs[i].appendChild(text);
    }
}

