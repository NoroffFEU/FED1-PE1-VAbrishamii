import { register } from "../pages/registerform.mjs";
import { Base_URL, Auth_endpoint } from "./api.mjs";

register();

document.addEventListener("DOMContentLoaded", async function(){
    const signupForm = document.getElementById("signup-form");

signupForm.addEventListener('submit', async function(event){
    event.preventDefault();

    let registerData = {
        name: "vahideh",
        email: "vabri2023@stud.noroff.no",
        password: "Avnoroff23"
    };
   

    // let formData = new FormData(signupForm);
    // let registerData = {
    //     name: formData.get("name"),
    //     email: formData.get("email"),
    //     password: formData.get("password")
    // }

    // const firstName = document.getElementById('name').value;
    // const lastName = document.getElementById('last-name').value;
    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;
    // const confirmPassword = document.getElementById('confirm-password').value;

    // const nameRegex = /^[a-zA-Z0-9_]+$/; // Name must not contain punctuation symbols apart from underscore (_)
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/; // Valid stud.noroff.no email address
    // const passwordMinLength = 8; // Minimum password length

    
    // // Validation checks
    // if (!nameRegex.test(Name) || !nameRegex.test(lastName)) {
    //     alert('Name must not contain punctuation symbols apart from underscore (_).');
    //     return;
    // }

    // if (!emailRegex.test(email)) {
    //     alert('Please enter a valid stud.noroff.no email address.');
    //     return;
    // }

    // if (password.length < passwordMinLength) {
    //     alert('Password must be at least 8 characters long.');
    //     return;
    // }

    // if (password !== confirmPassword) {
    //     alert('Passwords do not match.');
    //     return;
    // }

        let userData = JSON.parse(localStorage.getItem("userData"));
        let accessToken = userData ? userData.accessToken : '';
        const url = `${Base_URL}${Auth_endpoint.REGISTER}`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + accessToken,
            },
            body: JSON.stringify( registerData)
                // firstName,
                // lastName,
                // email,
                // password
           
        };
        try {
            console.log(url);
            console.log(options);
            const response = await fetch(url,options);
            console.log(response);

        if (!response.ok) {
         
            throw new Error('Failed to register');
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

        // If registration is successful, redirect to admin page
        // window.location.href = '/admin.html'; // Replace with your admin page URL
    } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again later.');
    }
})
})