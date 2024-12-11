<?php
// Database connection details
$servername = "localhost";
$username = "root"; // username for WAMP
$password = "";     // password for WAMP
$dbname = "contact_form"; // Database name

// Creating a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Checking the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    // Validating the inputs
    if (!empty(trim($name)) && !empty(trim($email)) && !empty(trim($subject)) && !empty(trim($message))) {
        // Prepare SQL query
        $stmt = $conn->prepare("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $subject, $message);

        // Execute 
        if ($stmt->execute()) {
            echo "Your message has been sent successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close 
        $stmt->close();
    } else {
        echo "Please fill in all fields.";
    }
}

// Close the connection
$conn->close();
?>
