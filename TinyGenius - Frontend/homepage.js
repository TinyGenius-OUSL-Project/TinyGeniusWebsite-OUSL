import contentData from './content.js';

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"; 
    } else {
        dropdown.style.display = "block"; 
    }
}

contentData.gradeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const grade = button.getAttribute('data-grade');
        const subjects = contentData.gradeContent[grade];
        const isActive = button.classList.contains('active');
        

        const selectedSubjects = JSON.parse(localStorage.getItem('selectedSubjects')) || {};
        const selectedSubjectsForGrade = selectedSubjects[grade] || [];

        if (isActive) {

            button.classList.remove('active');
            contentData.rectangleContainer.innerHTML = ''; 
        } else {

            contentData.gradeButtons.forEach(b => b.classList.remove('active')); 
            button.classList.add('active'); 

            contentData.rectangleContainer.innerHTML = '';
            
            subjects.forEach((subject) => {
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


                if (selectedSubjectsForGrade.includes(subject.subject)) {

                    startButton.classList.remove('locked');
                    startButton.addEventListener('click', (e) => {
                        e.preventDefault(); 
                        localStorage.setItem('selectedGrade', grade);
                        localStorage.setItem('selectedSubject', subject.subject);
                        window.location.href = subject.link; 
                    });


                    overlay.style.display = 'none'; 
                } else {

                    startButton.classList.add('locked');
                    startButton.addEventListener('click', (e) => {
                        e.preventDefault();
                        alert("This subject is locked. Please select it first.");
                    });


                    overlay.style.display = 'block'; 
                }

                rectangle.appendChild(startButton);
                contentData.rectangleContainer.appendChild(rectangle);
            });
        }

        if (!contentData.gradeBanner.textContent) {
            contentData.gradeBanner.textContent = `Grade ${grade}`;
            contentData.gradeBanner.style.display = 'block';
        }

        if (contentData.rectangleContainer.innerHTML !== '') {
            contentData.sec3.style.display = 'block';

            const offset = 100; 
            const elementPosition = contentData.sec3.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


