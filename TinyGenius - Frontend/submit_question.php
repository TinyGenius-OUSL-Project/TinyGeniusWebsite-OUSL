<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = ""; // Default WAMP password
$dbname = "faq_system";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $question = $_POST['question'];

    if (!empty($question)) {
        $stmt = $conn->prepare("INSERT INTO questions (question) VALUES (?)");
        $stmt->bind_param("s", $question);
        if ($stmt->execute()) {
            echo "Question submitted successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Please enter a question.";
    }
}

$conn->close();
?>
