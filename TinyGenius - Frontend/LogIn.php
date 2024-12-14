<?php
include('db.php');
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $response = ["status" => "error", "message" => ""];

    // Get the user input and password from POST request
    $user_input = trim($_POST['user_input']);
    $password = trim($_POST['password']);

    $sql = "SELECT * FROM user WHERE username = ? OR email = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("ss", $user_input, $user_input);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        // Check if user exists and password matches
        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            $response["status"] = "success";
            $response["message"] = "Login successful!";
            $response["redirect"] = "homepage.php"; // Redirect to homepage
        } else {
            // Invalid credentials
            $response["message"] = "Invalid username or password.";
        }

        $stmt->close();
    } else {
        $response["message"] = "Something went wrong. Please try again.";
    }
    echo json_encode($response);
}

// Assuming checked user credentials already
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user_data = $result->fetch_assoc();
        
        // Storing user information in session
        $_SESSION['logged_in'] = true;
        $_SESSION['username'] = $user_data['username-field'];
        $_SESSION['email'] = $user_data['email']; 
        $_SESSION['profile_picture'] = $user_data['profile_picture'];

        header("Location: homepage.php");
    } else {
        echo "Invalid username or password.";
    }
}
?>



