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
    <link rel="stylesheet" href="AboutUs.css">
    <link rel="stylesheet" href="nav.css">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">

    <title>Tiny Genius</title>
</head>
<body>
   
        
    <section class="sec1">
        <div class="scroll1">
            <p>
                Our Mission is to provide <br> an engaging educational <br> platform for children.
            </p>
        </div>
    </section>


    <div class="sec2">
        <h1 class="About-title">About Us</h1>
        <p class="about-description">
            A personalized learning platform for 4 - 8 ages with interesting<br />
            school syllabus contents with quizzes, and interactive games<br />
            to empower kids to study at their own pace by including<br />
            Mathematics, English and more subjects.
        </p>
        </div>
        <div class="sec3">
        <img src="Assets/about us assets/calculator.png" class="image" />
        <img src="Assets/about us assets/englishLanguage.png" class="image" />
        <img src="Assets/about us assets/science-research.png" class="image" />
        <img src="Assets/about us assets/laptop-computers.png" class="image" />
        <img src="Assets/about us assets/world-environment-day.png" class="image" />
        </div>

        <div class="contact-container">
        <h1>Contact Us</h1>
        <div class="contact-section">
            <div class="contact-card">
                <div class="icon"><img src="Assets/about us assets/location.png" alt=""></div>
                <h3>Tiny Genius<br>children education centre</h3>
                <p>172/A, Kandy Road,<br>Polgolla</p>
            </div>
            <div class="contact-card">
                <div class="icon"><img src="Assets/about us assets/contact us-phone.png" alt=""></div>
                <h3>General Inquiries</h3>
                <p>+94 71 234 5678</p><br> <br>
                <h3>Customer Support Hotline</h3>
                <p>+94 71 876 5432</p>
            </div>
            <div class="contact-card">
                <div class="icon"><img src="Assets/about us assets/èmail.png" alt=""></div>
                <h3>General Queries</h3>
                <p>contact@tinygenius.com</p><br><br>
                <h3>Support Team</h3>
                <p>support@tinygenius.com</p><br><br>
                <h3>Partnership Opportunities</h3>
                <p>partnerships@tinygenius.com</p>
            </div>
        </div>
    </div>

    <h2 class="About-title">Message Us</h2>

    <form class="contact-form" action="http://localhost/process_message.php" method="POST">
    <label for="name" class="form-label">Your Name</label>
    <input type="text" id="name" name="name" class="form-input" placeholder="Full Name" required />

    <label for="email" class="form-label">Your Email</label>
    <input type="email" id="email" name="email" class="form-input" placeholder="Email Address" required />

    <label for="subject" class="form-label">Subject</label>
    <input type="text" id="subject" name="subject" class="form-input" placeholder="Subject" required />

    <label for="message" class="form-label">Your Message</label>
    <textarea id="message" name="message" class="form-textarea" placeholder="Message" required></textarea>

    <button type="submit" class="submit-btn">Send Message</button>
    </form>


    <h2 class="team-title">Developers Behind Tiny Genius</h2>

    <div class="team-grid">
        <div class="team-row">
        <div class="team-col">
            <div class="team-member">
            <div class="member-photo" role="img" aria-label="Photo of Amany"></div>
            <h3 class="member-name">Amany</h3>
            <p class="member-role">Developer</p>
            <div class="socialmedia">
                <a href="" target="_blank"><img src="Assets/about us assets/gmail.png" alt=""></a>
                <a href="https://instagram.com" target="_blank"><img src="Assets/about us assets/InstagramSmall.png" alt=""></a>
                <a href="" target="_blank"><img src="Assets/about us assets/Github.png" alt=""></a>
            </div>
            </div>
        </div>
        <div class="team-col">
            <div class="team-member">
            <div class="member-photo" role="img" aria-label="Photo of Farha"></div>
            <h3 class="member-name">Farha</h3>
            <p class="member-role">Developer</p>
            <div class="socialmedia">
                <a href="" target="_blank"><img src="Assets/about us assets/gmail.png" alt=""></a>
                <a href="https://instagram.com" target="_blank"><img src="Assets/about us assets/InstagramSmall.png" alt=""></a>
                <a href="" target="_blank"><img src="Assets/about us assets/Github.png" alt=""></a>
            </div>
            </div>
        </div>
        <div class="team-col">
            <div class="team-member">
            <div class="member-photo" role="img" aria-label="Photo of Muzna"></div>
            <h3 class="member-name">Muzna</h3>
            <p class="member-role">Developer</p>
            <div class="socialmedia">
                <a href="mailto:fathimamuznamuhajireen@gmail.com" target="_blank"><img src="Assets/about us assets/gmail.png" alt=""></a>
                <a href="https://instagram.com" target="_blank"><img src="Assets/about us assets/InstagramSmall.png" alt=""></a>
                <a href="" target="_blank"><img src="Assets/about us assets/Github.png" alt=""></a>
            </div>
            </div>
        </div>
        <div class="team-col">
            <div class="team-member">
            <div class="member-photo" role="img" aria-label="Photo of Zeenath"></div>
            <h3 class="member-name">Zeenath</h3>
            <p class="member-role">Developer</p>
            <div class="socialmedia">
                <a href="" target="_blank"><img src="Assets/about us assets/gmail.png" alt=""></a>
                <a href="https://instagram.com" target="_blank"><img src="Assets/about us assets/InstagramSmall.png" alt=""></a>
                <a href="" target="_blank"><img src="Assets/about us assets/Github.png" alt=""></a>
            </div>
            </div>
        </div>
        </div>
    </div>

    

    <footer class="footer">
        <div class="footer-logo">
            <img src="Assets/about us assets/Tiny2.png" alt="Logo" class="footer-logo-img">
        </div>
        <div class="footer-text">
            <p>Copyright © 2023 Tiny Genius All rights reserved. Website Designed & Developed by Tiny Genius team </p>
        </div>
        <div class="footer-social">
            <a href="https://facebook.com" target="_blank" class="social-icon">
                <img src="Assets/about us assets/facebook.png" alt="Facebook">
            </a>
            <a href="https://twitter.com" target="_blank" class="social-icon">
                <img src="Assets/about us assets/twitter.png" alt="Twitter">
            </a>
            <a href="https://instagram.com" target="_blank" class="social-icon">
                <img src="Assets/about us assets/instagram.png" alt="Instagram">
            </a>
        </div>
    </footer>
    <script src ="nav.js"></script>
    
        
</body>
</html>

