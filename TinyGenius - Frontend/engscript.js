// JavaScript to toggle options
function toggleOptions(id) {
    const element = document.getElementById(id);
    element.style.display = element.style.display === "none" ? "block" : "none";
}

// JavaScript for game
const alphabetSounds = {
    'A': "A is for Apple", 
    'B': "B is for Ball",
    'C': "C is for Cat",
    // Add other letters as needed
};

function showGame() {
    document.getElementById("game-section").style.display = "block";
}

function startGame() {
    const randomLetter = Object.keys(alphabetSounds)[Math.floor(Math.random() * 3)];
    document.getElementById("game-instructions").textContent = `Type the letter: ${randomLetter}`;
    const inputField = document.getElementById("user-input");
    inputField.style.display = "block";
    inputField.value = '';
    inputField.focus();

    inputField.oninput = function () {
        const userAnswer = inputField.value.toUpperCase();
        if (userAnswer === randomLetter) {
            alert(`Great job! ${alphabetSounds[randomLetter]}`);
            startGame();
        }
    };
}
