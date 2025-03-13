<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/vendor/autoload.php';


// Initialize PHPMailer instance
$mail = new PHPMailer(true);



$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = 'smtp.gmail.com'; 
$mail->Port = 587; 
$mail->Username = '';
$mail->Password = '';  

// Recipient settings
$mail->addAddress($email); 


$mail->isHTML(true);

return $mail;

?>
