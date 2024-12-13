// Quiz for different topics
const quizTopics = {
    "Pre-Mathematical Skills": [
        { question: "What comes next in this pattern? \nCircle, Square, Circle, Square, ___", options: ["Triangle", "Circle", "Square", "Star"], answer: "Circle" },
        { question: "Which group has more objects?", options: ["3 apples", "5 apples"], answer: "5 apples" },
        { question: "Point to the taller object", options: ["Tree", "Flower"], answer: "Tree" },
        { question: "Which is smaller?", options: ["marble", "ball"], answer: "marble" },
        { question: "If you eat 2 cookies and have 1 left, how many did you start with?", options: ["1", "3", "2", "4"], answer: "3" }
    ],
    "Numbers": [
        { question: "What number comes after 8?", options: ["7", "9", "10", "6"], answer: "9" },
        { question: "How many fingers do you have on one hand?", options: ["4", "6", "5", "3"], answer: "5" },
        { question: "What is 2 + 3?", options: ["4", "6", "5", "3"], answer: "5" },
        { question: "Which number is bigger?", options: ["10", "7"], answer: "10" },
        { question: "What number is missing?\n  1, 2, __, 4 ", options: ["4", "6", "5", "3"], answer: "3" }
    ],
    "Measurements": [
        { question: "Which is longer?", options: ["Pencil", "Eraser"], answer: "Pencil" },
        { question: "If you pour water into a cup, what will it measure?", options: ["Weight", "Length", "Volume", "Height"], answer: "Volume" },
        { question: "Which is heavier?", options: ["Elephant", "Cat"], answer: "Elephant" },
        { question: "What tool is used to measure how long something is?", options: ["Scale", "Ruler", "Clock", "Spoon"], answer: " Ruler" },
        { question: "Which is shorter?", options: ["Shoe", "Bed"], answer: "Shoe" }
    ],
    "Money": [
        { question: "How many 1 rupee coins do you need to make 5 rupees?", options: ["5", "4", "6", "7"], answer: "5" },
        { question: "Which coin is smaller?", options: ["1 rupee", "2 rupee"], answer: "1 rupee" },
        { question: "If you have 10 rupees and spend 6 rupees, how much is left?", options: ["5 rupees", "6 rupees", "4 rupees", "10 rupees"], answer: "4 rupees" },
        { question: "Which note is worth more: 20 rupees or 50 rupees?", options: ["20 rupees", "50 rupees"], answer: "50 rupees" },
        { question: "If you have 2 coins worth 5 rupees each, how much money do you have?", options: ["5 rupees", "6 rupees", "4 rupees", "10 rupees"], answer: "10 rupees" }
    ],
    "Shapes and Figures": [
        { question: "Which shape has 3 sides?", options: ["Circle", "Triangle", "Square", "Rectangle"], answer: "Triangle" },
        { question: "What shape is a clock?", options: ["Circle", "Triangle", "Square", "Oval"], answer: "Circle" },
        { question: "Which shape has 4 equal sides?", options: ["Circle", "Triangle", "Square", "Rectangle"], answer: "Square" },
        { question: "What shape is an egg?", options: ["Circle", "Triangle", "Square", "Oval"], answer: "Oval" },
        { question: "Which shape looks like a box?", options: ["Cube", "Cone", "Sphere", "Pyramid"], answer: "Cube" }
    ]
};

let currentTopic = '';
let currentQuestionIndex = 0;
let score = 0;
let attemptsLeft = 2;

function toggleOptions(id) {
    const element = document.getElementById(id);
    element.style.display = element.style.display === "none" ? "block" : "none";
}

function openQuiz(topic) {
    currentTopic = topic;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("QuizModal").style.display = "block";

    document.getElementById("quiz-title").textContent = topic;
    // Show the welcome message and the start button
    document.getElementById("Quiz-message").style.display = "block";
    document.getElementById("start-Quiz-btn").style.display = "block";

    // Ensure Quiz area and end message are hidden initially
    document.getElementById("Quiz-area").classList.add("hidden");
    document.getElementById("end-message").classList.add("hidden");

    // Add event listener for the start button inside openQuiz to ensure it's triggered
    document.getElementById("start-Quiz-btn").addEventListener("click", startQuiz);
}

function startQuiz() {
    // Hide the welcome message and the start button
    document.getElementById("Quiz-message").style.display = "none";
    document.getElementById("start-Quiz-btn").style.display = "none";

    // Show the quiz area
    document.getElementById("Quiz-area").classList.remove("hidden");

    // Optionally: Show the first question (you may want to implement this if you're loading questions dynamically)
    showNextQuestion();
}

// Optionally, if you have a function to show the first question
function showNextQuestion() {
    document.getElementById("question-1").style.display = "block"; // Assuming the first question has id "question-1"
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
    const questions = quizTopics[currentTopic];
    const question = questions[currentQuestionIndex];
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
    const questions = quizTopics[currentTopic];
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }

    document.getElementById("next-btn").disabled = false;
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    const questions = quizTopics[currentTopic];
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Modified function in gr1-english_quiz.js to store score ,time and date with the topic name
function endQuiz() {
    document.getElementById("Quiz-area").classList.add("hidden");
    document.getElementById("end-message").classList.remove("hidden");
    
    // Capture the current time when the quiz ends
    const endTime = new Date();
    const formattedTime = endTime.toLocaleString(); // Format the time

    // Display the score and time when the quiz ended
    document.getElementById("final-score-message").textContent = `You scored ${score} out of ${quizTopics[currentTopic].length}.`;
    document.getElementById("quiz-end-time").textContent = `Quiz completed at: ${formattedTime}`;
    
    // Save the score and time in localStorage
    const scoreKey = `${currentTopic}Score`;
    const timeKey = `${currentTopic}Time`;
    localStorage.setItem(scoreKey, score);
    localStorage.setItem(timeKey, formattedTime);

    // Log to confirm the values saved
    console.log('Score and time saved:', {
        scoreKey: scoreKey,
        timeKey: timeKey,
        score: score,
        time: formattedTime
    });
}



document.getElementById("Pre-Mathematical-btn").onclick = function() { openQuiz("Pre-Mathematical Skills"); };
document.getElementById("Numbers-btn").onclick = function() { openQuiz("Numbers"); };
document.getElementById("Measurements-btn").onclick = function() { openQuiz("Measurements"); };
document.getElementById("Money-btn").onclick = function() { openQuiz("Money"); };
document.getElementById("Shapes-and-Figures-btn").onclick = function() { openQuiz("Shapes and Figures"); };

document.getElementById("next-btn").onclick = nextQuestion;
