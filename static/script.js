const selectedNames = [];
const sound = document.getElementById("roll-sound");
const button = document.getElementById("select-button");
const cards = [
    document.getElementById("guest-1"),
    document.getElementById("guest-2"),
    document.getElementById("guest-3"),
    document.getElementById("guest-4"),
];

let guests = []; // Array to hold guest names

// Fetch the guest names from the server
fetch('/guests')
    .then(response => response.json())
    .then(data => {
        guests = data; // Assign the fetched names to the guests array
        
        // Populate owner names into the cards
        for (let i = 0; i < guests.length; i++) {
            const ownerNameElement = cards[i].querySelector('.owner-name');
            ownerNameElement.textContent = guests[i]; // Set the owner name
        }
    });

button.addEventListener("click", () => {
    if (guests.length === 0) return; // Ensure names are loaded
    sound.play(); // Play sound
    button.disabled = false; // Disable button during selection
    selectedNames.length = 0; // Clear previous selections

    // Start the name selection animation
    const startIndex = Math.floor(Math.random() * guests.length); // Get a random starting index

    for (let i = 0; i < cards.length; i++) {
        const ownerName = cards[i].querySelector('.owner-name').textContent; // Get the owner name
        cards[i].querySelector('.selected-name').textContent = ownerName; // Start with the owner name
        
        // Rolling effect
        let rollCount = 20; // Number of rapid rolls
        let rollingInterval = setInterval(() => {
            let index = Math.floor(Math.random() * guests.length);
            const selectedName = guests[index];
            if (selectedName !== ownerName) {
                cards[i].querySelector('.selected-name').textContent = selectedName; // Display random name
            }
        }, 25); // Change every 50 ms

        // Slow down the rolling and finalize the selection
        setTimeout(() => {
            clearInterval(rollingInterval);
            const finalIndex = (startIndex + i) % guests.length; // Calculate the final index
            let finalName = guests[finalIndex];

            // Ensure the final name is different from the owner name
            while (finalName === ownerName) {
                finalName = guests[(finalIndex + 1) % guests.length]; // Move to the next index
            }
            
            cards[i].querySelector('.selected-name').textContent = finalName; // Set final selected name
        }, 3000); // Rolling for 2 seconds
    }

    // Re-enable button after selection
    setTimeout(() => {
        button.disabled = false;
    }, 3000);
});
