let pinSet = false; // Track if a PIN has been set
let savedPin = '';  // Store the saved PIN

// Toggle Button Event Listener
document.getElementById('enable-parental-control').addEventListener('click', function () {
    const toggle = this;
    toggle.classList.toggle('active');

    if (toggle.classList.contains('active')) {
        // Show PIN popup to enable parental control
        showPinPopup(pinSet ? 'Enter PIN' : 'Set PIN');
    } else {
        // Disable settings
        document.getElementById('parental-settings').style.display = 'none';
    }
});

// Show PIN Popup
function showPinPopup(mode) {
    document.getElementById('popup-title').textContent = mode;
    document.getElementById('popup-message').textContent =
        mode === 'Set PIN' ? 'Please set a 4-digit PIN:' : 'Enter your 4-digit PIN:';
    document.getElementById('pin-popup').style.display = 'flex';
    document.getElementById('pin-input').value = ''; // Clear input
}

// Handle Popup Buttons
document.getElementById('cancel-btn').addEventListener('click', function () {
    document.getElementById('pin-popup').style.display = 'none';
    document.getElementById('enable-parental-control').classList.remove('active'); // Revert toggle
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const pinInput = document.getElementById('pin-input').value;

    if (pinInput.length !== 4 || isNaN(pinInput)) {
        alert('Please enter a valid 4-digit PIN.');
        return;
    }

    if (!pinSet) {
        // Set PIN for the first time
        savedPin = pinInput;
        pinSet = true;
        alert('PIN set successfully!');
    } else {
        // Verify PIN
        if (pinInput !== savedPin) {
            alert('Incorrect PIN.');
            return;
        }
    }

    // Enable parental settings
    document.getElementById('parental-settings').style.display = 'block';
    document.getElementById('pin-popup').style.display = 'none';
});



// Get elements
const gradeSelect = document.getElementById('grade-select');
const filterSelect = document.getElementById('filter-tasks');
const grade1Tasks = document.getElementById('grade1-tasks');
const grade2Tasks = document.getElementById('grade2-tasks');
const grade3Tasks = document.getElementById('grade3-tasks');
const tasksList = document.getElementById('tasks-list');

// Event listener for grade selection
gradeSelect.addEventListener('change', function () {
    const selectedGrade = this.value;

    if (selectedGrade) {
        filterSelect.value = 'all'; 
    }


    grade1Tasks.style.display = 'none';
    grade2Tasks.style.display = 'none';
    grade3Tasks.style.display = 'none';
    tasksList.style.display = 'none'; 

    if (selectedGrade === '1') {
        grade1Tasks.style.display = 'block';
    } else if (selectedGrade === '2') {
        grade2Tasks.style.display = 'block';
    } else if (selectedGrade === '3') {
        grade3Tasks.style.display = 'block';
    }

    if (selectedGrade && filterSelect.value) {
        tasksList.style.display = 'block';
    }
});

// Event listener for filter selection
filterSelect.addEventListener('change', function () {
    const filterValue = this.value;
    const tasks = document.querySelectorAll('.task-checkbox');

    tasks.forEach(task => {
        const isChecked = task.checked;

        if (filterValue === 'all') {
            task.closest('label').style.display = 'flex';
        }
        else if (filterValue === 'selected' && !isChecked) {
            task.closest('label').style.display = 'none';
        }
        else if (filterValue === 'unselected' && isChecked) {
            task.closest('label').style.display = 'none';
        }
        else {
            task.closest('label').style.display = 'flex';
        }
    });
});
