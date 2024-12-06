import contentData from './content.js';

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"; // Hide the content
    } else {
        dropdown.style.display = "block"; // Show the content
    }
}

// Add event listeners to grade buttons
contentData.gradeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const grade = button.getAttribute('data-grade');
        const subjects = contentData.gradeContent[grade];
        const isActive = button.classList.contains('active');

        // Toggle the "active" class to show/hide the subjects for the clicked grade
        if (isActive) {
            // If grade is already active, remove the dropdown (hide the subjects)
            button.classList.remove('active');
            contentData.rectangleContainer.innerHTML = ''; // Clear the subjects
        } else {
            // If grade is not active, show the subjects
            contentData.gradeButtons.forEach(b => b.classList.remove('active')); // Remove 'active' from all buttons
            button.classList.add('active'); // Add 'active' to the clicked button

            // Clear and populate subjects
            contentData.rectangleContainer.innerHTML = '';
            subjects.forEach(subject => {
                const rectangle = document.createElement('div');
                rectangle.classList.add('rectangle');
                rectangle.innerHTML = `
                    <img src="${subject.img}" alt="${subject.subject}">
                    <a href="${subject.link}" class="start-button">${subject.subject}</a>
                `;
                contentData.rectangleContainer.appendChild(rectangle);
            });
        }

        // Set the grade banner text only if it's not already set
        if (!contentData.gradeBanner.textContent) {
            contentData.gradeBanner.textContent = `Grade ${grade}`;
            contentData.gradeBanner.style.display = 'block';
        }

        // Show the section (only once)
        if (contentData.rectangleContainer.innerHTML !== '') {
            contentData.sec3.style.display = 'block';

            // Smooth scroll to the section containing the content (sec3) and add an offset
            const offset = 100; // Adjust this value for more/less offset
            const elementPosition = contentData.sec3.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            // Scroll only when the dropdown is open (i.e., when rectangleContainer has content)
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
