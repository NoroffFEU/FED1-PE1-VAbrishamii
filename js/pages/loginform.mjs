export function createLoginForm(){
    
const loginForm = document.createElement('form');
loginForm.classList.add('login-form')
loginForm.innerHTML = `
    <i class="fa-solid fa-user-tie admin-icon"></i>
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit" class='btn' id="loginBtn">Login</button>
    <button type="text" class='btn-account' id='createAccountBtn'>Register</button>

`;

const createAccountBtn = loginForm.querySelector('#createAccountBtn');
createAccountBtn.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = 'register.html';
});
const container = document.getElementById('container');
container.appendChild(loginForm);
return loginForm;
}

