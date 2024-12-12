<?php
session_start();
header('Content-Type: application/json');

// Path to the debug log file
define('DEBUG_LOG', 'debug.log');

// Function to write to the debug log
function logDebug($message) {
    $logMessage = date('Y-m-d H:i:s') . " - " . $message . PHP_EOL;
    file_put_contents(DEBUG_LOG, $logMessage, FILE_APPEND);
}

// Database connection details
$servername = "127.0.0.1:3307";
$username = "root";
$password = "";
$dbname = "user_authentication";

// Create database connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    logDebug('Database connection failed: ' . mysqli_connect_error());
    echo json_encode(['success' => false, 'message' => 'Database connection failed: ' . mysqli_connect_error()]);
    exit;
}

// Ensure the user is authenticated
if (!isset($_SESSION['user_id'])) {
    logDebug('User not authenticated.');
    echo json_encode(['success' => false, 'message' => 'User not authenticated.']);
    exit;
}

$user_id = $_SESSION['user_id']; // Retrieve the logged-in user's ID
logDebug("User ID: $user_id");


// Function to fetch subjects from content.js (simulate it here for PHP)
function getAllSubjectsFromContentJs() {
    // Simulate the content.js data structure in PHP (this will be dynamically fetched from content.js in a real application)
    $content_data = json_decode(file_get_contents('content.json'), true); // Assuming the content is saved in a JSON file or API

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
        logDebug('Invalid input data: ' . json_encode($data));
        echo json_encode(['success' => false, 'message' => 'Invalid input data.']);
        exit;
    }

    $grade = $data['grade'];
    $subjects = json_encode($data['subjects']); // Store subjects as JSON
    logDebug("Grade: $grade, Subjects: $subjects");

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
                    logDebug("Selections updated successfully for user_id: $user_id, grade: $grade.");
                    echo json_encode(['success' => true, 'message' => 'Selections updated successfully.']);
                } else {
                    logDebug('Failed to update selections for user_id: ' . $user_id);
                    echo json_encode(['success' => false, 'message' => 'Failed to update selections.']);
                }
                mysqli_stmt_close($update_stmt);
            } else {
                logDebug('Failed to prepare update query for user_id: ' . $user_id);
                echo json_encode(['success' => false, 'message' => 'Failed to prepare update query.']);
            }
        } else {
            // If no existing record, insert a new one
            $insert_sql = "INSERT INTO selections (user_id, grade, subjects) VALUES (?, ?, ?)";
            $insert_stmt = mysqli_prepare($conn, $insert_sql);
            if ($insert_stmt) {
                mysqli_stmt_bind_param($insert_stmt, "iis", $user_id, $grade, $subjects);
                if (mysqli_stmt_execute($insert_stmt)) {
                    logDebug("Selections saved successfully for user_id: $user_id, grade: $grade.");
                    echo json_encode(['success' => true, 'message' => 'Selections saved successfully.']);
                } else {
                    logDebug('Failed to save selections for user_id: ' . $user_id);
                    echo json_encode(['success' => false, 'message' => 'Failed to save selections.']);
                }
                mysqli_stmt_close($insert_stmt);
            } else {
                logDebug('Failed to prepare insert query for user_id: ' . $user_id);
                echo json_encode(['success' => false, 'message' => 'Failed to prepare insert query.']);
            }
        }
        mysqli_stmt_close($stmt);
    } else {
        logDebug('Failed to prepare select query for user_id: ' . $user_id);
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
