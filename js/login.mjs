
import { Auth_endpoint, Base_URL } from "./api.mjs";


// Create login form elements
const loginForm = document.createElement('form');
loginForm.classList.add('login-form')
loginForm.innerHTML = `
    <i class="fa-solid fa-user-tie admin-icon"></i>
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit" class='btn'>Login</button>
`;
//login user function


export async function loginUser(email, password) {
const loginData ={
    email: email,
    password: password
};
;
const url = `${Base_URL}${Auth_endpoint.LOGIN}`;
const options ={
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)

};

try{
    const response = await fetch (url,options);
    if (!response.ok) {
        throw new Error('Login failed');
    }
    const responseData = await response.json();
    const token = responseData.accessToken;
    console.log(token);
    if (!token) {
        throw new Error('Access token not found in response');
    }
    console.log(token);
    return token; 
       
    } catch (error) {
        alert('something went wrong');
    }
}
(async () => {
    try {
        const email = "vabri2023@stud.noroff.no";
        const password = "Avnoroff23";


        await loginUser(email, password);
    } catch (error) {
        console.error('Login failed:', error);
    }
})



//Add event listener to handle form submission
loginForm.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');
    try{
        const response = await postData('/auth/login', {username, password});
        localStorage.setItem('token', token);
        window.location.href = '../post/index.html';
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







