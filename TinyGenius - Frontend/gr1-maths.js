import contentData from './content.js';

const contentContainer = document.getElementById('content-container');

// Function to create a dropdown
function createDropdown(unit) {
    const dropdown = document.createElement('div');
    dropdown.classList.add('content-item');
    
    const unitTitle = document.createElement('div');
    unitTitle.classList.add('content-text');
    unitTitle.textContent = unit.unitTitle;

    const arrow = document.createElement('span');
    arrow.classList.add('arrow');
    arrow.innerHTML = '▼'; // Dropdown arrow

    dropdown.appendChild(unitTitle);
    dropdown.appendChild(arrow);
    
    // Create the dropdown content (Games, Quizzes, Videos)
    const dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');
    
    // Create sections for games, quizzes, and videos
    const categories = [
        { title: 'Games', items: unit.games },
        { title: 'Quizzes', items: unit.quizzes },
        { title: 'Videos', items: unit.videos }
    ];

    categories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.classList.add('category');

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.title;
        categorySection.appendChild(categoryTitle);

        const categoryItems = document.createElement('div');
        categoryItems.classList.add('category-items');

        category.items.forEach(item => {
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
    });

    dropdown.appendChild(dropdownContent);
    
    // Toggle the dropdown visibility when clicked
    dropdown.addEventListener('click', () => {
        toggleDropdown(dropdownContent, unitTitle);
    });

    return dropdown;
}

// Function to toggle dropdown visibility
function toggleDropdown(dropdownContent, unitTitle) {
    // Check if the dropdown is currently open
    const isOpen = dropdownContent.style.display === 'block';

    if (isOpen) {
        // Close the dropdown and remove extra margin
        dropdownContent.style.display = 'none';
        unitTitle.style.marginBottom = '0'; // Remove margin when closed
    } else {
        // Open the dropdown and add margin to the title
        dropdownContent.style.display = 'block';
        unitTitle.style.marginBottom = '2rem'; // Add space between title and content
    }
}

// Add content dynamically to the page
function populateContent() {
  const contentContainer = document.getElementById('content-container');
  contentContainer.style.marginTop = '2rem';  // Add margin dynamically (if needed)

  contentData.gradeContent[1][0].units.forEach(unit => {
      const dropdown = createDropdown(unit);
      contentContainer.appendChild(dropdown);
  });
}

// Initialize the content
populateContent();

