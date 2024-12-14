<?php

session_start();
require 'db.php'; 
include 'nav.php';

$user_id = $_SESSION['user_id'];

// Fetch user details and profile data
$query = "SELECT u.*, p.dob, p.phone, p.gender, u.profile_picture FROM user u 
          LEFT JOIN profile p ON u.id = p.id WHERE u.id = ?";
$stmt = $conn->prepare($query);
if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
}
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

// Default profile picture if not set
if (empty($user['profile_picture'])) {
    $user['profile_picture'] = " ";
}

// Handle profile update
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $phone = $_POST['phone'];
    $dob = $_POST['dob'];

    // Handle file upload
    if (isset($_FILES['profile_picture']) && $_FILES['profile_picture']['error'] === 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["profile_picture"]["name"]);
        if (move_uploaded_file($_FILES["profile_picture"]["tmp_name"], $target_file)) {
            $profile_picture_path = $target_file;
        } else {
            $profile_picture_path = $user['profile_picture'];
        }
    } else {
        $profile_picture_path = $user['profile_picture'];
    }

    // Update user data
    $sql = "UPDATE user SET username=?, email=?, profile_picture=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        die("Error preparing statement: " . $conn->error);
    }
    $stmt->bind_param("sssi", $username, $email, $profile_picture_path, $user_id);

    if ($stmt->execute()) {
        // Check if profile exists
        $profile_check_query = "SELECT * FROM profile WHERE id = ?";
        $stmt = $conn->prepare($profile_check_query);
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // Update profile
            $update_profile_query = "UPDATE profile SET dob=?, phone=?, gender=? WHERE id=?";
            $stmt = $conn->prepare($update_profile_query);
            $stmt->bind_param("sssi", $dob, $phone, $gender, $user_id);
        } else {
            // Insert profile
            $insert_profile_query = "INSERT INTO profile (id, dob, phone, gender) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($insert_profile_query);
            $stmt->bind_param("isss", $user_id, $dob, $phone, $gender);
        }
        $stmt->execute();

        // Update session variables
        $_SESSION['username'] = $username;
        $_SESSION['profile_picture'] = $profile_picture_path;

        header("Location: profile.php?success=1");
        exit();
    } else {
        echo "Error updating profile: " . $stmt->error;
    }
}

$profilePicture = htmlspecialchars($user['profile_picture']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="profile.css"> 
    <link rel="stylesheet" href="nav.css"> 

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
</head>
<body>

    <div class="profile-container">
        <div class="label-container">
            <label for="Account">Account</label> 
            <span class="separator"></span>
        </div>

        <button class="edit-btn">Edit Profile Picture</button>
        <input type="file" id="profilePictureInput"  class = "file" name="profile_picture" accept="image/*" >
        <br><br>

        <form id="profileForm" method="POST" action="profile.php" enctype="multipart/form-data">
            <div class="label-container">
                <label for="username">Username</label>
                <span class="separator"></span>
            </div>
            <input type="text" id="username" name="username" placeholder="Username" value="<?php echo htmlspecialchars($user['username']); ?>" required>

            <div class="label-container">
                <label for="email">Email</label>
                <span class="separator"></span>
            </div>
            <input type="email" id="email" name="email" placeholder="Email" value="<?php echo htmlspecialchars($user['email']); ?>" required>
        
            <div class="label-container">
                <label for="gender">Gender</label>
            
                <span class="separator"></span>
            </div>

            <select class="gender" id="gender" name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male" <?php if ($user['gender'] == 'male') echo 'selected'; ?>>Male</option>
                    <option value="female" <?php if ($user['gender'] == 'female') echo 'selected'; ?>>Female</option>
            </select>

            <div class="label-container">
                <label for="dob">Date of Birth</label>
                <span class="separator"></span>
            </div>
            <input type="date" id="dob" name="dob" placeholder="Date of Birth" value="<?php echo htmlspecialchars($user['dob']); ?>" required>
            <div class="label-container">
                <label for="phone">Phone Number</label>
                <span class="separator"></span>
            </div>
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" value="<?php echo htmlspecialchars($user['phone']); ?>" required>
            <button type="submit" class="save-btn">SAVE CHANGES</button>
        </form>
    </div>
    
    <!-- Success message-->
    <div id="successModal" class="modal">
        <div class="modal-content">
            <p>Profile updated successfully!</p>
            <button id="okButton" class="ok-button">OK</button>
        </div>
    </div>
    <script src="profile.js"></script>
    <script src="nav.js"></script>
    
</body>
</html>
