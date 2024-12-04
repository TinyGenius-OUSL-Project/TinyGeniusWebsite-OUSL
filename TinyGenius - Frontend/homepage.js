const gradeButtons = document.querySelectorAll('.grade-btn');
const gradeBanner = document.getElementById('grade-banner');
const sec3 = document.getElementById('sec3');
const rectangleContainer = document.getElementById('rectangle-container');

// Subject data for each grade
const gradeContent = {
    1: [
        { subject: "MATHS", img: "Assets/home page assets/subs/doodle maths (2).jpg", link: "gr1-maths.html" },
        { subject: "ENGLISH", img: "Assets/home page assets/subs/doodle eng.jpg" },
        { subject: "ICT", img: "Assets/home page assets/subs/doodle ict.jpg" },
        { subject: "ART", img: "Assets/home page assets/subs/doodle art.jpg" },
        { subject: "SCIENCE", img: "Assets/home page assets/subs/doodle science.jpg" },
    ],
    2: [
        { subject: "SCIENCE", img: "Assets/home page assets/subs/doodle science.jpg" },
        { subject: "ICT", img: "Assets/home page assets/subs/doodle ict.jpg" },
        { subject: "ART", img: "Assets/home page assets/subs/doodle art.jpg" },
    ],
    3: [
        { subject: "ENGLISH", img: "Assets/home page assets/subs/doodle eng.jpg" },
        { subject: "MATHS", img: "Assets/home page assets/subs/doodle maths (2).jpg", link: "gr1-maths.html" },
        { subject: "ART", img: "Assets/home page assets/subs/doodle art.jpg" },
    ],
};

// Add event listeners to grade buttons
gradeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const grade = button.getAttribute('data-grade');
        const subjects = gradeContent[grade];
        const isActive = button.classList.contains('active');

        // Toggle the "active" class to show/hide the subjects for the clicked grade
        if (isActive) {
            // If grade is already active, remove the dropdown (hide the subjects)
            button.classList.remove('active');
            rectangleContainer.innerHTML = ''; // Clear the subjects
        } else {
            // If grade is not active, show the subjects
            gradeButtons.forEach(b => b.classList.remove('active')); // Remove 'active' from all buttons
            button.classList.add('active'); // Add 'active' to the clicked button

            // Clear and populate subjects
            rectangleContainer.innerHTML = '';
            subjects.forEach(subject => {
                const rectangle = document.createElement('div');
                rectangle.classList.add('rectangle');
                rectangle.innerHTML = `
                    <img src="${subject.img}" alt="${subject.subject}">
                    <a href="${subject.link}" class="start-button">${subject.subject}</a>
                `;
                rectangleContainer.appendChild(rectangle);
            });
        }

        // Set the grade banner text only if it's not already set
        if (!gradeBanner.textContent) {
            gradeBanner.textContent = `Grade ${grade}`;
            gradeBanner.style.display = 'block';
        }

        // Show the section (only once)
        if (rectangleContainer.innerHTML !== '') {
            sec3.style.display = 'block';

            // Smooth scroll to the section containing the content (sec3) and add an offset
            const offset = 100; // Adjust this value for more/less offset
            const elementPosition = sec3.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            // Scroll only when the dropdown is open (i.e., when rectangleContainer has content)
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
