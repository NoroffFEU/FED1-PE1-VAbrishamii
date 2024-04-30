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
    event.preventDefault(); // Prevent the default form submission behavior
    // Your login logic here
    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Username:', username);
    console.log('Password:', password);
    // After handling login logic, you can redirect the user to another page or perform other actions
});

const signInText = document.createElement('p');
signInText.classList.add('sign-in')
signInText.textContent = "If your not a member Click here to sign in";

signInText.addEventListener('click', function() {
    window.location.href = "register.html"; // Replace with the URL of your sign-in page
});

const adminText = document.createElement('p');
adminText.classList.add('admin-txt');
adminText.textContent ='This part only use by admin';

const adminButton =document.createElement('button')
adminButton.classList.add('btn');
adminButton.textContent = 'Admin Login';

// Append logo and login form to the container
const container = document.getElementById('container');
container.appendChild(logo);
container.appendChild(loginForm);
container.appendChild(signInText);
container.appendChild(adminText);
container.appendChild(adminButton);

