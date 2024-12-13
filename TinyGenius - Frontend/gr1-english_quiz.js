// Quiz for different topics
const quizTopics = {
    "Alphabet and Phonics": [
        { question: "Which letter comes after A?", options: ["B", "C", "D", "E"], answer: "B" },
        { question: "Which letter comes after D?", options: ["C", "E", "F", "G"], answer: "E" },
        { question: "Which letter comes before F?", options: ["E", "D", "C", "B"], answer: "E" },
        { question: "Which letter comes after K?", options: ["A", "X", "L", "B"], answer: "L" },
        { question: "Which letter comes before I?", options: ["Z", "H", "B", "C"], answer: "H" }
    ],
    "Basic Vocabulary": [
        { question: "What is the synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Bored"], answer: "Joyful" },
        { question: "Which word means 'to eat'?", options: ["Run", "Talk", "Eat", "Read"], answer: "Eat" },
        { question: "Which word is a color?", options: ["Cat", "Blue", "Walk", "Jump"], answer: "Blue" },
        { question: "Which is an animal?", options: ["Table", "Dog", "Book", "Pen"], answer: "Dog" },
        { question: "What does 'tall' describe?", options: ["Color", "Height", "Taste", "Shape"], answer: "Height" }
    ],
    "Simple Sentences": [
        { question: "Which is a complete sentence?", options: ["Running fast.", "The dog runs.", "Fast running dog.", "Is runs dog."], answer: "The dog runs." },
        { question: "Choose the sentence with correct punctuation.", options: ["I like apples", "I like apples.", "Like apples.", "I like apple"], answer: "I like apples." },
        { question: "Which sentence is correct?", options: ["She reading books.", "She read books.", "She reads books.", "She read book."], answer: "She reads books." },
        { question: "Choose the correct sentence.", options: ["The cats is cute.", "The cat is cute.", "The cat cute is.", "Is cute the cat."], answer: "The cat is cute." },
        { question: "Which is the question?", options: ["You like pizza.", "Do you like pizza?", "Pizza you like.", "Like pizza you."], answer: "Do you like pizza?" }
    ],
    "Listening and Speaking": [
        { question: "What is a synonym of 'speak'?", options: ["Run", "Talk", "Listen", "Walk"], answer: "Talk" },
        { question: "What is the opposite of 'quiet'?", options: ["Loud", "Silent", "Mute", "Still"], answer: "Loud" },
        { question: "Which one is a verb?", options: ["Cat", "Run", "Blue", "Table"], answer: "Run" },
        { question: "Which word is spoken?", options: ["Talk", "Eat", "Read", "Run"], answer: "Talk" },
        { question: "Which is a noun?", options: ["Speak", "Walk", "Dog", "Run"], answer: "Dog" }
    ],
    "Reading and Writing Basics": [
        { question: "Which is a noun?", options: ["Run", "Dog", "Jump", "Talk"], answer: "Dog" },
        { question: "Which is a verb?", options: ["Dog", "Cat", "Jump", "Red"], answer: "Jump" },
        { question: "What does 'read' mean?", options: ["Eat", "Talk", "Look at words", "Walk"], answer: "Look at words" },
        { question: "Which is a sentence?", options: ["The cat is cute.", "Cute is cat.", "Is the cat cute.", "Cat cute."], answer: "The cat is cute." },
        { question: "What is a punctuation mark?", options: ["Apple", "?", ".", "Run"], answer: "." }
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


document.getElementById("alphabet-phonics-btn").onclick = function() { openQuiz("Alphabet and Phonics"); };
document.getElementById("basic-vocabulary-btn").onclick = function() { openQuiz("Basic Vocabulary"); };
document.getElementById("simple-sentences-btn").onclick = function() { openQuiz("Simple Sentences"); };
document.getElementById("listening-speaking-btn").onclick = function() { openQuiz("Listening and Speaking"); };
document.getElementById("reading-writing-btn").onclick = function() { openQuiz("Reading and Writing Basics"); };

document.getElementById("next-btn").onclick = nextQuestion;
