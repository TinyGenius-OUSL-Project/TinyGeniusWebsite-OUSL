<?php

$email = $_POST["email"]; // Get the email from the POST request

$token = bin2hex(random_bytes(16)); // Generate a random token
$token_hash = hash("sha256", $token); // Hash the token for storage
$expiry = date("Y-m-d H:i:s", time() + 60 * 30); // Token expiration time (30 minutes)

// Include the database connection
$mysqli = require __DIR__ . "/db.php";

// Prepare the SQL statement
$sql = "UPDATE user
        SET `reset-token-hash` = ?,
            reset_token_expires_at = ?
        WHERE email = ?";

$stmt = $conn->prepare($sql);

// Bind the parameters
$stmt->bind_param("sss", $token_hash, $expiry, $email);

// Execute the statement
$stmt->execute();

// Check if any rows were affected
if ($mysqli->affected_rows) {
    $mail = require __DIR__ . "/mailer.php";

    $mail->setFrom("noreply@example.com");
    $mail->addAddress($email);
    $mail->Subject = "Password Reset";
    $mail->Body = <<<END
    Click <a href="http://localhost/resetpw.php?token=$token">here</a> to reset your password.
    END;

    try {
        $mail->send();
        
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer error: {$mail->ErrorInfo}";
    }
}

    echo "Message sent, please check your inbox.";


