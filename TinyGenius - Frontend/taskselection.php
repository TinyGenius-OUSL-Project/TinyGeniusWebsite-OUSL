<?php 
session_start();
require 'db.php'; // Database connection
include 'nav.php';

//Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$user_id = $_SESSION['user_id'];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="taskselection.css">
    <link rel="stylesheet" href="nav.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
        rel="stylesheet">

    <title>TinyGenius</title>
</head>

<body data-user-id="<?php echo $user_id; ?>">


    <section class="parental-control-container">
        <div class="label-container">
            <label for="parental-control">Parental Control</label>
            <span class="separator"></span>
        </div>
        <div class="parental-control">
            <div class="toggle-container">
                <label for="enable-parental-control">Enable Parental Control</label>
                <div class="toggle-switch" id="enable-parental-control"></div>
            </div>
            <div id="parental-settings" style="display: none;">
                <div class="label-container">
                    <label for="assign-tasks">Assign Tasks</label>
                    <span class="separator"></span>
                </div>
                <div class="assign-tasks-container">
                    <select id="grade-select" class="filter-tasks">
                        <option value="">Select Grade</option>
                        <option value="1">Grade 1</option>
                        <option value="2">Grade 2</option>
                        <option value="3">Grade 3</option>
                    </select>
                </div>
                <ul id="tasks-list" class="tasks-list" style="display: none; list-style: none; padding: 0;"></ul>
            </div>
        </div>
    </section>
        <!-- PIN Popup -->
    <div id="pin-popup" class="popup-overlay" style="display: none;">
        <div class="popup-content">
            <h2 id="popup-title">Set PIN</h2>
            <p id="popup-message">Please enter a 4-digit PIN:</p>
            <input type="password" id="pin-input" maxlength="4" placeholder="Enter PIN">
            <div class="popup-buttons">
                <button id="cancel-btn">CANCEL</button>
                <button id="submit-btn">SUBMIT</button>
            </div>
        </div>
    </div>
        

    <script type="module" src="taskselection.js"></script>

    <script src="nav.js"></script>


</body>

</html>