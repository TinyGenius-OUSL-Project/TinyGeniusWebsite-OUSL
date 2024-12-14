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
    <title>TinyGenius - Grade 01 Maths</title>
    <link rel="stylesheet" href="nav.css">

    <link rel="stylesheet" href="subject.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Butterfly+Kids&display=swap" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>
   

    <main>
        <div class="grade-btns">
            <div class="scroll1">
                <div class="grade-btns-container">
                    <a href="homepage.php" id="grade-title">
                        <h3>&lt; </h3>
                    </a>
                    <h1 id="subject-title"></h1>
                </div>
            </div>
        </div>

        <section class="content">
            <div class="content-header">
                <h2>Contents</h2>
            </div>

        </section>

        <section class="contents" id="content-container">
            <!-- All content will be dynamically inserted here -->
        </section>
    </main>

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

    <script type="module" src="subject.js"></script>
    <script type="module" src="nav.js"></script>
</body>

</html>

