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
    <title>Profile Progress</title>
    <link rel="stylesheet" href="trackProgress.css">
    <link rel="stylesheet" href="nav.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

</head>
<body>
    
    <div class="container">
        <!-- Subject Filter Dropdown -->
        <div class="filter-container">
            <label for="subjectFilter"><h1>Quiz Marks Filter by Subjects</h1> </label><br><br>
            <select id="subjectFilter">
                <option value="all">All Subjects</option>
                <option value="english">English</option>
                <option value="maths">Maths</option>
                <option value="ict">ICT</option>
            </select>
            <!-- Add Print Button -->
            <button id="print-btn" style="background-color:#6FA7B3; color: white; border: none; padding: 1rem 3.5rem; font-size: 1rem; font-weight: bold; cursor: pointer; border-radius: 50px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">Print Scores as PDF</button>

        </div>

        <div class="content">
            <!-- Printable section -->
            <div id="recent-activities">
                <!-- Activities will be dynamically inserted here -->
        </div>
                

    </div>
    </div>

    <script>
        // Function to retrieve and display quiz scores dynamically based on the selected subject
        function showScore(subjectFilter = 'all') {
            const activitiesContainer = document.getElementById('recent-activities');
            activitiesContainer.innerHTML = ''; // Clear any existing content

            // Define an array of quiz topics for each subject
            const subjects = {
                english: [
                    { name: 'Alphabet and Phonics', id: 'Alphabet and PhonicsScore' },
                    { name: 'Basic Vocabulary', id: 'Basic VocabularyScore' },
                    { name: 'Simple Sentences', id: 'Simple SentencesScore' },
                    { name: 'Listening and Speaking', id: 'Listening and SpeakingScore' },
                    { name: 'Reading and Writing Basics', id: 'Reading and Writing BasicsScore' }
                ],
                maths: [
                    { name: 'Pre-Mathematical Skills', id: 'Pre-Mathematical SkillsScore' },
                    { name: 'Numbers', id: 'NumbersScore' },
                    { name: 'Measurements', id: 'MeasurementsScore' },
                    { name: 'Money', id: 'MoneyScore' },
                    { name: 'Shapes and Figures', id: 'Shapes and FiguresScore' }
                ],
                ict: [
                    { name: 'Basic Computer Skills', id: 'Basic Computer SkillsScore' },
                    { name: 'Programming Fundamentals', id: 'Programming FundamentalsScore' },
                    { name: 'Networking Basics', id: 'Networking BasicsScore' }
                ]
            };

            // If 'all' is selected, show quizzes from all subjects
            const selectedSubjects = subjectFilter === 'all' ? Object.values(subjects).flat() : subjects[subjectFilter];

            // Iterate over the selected topics and check if the score is available
            
            selectedSubjects.forEach(topic => {
                const score = localStorage.getItem(topic.id);
                const time = localStorage.getItem(`${topic.name}Time`);
                console.log('Retrieving score and time for', topic.name, '-> Score:', score, 'Time:', time);
                if (score) {
                    const activityDiv = document.createElement('div');
                    activityDiv.classList.add('activity');
                    activityDiv.innerHTML = `
                    <em>${topic.name}</em><br>
                    <small>Completed at: ${time ? time : 'N/A'}</small><br>
                    <span>Score: ${score}/5</span>
                    `;
                    activitiesContainer.appendChild(activityDiv); // Add the activity to the container
                    }
            });


            // If no quiz is completed, show a message
            if (activitiesContainer.children.length === 0) {
                activitiesContainer.innerHTML = '<p>No quizzes completed yet.</p>';
            }
        }

        // Show the score when the page loads
        window.onload = function() {
            showScore(); // Default to showing all subjects
        }

        // Add an event listener to filter by selected subject
        document.getElementById('subjectFilter').addEventListener('change', function() {
            const selectedSubject = this.value;
            showScore(selectedSubject); // Show scores for the selected subject
        });
        // Print scores as PDF
    document.getElementById('print-btn').addEventListener('click', function() {
        const printContent = document.getElementById('recent-activities').innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = `
            <html>
            <head>
                <title>Track Progress-Quiz Scores</title>
                <link rel="stylesheet" href="trackProgress.css">
                <link rel="stylesheet" href="nav.css">
            </head>
            <body>
                <h1>Quiz Scores</h1>
                ${printContent}
            </body>
            </html>
        `;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload(); // Reload the page to restore original state
    });
    </script>
    <script src="nav.js"></script>
</body>
</html>

