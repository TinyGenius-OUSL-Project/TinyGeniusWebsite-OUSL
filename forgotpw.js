document.getElementById("forgotPasswordForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    message.textContent = '';
    message.style.display = 'none';

    if (!email) {
        message.textContent = "Please enter your email.";
        message.style.display = 'block';
        return;
    }

    try {
        const response = await fetch("forgotPassword.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ email: email })
        });

        const result = await response.json();
        if (result.status === "success") {
            message.style.color = "green";
            message.textContent = result.message;
        } else {
            message.style.color = "red";
            message.textContent = result.message;
        }
        message.style.display = 'block';
    } catch (error) {
        message.style.color = "red";
        message.textContent = "An error occurred. Please try again.";
        message.style.display = 'block';
    }
});
