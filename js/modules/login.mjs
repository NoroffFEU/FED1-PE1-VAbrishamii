
import { createLoginForm } from "../pages/loginform.mjs";
import { Auth_endpoint, Base_URL } from "./api.mjs";

// Function to perform login
export async function loginUser(email, password) {
    let loginData = {
        email: email,
        password: password
    };

    let userData = JSON.parse(localStorage.getItem("userData"));
    let accessToken = userData ? userData.accessToken : '';
    const url = `${Base_URL}${Auth_endpoint.LOGIN}`;
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
             Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(loginData)
    };

    try {
        console.log("Fetching URL:", url);
        console.log("Options:", options);
        const response = await fetch(url, options);
        console.log("Response:", response);

        if (!response.ok) {
            console.log("Login failed:", response.status);
            throw new Error('Invalid username and password');
        }

        const responseData = await response.json();
        console.log("Response Data:", responseData);

        localStorage.setItem('userInfo',JSON.stringify((responseData)));

        const token = responseData.data.accessToken;
        if (!token) {
            console.log("Login failed: Access token not found in response");
            throw new Error('Access token not found in response');
        }

        const userName = responseData.data.name;
        localStorage.setItem('userName', userName);

        console.log("Login successful. Access token:", token);
        return token;

    } catch (error) {
        console.error("Error:", error);
        throw new Error('Login failed');
    }
}
export function checkIfAdmin(username, password){
    if (username ==='vabri2023@stud.noroff.no' && password ==='Avnoroff23'){
        localStorage.setItem('isAdmin', 'true');
        return true;
    }else{
        localStorage.setItem('isAdmin', 'false');
        return false;
    }
}



// Add event listener to handle form submission
const loginForm = createLoginForm();
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
        console.log(token);


        const isAdmin = checkIfAdmin(username,password);

        if (isAdmin){
            window.location.href = '../post/edit.html';
        }else{
            window.location.href = '../index.html';
        }
        
    } catch (error) {
        alert('Invalid usernam and password! Please try again.');
    }

    console.log('Username:', username);
    console.log('Password:', password);
});




//Append logo and login form to the container
const container = document.getElementById('container');
container.appendChild(loginForm);





