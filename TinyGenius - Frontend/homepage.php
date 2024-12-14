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
    <link rel="stylesheet" href="homepage.css">
    <link rel="stylesheet" href="nav.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Butterfly+Kids&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <title>Tiny Genius</title>
</head>
<body>
    <div class="grade-btns">
        <div class="scroll1">
            <img src="Assets/grades/cartoon-7419926.png" alt="" id="character">
            <div class="grade-banner" id="grade-banner">
                <p>Your joyful learning journey starts here! Inspire a lifetime of learning and discovery </p>
            </div>
        </div>
    </div>

    <div class="select-banner" id="select-banner">
        <br>
        Select a Grade
    </div>


    <div class="grade-btns-container">
        <button class="grade-btn" data-grade="1">GRADE 1</button>
        <button class="grade-btn" data-grade="2">GRADE 2</button>
        <button class="grade-btn" data-grade="3">GRADE 3</button>
    </div>
    
    <section class="sec3" id="sec3">
        <div class="rectangle-container" id="rectangle-container">
        </div>
    </section>

    <section class="track-progress">
        <div class="track-container">
            <h1>Track Your Progress</h1>
            <p>
                View your completed games and lessons to see how far you've come. Check your progress across different subjects and celebrate your achievements!
            </p>
            <a href="track_progress.html" class="track-progress-link"><button class="track-btn">TRACK PROGRESS</button></a>
        </div>
    </section>

    
    <section class="sec4">
        <h1>Kids will love to learn</h1>
        <div class="lesson">
            <img src="assets/home page assets/lesson.png" alt="">
            <h1>Interactive Lessons</h1>
            <p>Our interactive lessons cover essential subjects like <br>
                math, science, and reading, designed to stimulate <br>
                critical thinking and creativity in young minds. Kids will <br>
                build foundational skills while exploring new concepts <br>
                through fun activities.</p>
        </div>
        <div class="games">
            <img src="assets/home page assets/games.png" alt="">
            <h1>Fun Games</h1>
            <p>Kids will love playing games that make learning fun!<br>
                From solving math puzzles to building words, every <br>
                game is thoughtfully designed to combine education<br>
                with excitement.</p>
        </div>
        <div class="quiz">
            <img src="assets/home page assets/quiz.png" alt="">
            <h1>Quizzes</h1>
            <p>Kids can put their skills to the test with fun and <br>
                interactive quizzes in subjects like math, science, and<br>
                vocabulary. Each quiz is designed to boost confidence<br>
                and reinforce what they’ve learned in a playful way.</p>
        </div>
        <img src="assets/home page assets/funpic.png" alt="">
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

    <script type="module" src="homepage.js"></script>
    <script src="nav.js"></script>

</body>
</html>
