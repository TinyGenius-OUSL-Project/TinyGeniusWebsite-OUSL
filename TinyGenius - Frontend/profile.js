import contentData from './content.js';


let pinSet = false; 
let savedPin = '';  


const gradeSelect = document.getElementById('grade-select');
const tasksList = document.getElementById('tasks-list');
const parentalSettings = document.getElementById('parental-settings');
const pinPopup = document.getElementById('pin-popup');
const pinInput = document.getElementById('pin-input');


document.getElementById('enable-parental-control').addEventListener('click', function () {
    const toggle = this;
    toggle.classList.toggle('active');

    if (toggle.classList.contains('active')) {
        showPinPopup(pinSet ? 'Enter PIN' : 'Set PIN');
    } else {
        parentalSettings.style.display = 'none';
    }
});


function showPinPopup(mode) {
    document.getElementById('popup-title').textContent = mode;
    document.getElementById('popup-message').textContent =
        mode === 'Set PIN' ? 'Please set a 4-digit PIN:' : 'Enter your 4-digit PIN:';
    pinPopup.style.display = 'flex';
    pinInput.value = ''; 
}


document.getElementById('cancel-btn').addEventListener('click', function () {
    pinPopup.style.display = 'none';
    document.getElementById('enable-parental-control').classList.remove('active'); 
});

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

// populate html dynamically
function populateSubjects(grade) {
    tasksList.innerHTML = '';


    const gradeContent = contentData.gradeContent[grade];

    if (gradeContent) {

        tasksList.style.display = 'block';


        const savedSelections = JSON.parse(localStorage.getItem('selectedSubjects')) || {};
        const selectedSubjects = savedSelections[grade] || [];


        gradeContent.forEach(subject => {
            const subjectItem = document.createElement('li');
            subjectItem.classList.add('subject-item');

            const subjectCheckbox = document.createElement('input');
            subjectCheckbox.type = 'checkbox';
            subjectCheckbox.id = subject.subject;
            subjectCheckbox.dataset.subject = subject.subject;


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
    } else {

        tasksList.style.display = 'none';
    }
}


// save selections to local storage
function saveSelections() {
    const selectedGrade = gradeSelect.value;

    if (!selectedGrade) {
        alert('Please select a grade before saving.');
        return;
    }


    const existingData = JSON.parse(localStorage.getItem('selectedSubjects')) || {};
    const selectedSubjects = Array.from(document.querySelectorAll('#tasks-list input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.dataset.subject);


    existingData[selectedGrade] = selectedSubjects;


    localStorage.setItem('selectedSubjects', JSON.stringify(existingData));

    console.log('Selections saved:', selectedSubjects);
}


gradeSelect.addEventListener('change', function () {
    const selectedGrade = this.value;
    if (selectedGrade) {
        populateSubjects(selectedGrade);
    } else {
        tasksList.style.display = 'none'; 
    }
});


document.addEventListener('DOMContentLoaded', function () {
    gradeSelect.value = ''; 
    tasksList.style.display = 'none';


    const savedGrade = localStorage.getItem('selectedGrade');
    if (savedGrade) {
        gradeSelect.value = savedGrade;
        populateSubjects(savedGrade);
    }
});
