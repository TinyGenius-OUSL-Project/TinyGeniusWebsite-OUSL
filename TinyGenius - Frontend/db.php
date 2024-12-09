
<?php
$servername = "127.0.0.1:3307"; // Database server
$username = "root"; // Database username
$password = ""; // Database password
$dbname = "user_authentication"; // Database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Return the connection
return $conn;
?>
