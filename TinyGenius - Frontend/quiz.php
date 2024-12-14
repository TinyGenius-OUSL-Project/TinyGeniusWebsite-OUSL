<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'user_authentication');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert a score for a quiz
$user_id = 1;  // Logged-in user's ID
$quiz_id = 1;  // Quiz ID
$score = 85;   // User's score

$sql = "INSERT INTO Scores (user_id, quiz_id, score) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iii", $user_id, $quiz_id, $score);

if ($stmt->execute()) {
    echo "Score inserted successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>

