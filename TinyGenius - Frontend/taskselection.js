import contentData from './content.js';

let pinSet = false; 
let savedPin = '';  
const gradeSelect = document.getElementById('grade-select');
const tasksList = document.getElementById('tasks-list');
const parentalSettings = document.getElementById('parental-settings');
const pinPopup = document.getElementById('pin-popup');
const pinInput = document.getElementById('pin-input');


const currentUserId = document.body.dataset.userId; 

if (!currentUserId) {
    console.error('User ID is missing. Please check server-side integration.');
}

// Enable Parental Control Toggle
document.getElementById('enable-parental-control').addEventListener('click', function () {
    const toggle = this;
    toggle.classList.toggle('active');

    if (toggle.classList.contains('active')) {
        showPinPopup(pinSet ? 'Enter PIN' : 'Set PIN');
    } else {
        parentalSettings.style.display = 'none';
    }
});

// Show PIN Popup
function showPinPopup(mode) {
    document.getElementById('popup-title').textContent = mode;
    document.getElementById('popup-message').textContent =
        mode === 'Set PIN' ? 'Please set a 4-digit PIN:' : 'Enter your 4-digit PIN:';
    pinPopup.style.display = 'flex';
    pinInput.value = ''; 
}

// Cancel PIN Popup
document.getElementById('cancel-btn').addEventListener('click', function () {
    pinPopup.style.display = 'none';
    document.getElementById('enable-parental-control').classList.remove('active'); 
});

// Submit PIN Popup
document.getElementById('submit-btn').addEventListener('click', function () {
    const enteredPin = pinInput.value;

    if (enteredPin.length !== 4 || isNaN(enteredPin)) {
        alert('Please enter a valid 4-digit PIN.');
        return;
    }

    if (!pinSet) {
        savedPin = enteredPin;
        pinSet = true;
        alert('PIN set successfully!');
    } else if (enteredPin !== savedPin) {
        alert('Incorrect PIN.');
        return;
    }

    parentalSettings.style.display = 'block';
    pinPopup.style.display = 'none';
});

// Populate Subjects Dynamically
function populateSubjects(grade) {
    tasksList.innerHTML = '';

    const gradeContent = contentData.gradeContent[grade];

    if (gradeContent) {
        tasksList.style.display = 'block';

        fetchSelections(grade).then(selectedSubjects => {
            // Only process subjects for the current grade
            gradeContent.forEach(subject => {
                const subjectItem = document.createElement('li');
                subjectItem.classList.add('subject-item');

                const subjectCheckbox = document.createElement('input');
                subjectCheckbox.type = 'checkbox';
                subjectCheckbox.id = subject.subject;
                subjectCheckbox.dataset.subject = subject.subject;

                // Check if this subject is in the selectedSubjects for this specific grade
                if (selectedSubjects.includes(subject.subject)) {
                    subjectCheckbox.checked = true;
                }

                const subjectLabel = document.createElement('label');
                subjectLabel.setAttribute('for', subject.subject);
                subjectLabel.textContent = subject.subject;

                subjectItem.appendChild(subjectCheckbox);
                subjectItem.appendChild(subjectLabel);

                tasksList.appendChild(subjectItem);

                subjectCheckbox.addEventListener('change', saveSelections);
            });
        });
    } else {
        tasksList.style.display = 'none';
    }
}

// Fetch Saved Selections from the Server
async function fetchSelections(grade) {
    try {
        const response = await fetch(`save_selections.php?grade=${grade}&user_id=${currentUserId}`);
        const result = await response.json();

        if (result.success) {
            return result.selections.subjects || [];  // Ensure this returns only the relevant subjects for the grade
        } else {
            console.warn('No selections found for the grade.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching selections:', error);
        return [];
    }
}

// Save Selections to the Server
function saveSelections() {
    const selectedGrade = gradeSelect.value;

    if (!selectedGrade) {
        alert('Please select a grade before saving.');
        return;
    }

    const selectedSubjects = Array.from(document.querySelectorAll('#tasks-list input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.dataset.subject);

    const data = {
        user_id: currentUserId,
        grade: selectedGrade,
        subjects: selectedSubjects,
    };

    fetch('save_selections.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                console.log('Selections saved successfully:', selectedSubjects);
            } else {
                console.error('Error saving selections:', result.message);

            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
 
        });
}

// Event Listener for Grade Selection
gradeSelect.addEventListener('change', function () {
    const selectedGrade = gradeSelect.value;
    if (selectedGrade) {
        populateSubjects(selectedGrade);
    } else {
        tasksList.style.display = 'none';
    }
});

// On Page Load - Populate Saved Data
document.addEventListener('DOMContentLoaded', function () {
    const savedGrade = gradeSelect.value;
    if (savedGrade) {
        populateSubjects(savedGrade);
    }
});




