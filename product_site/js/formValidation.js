// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const yesRadio = document.getElementById("Yes");
    const noRadio = document.getElementById("No");
    const feedbackMessage = document.createElement("p");
    const errorMessage = document.createElement("p");

    // Add feedback message below the name input
    feedbackMessage.style.color = "blue";
    errorMessage.style.color = "red";
    nameInput.insertAdjacentElement("afterend", feedbackMessage);
    nameInput.insertAdjacentElement("afterend", errorMessage);

    // Focus event for name input
    nameInput.addEventListener("focus", function () {
        feedbackMessage.textContent = "Please enter your name. It cannot be blank.";
        errorMessage.textContent = ""; // Clear any previous error message
    });

    // Blur event for name input
    nameInput.addEventListener("blur", function () {
        const name = nameInput.value.trim();
        if (!name) {
            errorMessage.textContent = "Name cannot be blank. Please enter a valid name.";
        } else if (name.length < 3) {
            errorMessage.textContent = "Name must be at least 3 characters long.";
        } else {
            errorMessage.textContent = ""; // Clear error message if input is valid
        }
        feedbackMessage.textContent = ""; // Clear feedback message
    });

    // Add submit event listener to the form
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();

        if (!name || name.length < 3) {
            alert("Please enter a valid name before submitting.");
            return;
        }

        if (yesRadio.checked) {
            alert(`Nice!! ${name}`);
        } else if (noRadio.checked) {
            alert(`Give it another shot, ${name}`);
        } else {
            alert("Please select an option before submitting.");
            return;
        }

        // Display success message
        alert("Your responses were successfully recorded.");
    });
});
