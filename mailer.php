<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// Include Composer's autoloader (if you're using Composer)
require __DIR__ . '/vendor/autoload.php';


// Initialize PHPMailer instance
$mail = new PHPMailer(true);
// $mail->SMTPDebug = 2; // Set to 2 for verbose output (use 0 for no debugging)


$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server (e.g., smtp.gmail.com)
$mail->Port = 587; // Usually 587 for TLS, or 465 for SSL
$mail->Username = 'your-email@gmail.com'; // Replace with your email
$mail->Password = 'your_app_password';  // Replace with your email password

    // Recipient settings
    // $mail->setFrom('noreply@example.com'); // Set the sender email
$mail->addAddress($email); // Add recipient email


$mail->isHTML(true);

return $mail;

?>
