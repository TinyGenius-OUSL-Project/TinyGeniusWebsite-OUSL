document.addEventListener("DOMContentLoaded", () => {
    const successModal = document.getElementById("successModal");
    const okButton = document.getElementById("okButton");
    const profileForm = document.getElementById("profileForm");
    const profileImage = document.getElementById("profileImage");
    const profilePictureInput = document.getElementById("profilePictureInput");


profilePictureInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

profileForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(profileForm);

    fetch('profile.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Debug: Check server response
        if (successModal) {
            successModal.style.display = "block"; 
        } else {
            console.error("Success modal not found in the DOM.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

if (okButton) {
    okButton.addEventListener("click", () => {
        successModal.style.display = "none";
        
    });
}

window.addEventListener("click", (e) => {
    if (e.target === successModal) {
        successModal.style.display = "none";
    }
});

});





