

document.addEventListener("DOMContentLoaded", () => {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const dropdownIcon = document.querySelector(".dropdown-icon");
    const dropdownItems = document.querySelectorAll(".dropdown-item");


    // Toggle Dropdown on Icon Click
    dropdownIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent click from bubbling up
        dropdownMenu.classList.toggle("open");
        dropdownIcon.setAttribute(
            "aria-expanded",
            dropdownMenu.classList.contains("open")
        );
    });

    // Hide Dropdown When an Item is Selected
    dropdownItems.forEach((item) => {
        item.addEventListener("click", () => {
            dropdownMenu.classList.remove("open");
            dropdownIcon.setAttribute("aria-expanded", "false");
        });
    });

    // Hide Dropdown When Clicking Outside
    document.addEventListener("click", () => {
        if (dropdownMenu.classList.contains("open")) {
            dropdownMenu.classList.remove("open");
            dropdownIcon.setAttribute("aria-expanded", "false");
        }
    });

});