// import { createLogo } from "../modules/logo.mjs";

// export function createLoginForm(){
 
    
// const loginForm = document.createElement('form');
// loginForm.classList.add('login-form');

// const logo = createLogo("../asset/images/logo.png", "Trip", "logo");
// loginForm.appendChild(logo);

// loginForm.innerHTML = `  
//     <i class="fa-solid fa-user-tie admin-icon"></i>
//     <input type="text" name="username" placeholder="Username">
//     <input type="password" name="password" placeholder="Password">
//     <button type="submit" class='btn' id="loginBtn">Login</button>
//     <button type="text" class='btn-account' id='createAccountBtn'>Register</button>

// `;

// const createAccountBtn = loginForm.querySelector('#createAccountBtn');
// createAccountBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     window.location.href = 'register.html';
// });
// const container = document.getElementById('container');
// container.appendChild(loginForm);
// return loginForm;
// }
import { createLogo } from "../modules/logo.mjs";

export function createLoginForm() {
    const loginForm = document.createElement('form');
    loginForm.classList.add('login-form');

    const logo = createLogo("../asset/images/logo.png", "Trip", "logo");
    loginForm.appendChild(logo);


    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Username';
    loginForm.appendChild(usernameInput);

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Password';
    loginForm.appendChild(passwordInput);

    const loginButton = document.createElement('button');
    loginButton.type = 'submit';
    loginButton.classList.add('btn');
    loginButton.id = 'loginBtn';
    loginButton.textContent = 'Login';
    loginForm.appendChild(loginButton);

    const createAccountButton = document.createElement('button');
    createAccountButton.type = 'button'; // Changed to 'button' to prevent form submission
    createAccountButton.classList.add('btn-account');
    createAccountButton.id = 'createAccountBtn';
    createAccountButton.textContent = 'Register';
    createAccountButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'register.html';

    });
    loginForm.appendChild(createAccountButton);


    const container = document.getElementById('container');
    container.appendChild(loginForm);
    return loginForm;
}


