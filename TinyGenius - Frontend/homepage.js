import contentData from './content.js';

// fetching unlocked subjects for specific grade from server
async function fetchSelectedSubjects(grade, userId) {
    try {
        // send fetch request and get json response
        const response = await fetch(`save_selections.php?grade=${grade}&user_id=${userId}`);
        const data = await response.json();

        // check if we successfully retrieved unlocked sub list and return them if there is no errors
        if (data.success && data.selections && data.selections.subjects) {
            return data.selections.subjects;
        } else {
            console.warn('Failed to fetch selected subjects for grade:', grade);
            return [];
        }
    } catch (error) {
        console.error('Error fetching selected subjects:', error);
        return [];
    }
}

// dropdown menu visibility when clicked
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}



// respective ui update according to subject selection
contentData.gradeButtons.forEach((button) => {
    button.addEventListener('click', async () => {
        // detect the clicked buttons acc to specific user id
        const grade = button.getAttribute('data-grade');
        const isActive = button.classList.contains('active');
        const currentUserId = document.body.dataset.userId; 
        if (!currentUserId) {
            console.error('User ID is missing. Please check server-side integration.');
            return;
        }

        // locking subjects according to selections
        if (isActive) {
            button.classList.remove('active');
            contentData.rectangleContainer.innerHTML = ''; 
        } else {
            // all subjects shows as locked during first login
            contentData.gradeButtons.forEach(b => b.classList.remove('active')); 
            button.classList.add('active'); 

            contentData.rectangleContainer.innerHTML = ''; 

            // fetch unlocked subs from server
            const selectedSubjectsForGrade = await fetchSelectedSubjects(grade, currentUserId);
            const subjects = contentData.gradeContent[grade];
            const filteredSubjects = subjects.map((subject) => ({
                ...subject,
                unlocked: selectedSubjectsForGrade.includes(subject.subject)
            }));

            //ui update
            filteredSubjects.forEach((subject) => {
                const rectangle = document.createElement('div');
                rectangle.classList.add('rectangle');

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');

                const imageElement = document.createElement('img');
                imageElement.src = subject.img;
                imageElement.alt = subject.subject;

                const overlay = document.createElement('div');
                overlay.classList.add('overlay');

                imageContainer.appendChild(imageElement);
                imageContainer.appendChild(overlay);

                rectangle.appendChild(imageContainer);

                const startButton = document.createElement('a');
                startButton.href = subject.link;
                startButton.classList.add('start-button');
                startButton.dataset.grade = grade;
                startButton.dataset.subject = subject.subject;
                startButton.textContent = subject.subject;

                if (subject.unlocked) {
                    startButton.classList.remove('locked');
                    startButton.addEventListener('click', (e) => {
                        e.preventDefault();
                        localStorage.setItem('selectedGrade', grade);
                        localStorage.setItem('selectedSubject', subject.subject);
                        window.location.href = subject.link;
                    });
                    overlay.style.display = 'none'; // Hide the overlay since it's unlocked
                } else {
                    startButton.classList.add('locked');
                    overlay.style.display = 'block'; // Show the overlay since it's locked
                }

                rectangle.appendChild(startButton);
                contentData.rectangleContainer.appendChild(rectangle);
            });
        }

        // Update the grade banner
        if (!contentData.gradeBanner.textContent) {
            contentData.gradeBanner.textContent = `Grade ${grade}`;
            contentData.gradeBanner.style.display = 'block';
        }

        // Scroll to the section containing subjects
        if (contentData.rectangleContainer.innerHTML !== '') {
            contentData.sec3.style.display = 'block';

            const offset = 100; // Offset for scrolling
            const elementPosition = contentData.sec3.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

