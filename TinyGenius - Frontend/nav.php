<?php

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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="nav.css">
    
</head>
<body>
    <nav> 
        <div class="nav-logo">
            <a href="landing.html"><img class="logotext" src="Assets/assets signUp/TinyTextlogo.png" alt="TinyGenius Logo" id="logo"></a>
        </div>
        <div class="profile">
            <img id="profileImage" src="<?php echo htmlspecialchars($profilePicture); ?>" alt="Profile Picture" class="profile-pic" onclick="toggleDropdown()">
            <div class="nav-buttons">
                <span class="nav-username"><?php echo htmlspecialchars($username); ?></span>
            </div>
            <div class="user-info">
                <span  class="dropdown-icon" onclick="toggleDropdown()">&#x25BC;</span>
                <ul class="dropdown-menu" id="dropdownMenu">
                    <li><a href="homepage.php" class="dropdown-item"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="taskselection.php" class="dropdown-item"><i class="fas fa-book"></i> Assign Subjects</a></li>
                    <li><a href="trackProgress.php" class="dropdown-item"><i class="fas fa-chart-line"></i> Track Progress</a></li>
                    <li><a href="FAQ.php" class="dropdown-item"><i class="fas fa-question-circle"></i> FAQ</a></li>
                    <li><a href="profile.php" class="dropdown-item"><i class="fas fa-user-cog"></i> Profile Settings</a></li>
                    <li><a href="AboutUs.php" class="dropdown-item"><i class="fas fa-info-circle"></i> About Us</a></li>
                    <li><a href="logout.php" class="dropdown-item"><i class="fas fa-sign-out-alt"></i> Log Out</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <script src="nav.js"></script>
</body>
</html>

