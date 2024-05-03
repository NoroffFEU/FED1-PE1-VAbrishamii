
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


// Function to perform login
export async function loginUser(email, password) {
    const loginData = {
        email: "vabri2023@stud.noroff.no",
        password: "Avnoroff23"
    };

    const url = `${Base_URL}${Auth_endpoint.LOGIN}`;
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(loginData)
    };

    try {
        console.log("Fetching URL:", url);
        console.log("Options:", options);

        const response = await fetch(url, options);
        console.log("Response:", response);

        if (!response.ok) {
            console.log("Login failed: HTTP error:", response.status);
            throw new Error('Login failed');
        }

        const responseData = await response.json();
        console.log("Response Data:", responseData);

        const token = responseData.data.accessToken;
        if (!token) {
            console.log("Login failed: Access token not found in response");
            throw new Error('Access token not found in response');
        }

        console.log("Login successful. Access token:", token);
        return token;

    } catch (error) {
        console.error("Error:", error);
        throw new Error('Login failed');
    }
}


// // Function to perform login
// export async function loginUser(email, password) {
//     const loginData = {
//         email: "vabri2023@stud.noroff.no",
//         password: "Avnoroff23"
//     };

//     const url = `${Base_URL}${Auth_endpoint.LOGIN}`;
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(loginData)
//     };

//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error('Login failed');
//         }
//         const responseData = await response.json();
//         const token = responseData.data.accessToken;
//         if (!token) {
//             throw new Error('Access token not found in response');
//         }
//         return token;
//     } catch (error) {
//         throw new Error('Login failed');
//     }
// }


// Add event listener to handle form submission
loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
        const token = await loginUser(username, password);
        console.log('Username:', username);
        console.log('Password:', password);
        localStorage.setItem('token', token);
        window.location.href = '../post/index.html';
    } catch (error) {
        // console.error('Login failed:', error);
        alert('An Error Occurred! Please try again');
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







