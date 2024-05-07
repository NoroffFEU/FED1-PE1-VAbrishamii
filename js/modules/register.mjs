import { register } from "../pages/registerform.mjs";
import { Base_URL, Auth_endpoint } from "./api.mjs";

register();

document.addEventListener("DOMContentLoaded", async function(){
    const signupForm = document.getElementById("signup-form");

signupForm.addEventListener('submit', async function(event){
    event.preventDefault();

    let formData = new FormData(signupForm);
    let registerData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password")
    }

    const nameRegex = /^[a-zA-Z0-9_]+$/; // Name must not contain punctuation symbols apart from underscore (_)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/; // Valid stud.noroff.no email address
    const passwordMinLength = 8; // Minimum password length

    const name = registerData.name;
    const email = registerData.email;
    const password = registerData.password;

    
    // Validation checks
    if (!nameRegex.test(name)) {
        alert('Name must not contain punctuation symbols apart from underscore (_).');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid stud.noroff.no email address.');
        return;
    }

    if (password.length < passwordMinLength) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    const url = `${Base_URL}${Auth_endpoint.REGISTER}`;
    const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData)    
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
    } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again later.');
    }
})
})