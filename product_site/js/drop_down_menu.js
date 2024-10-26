document.addEventListener("DOMContentLoaded", function () {
    // Select the dropdown triggers
    var locationsDropdown = document.getElementById('locationsDropdown');
    var fishDropdown = document.getElementById('fishDropdown');
    
    // Select the dropdown menus
    var locationsMenu = document.getElementById('locationsMenu');
    var fishMenu = document.getElementById('fishMenu');
    
    // Function to toggle dropdown visibility
    function toggleMenu(menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    // Event listeners for the dropdown triggers
    locationsDropdown.addEventListener('click', function (event) {
        event.preventDefault();
        toggleMenu(locationsMenu);
        fishMenu.style.display = "none"; // Close other menu
    });

    fishDropdown.addEventListener('click', function (event) {
        event.preventDefault();
        toggleMenu(fishMenu);
        locationsMenu.style.display = "none"; // Close other menu
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', function (event) {
        if (!event.target.matches('#locationsDropdown') && !event.target.matches('#fishDropdown')) {
            locationsMenu.style.display = "none";
            fishMenu.style.display = "none";
        }
    });
});