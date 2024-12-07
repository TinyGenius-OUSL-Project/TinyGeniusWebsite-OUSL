<?php
include('db.php');
session_start();

if (isset($_GET['token'])) {
    $token = $_GET['token'];

    // Check if the token exists and is not expired
    $sql = "SELECT * FROM user WHERE reset_token = ? AND reset_expires > ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("si", $token, time());
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if ($user) {
            // Token is valid, show password reset form
            if ($_SERVER["REQUEST_METHOD"] === "POST") {
                $new_password = trim($_POST['new_password']);
                $confirm_password = trim($_POST['confirm_password']);
                $response = ["status" => "error", "message" => ""];

                if ($new_password !== $confirm_password) {
                    $response["message"] = "Passwords do not match.";
                } else {
                    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
                    $updateSql = "UPDATE user SET password = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?";
                    $updateStmt = $conn->prepare($updateSql);
                    $updateStmt->bind_param("si", $hashed_password, $user['id']);
                    $updateStmt->execute();

                    $response["status"] = "success";
                    $response["message"] = "Your password has been reset.";
                }

                echo json_encode($response);
            }
        } else {
            echo "Invalid or expired token.";
        }

        $stmt->close();
    } else {
        echo "Error checking token.";
    }
}
?>
