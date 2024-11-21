// Define a FishingData class
function FishingData(species, minimumSize, season, possessionLimit, noBorder = false) {
    this.species = species;
    this.minimumSize = minimumSize;
    this.season = season;
    this.possessionLimit = possessionLimit;
    this.noBorder = noBorder;

    // Method to determine if the border should be removed
    this.applyNoBorder = function(rowElement) {
        if (this.noBorder) {
            rowElement.classList.add("no-border"); // Add the no-border class
        }
    };
}


// Array of fishing data objects
const fishingData = [
    new FishingData("American eel", "9\"", "1/1 - 12/31", "25 eels/person/day<br>50 eels/vsl/day for licensed party/charter vessels"),
    new FishingData("American plaice (dab)", "14\"", "1/1 - 12/31", "No limit"),
    new FishingData("Black Sea Bass (General Recreational)", "16.5\"", "5/22 - 8/26", "2 fish/person/day"),
    new FishingData("Bluefish", "No minimum", "1/1 - 12/31", "3 fish/person/day"),
    new FishingData("Cod", "23\"", "1/1 - 5/31", "5 fish/person/day",true),
    new FishingData("", "", "6/1 - 8/31", "Closed",true),
    new FishingData("", "", "9/1 - 12/31", "5 fish/person/day"),
    new FishingData("Summer Flounder (Fluke)", "19\"", "4/1 - 12/31", "6 fish/person/day"),
    new FishingData("Monkfish (Goosefish)", "17\" whole<br>11\" tail", "1/1 - 12/31", "50 lbs tails/day or 166 lbs whole/day"),
    new FishingData("Haddock", "18\"", "1/1 - 12/31", "No limit"),
    new FishingData("Pollock", "19\"", "1/1 - 12/31", "No limit"),
    new FishingData("Skate", "No minimum", "1/1 - 12/31", "10 fish/person/day"),
    new FishingData("Striped Bass", "28\"-31\"", "1/1 - 12/31", "1 fish/person/day"),
    new FishingData("Tautog", "16\"<br>Only one fish may be greater than 21\"<br>Max of 10 fish/vsl during all periods", "4/1 - 5/31", "3 fish/person/day",true),
    new FishingData("", "", "6/1 - 7/31", "Closed",true),
    new FishingData("", "", "8/1 - 10/14", "3 fish/person/day",true),
    new FishingData("", "", "10/15 - 12/31", "5 fish/person/day"),
    new FishingData("Weakfish (Squeteague)", "16\"", "1/1 - 12/31", "1 fish/person/day"),
    new FishingData("Winter Flounder (Blackback)", "12\"", "3/1 - 12/31", "2 fish/person/day"),
    new FishingData("Witch Flounder (Gray Sole)", "14\"", "1/1 - 12/31", "No limit"),
    new FishingData("Yellowtail Flounder", "13\"", "1/1 - 12/31", "No limit")
];

// Function to populate the table
function populateTable(data) {
    const tableBody = document.querySelector("#fishingTable tbody");

    data.forEach(item => {
        const row = document.createElement("tr");

        // Add data to the row
        row.innerHTML = `
            <td>${item.species || ""}</td>
            <td>${item.minimumSize || ""}</td>
            <td>${item.season || ""}</td>
            <td>${item.possessionLimit || ""}</td>
        `;

        // Apply no-border logic using the applyNoBorder method
        item.applyNoBorder(row);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}



// Populate the table on page load
populateTable(fishingData);
