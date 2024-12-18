document.addEventListener("DOMContentLoaded", function () {
    // Select the dropdown triggers
    var locationsDropdown = document.getElementById('locationsDropdown');
    var fishDropdown = document.getElementById('fishDropdown');


    // select home button
    var home = document.getElementById('Home');
    
    // Select the dropdown menus
    var locationsMenu = document.getElementById('locationsMenu');
    var fishMenu = document.getElementById('fishMenu');
    
    // Function to toggle dropdown visibility
    function toggleMenu(menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    // Event listeners for the dropdown triggers
    locationsDropdown.addEventListener('mouseover', function () {
        toggleMenu(locationsMenu);
        fishMenu.style.display = "none"; // Close other menu
    });

    fishDropdown.addEventListener('mouseover', function () {
        toggleMenu(fishMenu);
        locationsMenu.style.display = "none"; // Close other menu
    });

    // If hovering over home close both menu's
    home.addEventListener('mouseover', function () {
        locationsMenu.style.display = "none";
        fishMenu.style.display = "none";
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', function (event) {
        if (!event.target.matches('#locationsDropdown') && !event.target.matches('#fishDropdown')) {
            locationsMenu.style.display = "none";
            fishMenu.style.display = "none";
        }
    });
});