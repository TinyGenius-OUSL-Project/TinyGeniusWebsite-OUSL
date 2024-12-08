import contentData from './content.js';

const contentContainer = document.getElementById('content-container');
const gradeTitle = document.getElementById('grade-title');
const subjectTitle = document.getElementById('subject-title');

function createDropdown(unit) {
    const dropdown = document.createElement('div');
    dropdown.classList.add('content-item');

    const unitTitle = document.createElement('div');
    unitTitle.classList.add('content-text');
    unitTitle.textContent = unit.unitTitle;

    const arrow = document.createElement('span');
    arrow.classList.add('arrow');
    arrow.innerHTML = '▼';

    dropdown.appendChild(unitTitle);
    dropdown.appendChild(arrow);


    const dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');
    dropdownContent.style.display = 'none';


    const categories = [
        { title: 'Games', items: unit.games },
        { title: 'Quizzes', items: unit.quizzes },
        { title: 'Videos', items: unit.videos },
    ];

    categories.forEach((category) => {
        if (category.items.length > 0) {
            const categorySection = document.createElement('div');
            categorySection.classList.add('category');

            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category.title;
            categorySection.appendChild(categoryTitle);

            const categoryItems = document.createElement('div');
            categoryItems.classList.add('category-items');

            category.items.forEach((item) => {
                const itemCard = document.createElement('a');
                itemCard.classList.add('category-card');
                itemCard.href = item.url;

                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.name;

                const name = document.createElement('span');
                name.textContent = item.name;

                itemCard.appendChild(img);
                itemCard.appendChild(name);

                categoryItems.appendChild(itemCard);
            });

            categorySection.appendChild(categoryItems);
            dropdownContent.appendChild(categorySection);
        }
    });

    dropdown.appendChild(dropdownContent);


    dropdown.addEventListener('click', () => {
        const isOpen = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isOpen ? 'none' : 'block';


        dropdownContent.style.marginTop = isOpen ? '0' : '2rem'; 
    });

    return dropdown;
}


function populateContent() {
    const grade = localStorage.getItem('selectedGrade') || '1'; 
    const subject = localStorage.getItem('selectedSubject') || 'Maths'; 


    gradeTitle.textContent = `< Grade ${grade}`;
    subjectTitle.textContent = subject;


    const gradeContent = contentData.gradeContent[grade];
    const subjectContent = gradeContent.find(
        (item) => item.subject.toLowerCase() === subject.toLowerCase()
    );

    if (subjectContent && subjectContent.units.length > 0) {

        contentContainer.innerHTML = ''; 
        subjectContent.units.forEach((unit) => {
            const dropdown = createDropdown(unit);
            contentContainer.appendChild(dropdown);
        });
    } else {

        contentContainer.innerHTML = '<p>No content available for this subject.</p>';
    }
}


populateContent();



