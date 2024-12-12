<?php
session_start();
header('Content-Type: application/json');

// Database connection details
$servername = "127.0.0.1:3307";
$username = "root";
$password = "";
$dbname = "user_authentication";

// Create database connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed: ' . mysqli_connect_error()]);
    exit;
}

// Ensure the user is authenticated
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'User not authenticated.']);
    exit;
}

$user_id = $_SESSION['user_id']; // Retrieve the logged-in user's ID

// Function to fetch subjects from content.js (simulate it here for PHP)
function getAllSubjectsFromContentJs() {
    $content_data = json_decode(file_get_contents('content.json'), true); 

    $all_subjects = [];
    foreach ($content_data['gradeContent'] as $grade => $subjects) {
        foreach ($subjects as $subject) {
            $all_subjects[$grade][] = $subject['subject'];
        }
    }

    return $all_subjects;
}

// Handle saving selections (POST request)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate input
    if (empty($data['grade']) || !is_array($data['subjects'])) {
        echo json_encode(['success' => false, 'message' => 'Invalid input data.']);
        exit;
    }

    $grade = $data['grade'];
    $subjects = json_encode($data['subjects']); 

    // Check if the selection already exists for this user and grade
    $sql = "SELECT id FROM selections WHERE user_id = ? AND grade = ?";
    $stmt = mysqli_prepare($conn, $sql);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ii", $user_id, $grade);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);

        if (mysqli_stmt_num_rows($stmt) > 0) {
            // If record exists, update the selection
            $update_sql = "UPDATE selections SET subjects = ? WHERE user_id = ? AND grade = ?";
            $update_stmt = mysqli_prepare($conn, $update_sql);
            if ($update_stmt) {
                mysqli_stmt_bind_param($update_stmt, "sii", $subjects, $user_id, $grade);
                if (mysqli_stmt_execute($update_stmt)) {
                    echo json_encode(['success' => true, 'message' => 'Selections updated successfully.']);
                } else {
                    echo json_encode(['success' => false, 'message' => 'Failed to update selections.']);
                }
                mysqli_stmt_close($update_stmt);
            } else {
                echo json_encode(['success' => false, 'message' => 'Failed to prepare update query.']);
            }
        } else {
            // If no existing record, insert a new one
            $insert_sql = "INSERT INTO selections (user_id, grade, subjects) VALUES (?, ?, ?)";
            $insert_stmt = mysqli_prepare($conn, $insert_sql);
            if ($insert_stmt) {
                mysqli_stmt_bind_param($insert_stmt, "iis", $user_id, $grade, $subjects);
                if (mysqli_stmt_execute($insert_stmt)) {
                    echo json_encode(['success' => true, 'message' => 'Selections saved successfully.']);
                } else {
                    echo json_encode(['success' => false, 'message' => 'Failed to save selections.']);
                }
                mysqli_stmt_close($insert_stmt);
            } else {
                echo json_encode(['success' => false, 'message' => 'Failed to prepare insert query.']);
            }
        }
        mysqli_stmt_close($stmt);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to prepare select query.']);
    }
}

// Handle fetching selections (GET request)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!isset($_GET['grade'])) {
        echo json_encode(['success' => false, 'message' => 'Grade parameter is required.']);
        exit;
    }

    // Fetch saved selections for the user
    $sql = "SELECT grade, subjects FROM selections WHERE user_id = ? AND grade = ?";
    $stmt = mysqli_prepare($conn, $sql);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ii", $user_id, $_GET['grade']);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $grade, $subjects);
        if (mysqli_stmt_fetch($stmt)) {
            echo json_encode([
                'success' => true,
                'selections' => [
                    'grade' => $grade,
                    'subjects' => json_decode($subjects),
                ],
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'No selections found for this grade.']);
        }
        mysqli_stmt_close($stmt);
    }
}

// Close database connection
mysqli_close($conn);
?>
