<?php
// Include the database connection file
$conn = include('db.php');

// Initialize a message variable for JavaScript
$message = "";

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    // Validate the inputs
    if (!empty(trim($name)) && !empty(trim($email)) && !empty(trim($subject)) && !empty(trim($message))) {
        
        // Step 1: Get the user_id based on email
        $stmt = $conn->prepare("SELECT id FROM user WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // Step 2: Fetch the user_id
            $user = $result->fetch_assoc();
            $user_id = $user['id'];

            // Step 3: Insert the message with the user_id
            $stmt = $conn->prepare("INSERT INTO messages (user_id, name, email, subject, message) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("issss", $user_id, $name, $email, $subject, $message);

            // Execute
            if ($stmt->execute()) {
                $message = "Your message has been sent successfully!";
            } else {
                $message = "Error: " . $stmt->error;
            }
            // Close the statement
            $stmt->close();
        } else {
            $message = "Error: No user found with that email.";
        }
    } else {
        $message = "Please fill in all fields.";
    }
}

// Close the connection
$conn->close();
?>




<!-- Popup -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Form</title>
    <style>
        .popup {
            display: none; 
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            text-align: center;
        }
        .popup .popup-content {
            padding: 20px;
        }
        .popup button {
            padding: 10px 20px;
            background-color: #ffb907;
            color: white;
            border: none;
            cursor: pointer;
        }
        .popup button:hover {
            background-color: #e1a300;
        }
    </style>
</head>
<body>

<!-- Popup content -->
<div id="popup" class="popup">
    <div class="popup-content">
        <p id="popupMessage"><?php echo htmlspecialchars($message); ?></p>
        <button onclick="closePopup()">Close</button>
    </div>
</div>

<script>
    // Show the popup if the PHP message is not empty
    <?php if (!empty($message)) { ?>
        document.getElementById('popup').style.display = 'block'; // Show the popup
    <?php } ?>

    // Function to close the popup and redirect to aboutus.php
    function closePopup() {
        document.getElementById('popup').style.display = 'none'; 
        window.location.href = 'AboutUs.php'; // Navigate to aboutus.php
    }
</script>

</body>
</html>

