// Select DOM elements
const container = document.querySelector('.container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const backButton = document.getElementById('backButton');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

// Switch to Sign Up form
function switchToSignUp() {
    container.classList.add('right-panel-active');
}

// Switch to Sign In form
function switchToSignIn() {
    container.classList.remove('right-panel-active');
}

// Event listeners for buttons
signUpButton.addEventListener('click', switchToSignUp);
signInButton.addEventListener('click', switchToSignIn);

// Handle Sign Up form submission
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle the sign-up logic here (e.g., validation, sending data to server, etc.)
    // For now, we just redirect to home.html
    window.location.href = 'home.html';
});

// Handle Sign In form submission
signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle the sign-in logic here (e.g., validation, sending data to server, etc.)
    // For now, we just redirect to home.html
    window.location.href = 'home.html';
});

// Handle sign-up with Facebook
function signUpWithFacebook() {
    // Redirect to Facebook OAuth for sign-up
    window.location.href = 'https://www.facebook.com/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI';
}

// Handle sign-up with Google
function signUpWithGoogle() {
    // Redirect to Google OAuth for sign-up
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile';
}
