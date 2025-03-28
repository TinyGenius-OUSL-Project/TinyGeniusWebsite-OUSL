<?php 
session_start();
require 'db.php'; // Database connection
include 'nav.php';

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$user_id = $_SESSION['user_id'];

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TinyGenius - Grade 01 English</title>
    <link rel="stylesheet" href="nav.css">

    <link rel="stylesheet" href="gr1-subject.css">
    <link rel="stylesheet" href="gr1-quiz.css">

</head>
<body>

    <main>
        <div class="grade-btns">
            <div class="scroll1">
                <div class="grade-btns-container">
                    <h3 id="back-button"> Grade 01</h3>
                    <h1>ENGLISH</h1>
                </div>
            </div>
        </div>
        
        <section class="content">
            <div class="content-header">
                <h2>Contents</h2>
            </div>
            <div class="content-item" onclick="toggleOptions('alphabet-phonics')">
                <span class="arrow">▼</span>
                <span class="content-text">Alphabet and Phonics</span>
            </div>
            <div id="alphabet-phonics" class="options" style="display: none;">
                <div class="option-item" onclick="window.location.href='https://www.educaplay.com/learning-resources/21792062-phonic_picture_match.html'">Game</div>
                <div class="option-item" id="alphabet-phonics-btn" onclick="openQuiz('Alphabet and Phonics')">Quiz</div>
            </div>

            <div class="content-item" onclick="toggleOptions('basic-vocabulary')">
                <span class="arrow">▼</span>
                <span class="content-text">Basic Vocabulary</span>
            </div>
            <div id="basic-vocabulary" class="options" style="display: none;">
                <div class="option-item" onclick="openVideo('basic-vocabulary')">Video</div>
                <div class="option-item" onclick="window.location.href='https://www.educaplay.com/game/21792292-basic_vocabulary.html'">Game</div>
                <div class="option-item" id="basic-vocabulary-btn" onclick="openQuiz('Basic Vocabulary')">Quiz</div>
            </div>

            <div class="content-item" onclick="toggleOptions('simple-sentences')">
                <span class="arrow">▼</span>
                <span class="content-text">Simple Sentences</span>
            </div>
            <div id="simple-sentences" class="options" style="display: none;">
                <div class="option-item" onclick="openVideo('simple-sentences')">Video</div>
                <div class="option-item" onclick="window.location.href='https://www.educaplay.com/game/21792408-simple_sentences_quiz_game.html'">Game</div>
                <div class="option-item" id="simple-sentences-btn" onclick="openQuiz('Simple Sentences')">Quiz</div>
            </div>

            <div class="content-item" onclick="toggleOptions('listening-speaking')">
                <span class="arrow">▼</span>
                <span class="content-text">Listening and Speaking</span>
            </div>
            <div id="listening-speaking" class="options" style="display: none;">
                <div class="option-item" onclick="window.location.href='https://www.educaplay.com/game/21792527-listening_and_speaking.html'">Game</div>
                <div class="option-item" id="listening-speaking-btn" onclick="openQuiz('Listening and Speaking')">Quiz</div>
            </div>

            <div class="content-item" onclick="toggleOptions('reading-writing')">
                <span class="arrow">▼</span>
                <span class="content-text">Reading and Writing Basics</span>
            </div>
            <div id="reading-writing" class="options" style="display: none;">
                <div class="option-item" onclick="openVideo('reading-writing')">Video</div>
                <div class="option-item" id="reading-writing-btn" onclick="openQuiz('Reading and Writing Basics')">Quiz</div>
            </div>
        </section>
    </main>
    <section class="track-progress">
        <div class="track-container">
            <h1>Track Your Progress</h1>
            <p>
                View your quiz scores. Check your progress across different subjects and celebrate your achievements!
            </p>
            <a href="trackProgress.php"><button class="track-btn">TRACK PROGRESS</button></a>
        </div>
    </section>

    <footer>
        <div class="footer-btns">
            <button>ABOUT US</button>
            <button>CONTACT US</button>
            <button>PRIVACY POLICY</button>
        </div>
        <div class="footer-social">
            <img src="Assets/landing page assets/facebook.png" alt="">
            <img src="Assets/landing page assets/instagram.png" alt="">
            <img src="Assets/landing page assets/twitter.png" alt="">
        </div>
        <p>&copy; 2023 Tiny Genius. All rights reserved. Website Designed & Developed by Tiny Genius team</p>
    </footer>

<!-- Modal and overlay -->
<div id="overlay" style="display: none;"></div>
<div id="QuizModal" style="display: none;">
    <div id="Quiz-message">
        <h1>Welcome to <span id="quiz-title"></span> Quiz!</h1>
        <button id="start-Quiz-btn">Start Quiz</button>
    </div>
    <div id="Quiz-area" class="hidden">
        <div class="question" id="question-text"></div>
        <div class="options" id="options-container"></div>
        <button id="next-btn" class="hidden" disabled>Next</button>
        <div id="score"></div>
    </div>
    <div id="end-message" class="hidden">
        <p id="final-score-message"></p>
        <p id="quiz-end-time"></p> <!-- Display the completion time here -->
        <button onclick="closeQuiz()">Close</button>
    </div>
</div>


    <script src="gr1-english_quiz.js"></script>
    <script src="nav.js"></script>
</body>
</html>

