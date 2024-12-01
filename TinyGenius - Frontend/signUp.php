<?php
$conn = new mysqli('127.0.0.1:3307', 'root', '', 'user_authentication');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    if ($password !== $confirm_password) {
        echo "Passwords do not match!";
        exit();
    }

    $password = password_hash($password, PASSWORD_DEFAULT);

    // Check if email already exists
    $check = $conn->query("SELECT * FROM user WHERE email='$email'");
    if ($check->num_rows > 0) {
        echo "Email already exists!";
        exit();
    } else {
        // Insert user into the database
        $sql = "INSERT INTO user (username, email, password) VALUES ('$username','$email','$password')";
        if ($conn->query($sql) === TRUE) {
            header("Location: Login.html"); // Redirect to login page
            exit();
        } else {
            echo "Error during signup. Please try again.";
            exit();
        }
    }
}

$conn->close();
?>
