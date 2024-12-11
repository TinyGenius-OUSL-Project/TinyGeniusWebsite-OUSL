//Quiz for Alphabet and phonix
const quizQuestions = [
    { question: "Which letter comes after A?", options: ["B", "C", "D", "E"], answer: "B" },
    { question: "Which letter comes after D?", options: ["C", "E", "F", "G"], answer: "E" },
    { question: "Which letter comes before F?", options: ["E", "D", "C", "B"], answer: "E" },
    { question: "Which letter comes after K?", options: ["A", "X", "L", "B"], answer: "L" },
    { question: "Which letter comes before I?", options: ["Z", "H", "B", "C"], answer: "H" }
];

let currentQuestionIndex = 0;
let score = 0;
let attemptsLeft = 2;

function toggleOptions(id) {
    const element = document.getElementById(id);
    element.style.display = element.style.display === "none" ? "block" : "none";
}

function openQuiz1() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("QuizModal").style.display = "block";
}

function closeQuiz() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("QuizModal").style.display = "none";
}

function startQuiz() {
    if (attemptsLeft <= 0) {
        alert("You have reached the maximum attempts.");
        closeQuiz();
        return;
    }

    currentQuestionIndex = 0;
    score = 0;

    // Hide welcome message and start button
    document.getElementById("Quiz-message").style.display = "none";
    document.getElementById("start-Quiz-btn").style.display = "none"; // Hide the start button
    document.getElementById("Quiz-area").classList.remove("hidden");
    document.getElementById("end-message").classList.add("hidden");

    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-btn").disabled = true;
    document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(selectedOption, button) {
const question = quizQuestions[currentQuestionIndex];

// Reset any previous styles from the last question
const buttons = document.querySelectorAll('#options-container button');
buttons.forEach(button => {
button.disabled = true;  // Disable all buttons after the answer is selected
});

// If the selected answer is correct
if (selectedOption === question.answer) {
score++;
button.classList.add("correct-answer"); // Apply correct answer class
console.log("Correct answer selected");
} else {
attemptsLeft--;
button.classList.add("wrong-answer"); // Apply wrong answer class
console.log("Wrong answer selected");
}

// After selecting an answer, enable the "Next" button
document.getElementById("next-btn").disabled = false;
document.getElementById("next-btn").classList.remove("hidden");
}




function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("Quiz-area").classList.add("hidden");
    document.getElementById("end-message").classList.remove("hidden");
    document.getElementById("final-score-message").textContent = `You scored ${score} out of ${quizQuestions.length}.`;
    localStorage.setItem('alphabetQuizScore', score);
    console.log('Score saved:', score);
// Optionally, disable further attempts or show a reset option
}
document.getElementById("start-Quiz-btn").onclick = startQuiz;
document.getElementById("next-btn").onclick = nextQuestion;




