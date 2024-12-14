<?php 
session_start();
require 'db.php'; // Database connection
include 'nav.php';

//Check if the user is logged in
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
    <link rel="stylesheet" href="FAQ.css">
    <link rel="stylesheet" href="nav.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">


    <title>TinyGenius</title>
</head>
<body>
        
        <section class="sec1">
            <div>
            <h1 class="main-title">How can we Help?</h1>
            <p class="subtitle">These are some frequently asked questions & answers asked by our users.</p></div>
        </section>

        <section class="sec2">
            <button class="buttonarrow" id="leftArrow"><img src="Assets/FAQ assets/left arrow.png" alt="Question Icon" class="question-icon left-arrow"  /></button>
            <div class="question-wrapper">
              <div class="question-box">
                <h2 class="question-header" id="questionHeader">Question : For whom is this website ?</h2>
                <p class="answer-text" id="answerText">Answer: This website is made for the kids from ages 4 - 8.</p>
              </div>
              <button class="buttonarrow" id="rightArrow"><img src="Assets/FAQ assets/right arrow.png" alt="Answer Icon" class="question-icon right-arrow" /></button>
            </div>
          </section>



          <section class="submit-section">
            <form class="submit-form" action="http://localhost/submit_question.php" method="POST">
              <h2 class="submit-title">Submit your question !</h2>
              
              <input type="text" id="questionInput" name="question" class="question-input" placeholder="Write your question..." aria-label="Write your question" required />
              <button type="submit" class="submit-button">Submit</button>
            </form>
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

        
          <script>
            // Questions and Answers 
            const faqs = [
              {
                question: "For whom is this website?",
                answer: "This website is made for the kids from ages 4 - 8.",
              },
              {
                question: "What can kids learn from this website?",
                answer: "Kids can learn basic math, alphabets, and fun activities.",
              },
              {
                question: "Is this website free to use?",
                answer: "Yes, this website is completely free for kids.",
              },
              {
                question: "Can parents monitor progress?",
                answer: "Yes, parents can track progress through a dashboard.",
              },
            ];
          
            let currentIndex = 0;
          
            // DOM Elements
            const questionHeader = document.getElementById("questionHeader");
            const answerText = document.getElementById("answerText");
            const leftArrow = document.getElementById("leftArrow");
            const rightArrow = document.getElementById("rightArrow");
          
            // Update Question and Answer
            function updateFAQ(index) {
              questionHeader.textContent = `Question : ${faqs[index].question}`;
              answerText.textContent = `Answer: ${faqs[index].answer}`;
            }
          
            // Left Arrow Click Event
            leftArrow.addEventListener("click", () => {
              currentIndex = (currentIndex - 1 + faqs.length) % faqs.length;
              updateFAQ(currentIndex);
            });
          
            // Right Arrow Click Event
            rightArrow.addEventListener("click", () => {
              currentIndex = (currentIndex + 1) % faqs.length;
              updateFAQ(currentIndex);
            });
          
            // Initialize with the first FAQ
            updateFAQ(currentIndex);
          </script>
        <script src="nav.js"></script>


                
        
</body>
</html>

