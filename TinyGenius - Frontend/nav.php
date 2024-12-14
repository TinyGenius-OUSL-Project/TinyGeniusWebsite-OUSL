<?php
session_start();
// Ensure the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

// Get username and profile picture from the session
$username = $_SESSION['username'] ?? 'Guest';
$profilePicture = $_SESSION['profile_picture'] ?? 'uploads/default_profile.png';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href="nav.css">
</head>
<body>
    <nav> 
        <div class="nav-logo">
            <a href="landing.html"><img class="logotext" src="Assets/assets signUp/TinyTextlogo.png" alt="TinyGenius Logo" id="logo"></a>
        </div>
        <div class="profile">
        
            <img id="profileImage" src="<?php echo htmlspecialchars($user['profile_picture']); ?>" alt="Profile Picture" class="profile-pic">
            <div class="nav-buttons">
                <span class="nav-username"><?php echo htmlspecialchars($_SESSION['username']); ?></span>
            </div>
            <div class="user-info">
                
                <span class="dropdown-icon">&#x25BC;</span>
                <ul class="dropdown-menu">
                    <li><a href="homepage.php" class="dropdown-item">Home</a></li>
                    <li><a href="#" class="dropdown-item">Track Progress</a></li>
                    <li><a href="grades.html" class="dropdown-item">Grade</a></li>
                    <li><a href="question.html" class="dropdown-item">Q&A</a></li>
                    <li><a href="profile.php" class="dropdown-item">Profile Settings</a></li>
                    <li><a href="logout.php" class="dropdown-item">Log Out</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <script src="nav.js"></script>
    
</body>
</html>

