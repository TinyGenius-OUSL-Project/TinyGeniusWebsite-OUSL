// Signup Form Validation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm_password').value.trim();
    const errorMessage = document.getElementById('signup-error'); // Error message container

    // Clear previous error messages
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';

    // Validate fields
    if (!username || !email || !password || !confirmPassword) {
      errorMessage.textContent = 'All fields are required!';
      errorMessage.style.display = 'block';
      return;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address!';
      errorMessage.style.display = 'block';
      return;
    }

    // Validate password length
    if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters long!';
      errorMessage.style.display = 'block';
      return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match!';
      errorMessage.style.display = 'block';
      return;
    }

    // Send data to the server
    try {
      const response = await fetch(signupForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: username,
          email: email,
          password: password,
          confirm_password: confirmPassword,
        }),
      });

      const textResponse = await response.text(); // Expect plain text response (PHP echo)
      if (textResponse.includes('Email already exists!')) {
        errorMessage.textContent = 'Email already exists!';
        errorMessage.style.display = 'block';
      } else if (textResponse.includes('Error')) {
        errorMessage.textContent = 'An error occurred while processing your request.';
        errorMessage.style.display = 'block';
      } else {
        // Assume success; redirect to login page
        window.location.href = 'Login.html'; // Adjust to your login page path
      }
    } catch (error) {
      errorMessage.textContent = 'An error occurred. Please try again later.';
      errorMessage.style.display = 'block';
    }
  });
}
const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const userInput = document.getElementById("user_input").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMessage = document.getElementById("login-error"); // Error message container
  
      // Clear previous error messages
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
  
      // Validate fields
      if (!userInput || !password) {
        errorMessage.textContent = 'All fields are required!';
        errorMessage.style.display = 'block';
        return;
      }
  
      try {
        // Send POST request to LogIn.php
        const response = await fetch("LogIn.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            user_input: userInput,
            password: password,
          }),
        });
  
        const result = await response.json();
  
        if (result.status === "success") {
          // Redirect to homepage on success
          window.location.href = result.redirect;
        } else {
          // Display error message
          errorMessage.textContent = result.message;
          errorMessage.style.display = "block";
        }
      } catch (error) {
        // Display general error message
        errorMessage.textContent = "An error occurred. Please try again.";
        errorMessage.style.display = "block";
      }
    });
  }
  

