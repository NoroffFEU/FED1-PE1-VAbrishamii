import { postData } from "./api.mjs";

// Create login form elements
const loginForm = document.createElement('form');
loginForm.classList.add('login-form')
loginForm.innerHTML = `
    <i class="fa-solid fa-user-tie admin-icon"></i>
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit" class='btn'>Login</button>
`;

// Add event listener to handle form submission
loginForm.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');
    try{
        const response = await postData('/auth/login', {username, password});
        localStorage.setItem('token', token);
        window.localStorage.href = '../post/index.html';
    }
    catch{
        alert('An Error Occurd! Please try again')
    }
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

// Append logo and login form to the container
const container = document.getElementById('container');
container.appendChild(loginForm);
container.appendChild(signInText);



