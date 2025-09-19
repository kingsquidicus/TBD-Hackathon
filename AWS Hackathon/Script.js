document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const messageDiv = document.getElementById('message');

    // Toggle between login and sign up forms
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        messageDiv.textContent = '';
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        messageDiv.textContent = '';
    });

    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Simple validation check
        if (!validateEmail(email)) {
            displayMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate a backend check for a valid user
        if (email === 'test@example.com' && password === 'password123') {
            displayMessage('Login successful! Redirecting...', 'success');
            // In a real app, you would redirect the user here
            // window.location.href = '/dashboard';
        } else {
            displayMessage('Invalid email or password.', 'error');
        }
    });

    // Handle Sign Up
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (!validateEmail(email)) {
            displayMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate a successful account creation
        // In a real app, this data would be sent to a backend
        displayMessage('Account created! A verification email has been sent.', 'success');
    });

    // Helper function for email validation (regex)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Helper function to display messages
    function displayMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
    }
});