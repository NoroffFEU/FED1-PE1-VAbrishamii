import { createLogo } from "./utils.mjs";

const logo = createLogo('../asset/images/logo.png', 'Trip', 'logo');

// Create login form elements
const loginForm = document.createElement('form');
loginForm.classList.add('login-form')
loginForm.innerHTML = `
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit" class='btn'>Login</button>
`;

// Add event listener to handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Username:', username);
    console.log('Password:', password);
});

// create sign up section
const signInText = document.createElement('p');
signInText.classList.add('sign-in');
signInText.textContent = "If you're not a member click here to ";
const signInLink = document.createElement('span');
signInLink.classList.add('sign-in-link');
signInLink.textContent = "Sign Up";
signInText.appendChild(signInLink);

signInLink.addEventListener('click', function() {
    window.location.href = "register.html"; 
});

// create admin section
const adminText = document.createElement('p');
adminText.classList.add('admin-txt');
adminText.textContent ='This part only use by admin';

const adminButton =document.createElement('button')
adminButton.classList.add('admin-btn');
adminButton.textContent = 'Admin Login';

adminButton.addEventListener('click', function() {
    window.location.href = '../post/admin-login.html'
})

// Append logo and login form to the container
const container = document.getElementById('container');
container.appendChild(logo);
container.appendChild(loginForm);
container.appendChild(signInText);
container.appendChild(adminText);
container.appendChild(adminButton);

