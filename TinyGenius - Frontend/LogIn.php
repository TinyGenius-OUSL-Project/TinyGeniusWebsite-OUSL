

<?php
include('db.php');
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Initialize response array
    $response = ["status" => "error", "message" => ""];

    // Get the user input and password from POST request
    $user_input = trim($_POST['user_input']);
    $password = trim($_POST['password']);

    // Prepare SQL query to check for user
    $sql = "SELECT * FROM user WHERE username = ? OR email = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("ss", $user_input, $user_input);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        // Check if user exists and password matches
        if ($user && password_verify($password, $user['password'])) {
            // Start user session and set session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            $response["status"] = "success";
            $response["message"] = "Login successful!";
            $response["redirect"] = "homepage.html"; // Redirect to homepage
        } else {
            // Invalid credentials
            $response["message"] = "Invalid username or password.";
        }

        $stmt->close();
    } else {
        // Query failed
        $response["message"] = "Something went wrong. Please try again.";
    }

    // Send JSON response to the client
    echo json_encode($response);
}
?>
