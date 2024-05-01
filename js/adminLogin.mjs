const loginForm = document.createElement('form');
loginForm.classList.add('login-form')
loginForm.innerHTML = `
    <i class="fa-solid fa-user-tie"></i>
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

const container = document.getElementById('container');
container.appendChild(loginForm);
