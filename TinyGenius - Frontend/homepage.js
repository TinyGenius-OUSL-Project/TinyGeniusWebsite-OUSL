
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
                rectangle.innerHTML = `
                    <img src="${subject.img}" alt="${subject.subject}">
                    <a href="${subject.link}" class="start-button" data-grade="${grade}" data-subject="${subject.subject}">
                        ${subject.subject}
                    </a>
                `;


                rectangle.querySelector('.start-button').addEventListener('click', (e) => {
                    e.preventDefault(); 
                    localStorage.setItem('selectedGrade', grade);
                    localStorage.setItem('selectedSubject', subject.subject);
                    window.location.href = subject.link; 
                });

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

