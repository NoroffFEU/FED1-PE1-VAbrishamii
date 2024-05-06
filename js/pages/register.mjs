import { createLogo } from "../modules/logo.mjs";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const logo = createLogo("../asset/images/logo.png", "Trip", "logo");
  container.appendChild(logo);

  const signupContainer = document.createElement("div");
  signupContainer.id = "signup-container";
  signupContainer.className = "signup-container";
  const signupForm = document.createElement("form");
  signupForm.id = "signup-form";
  signupForm.className = "signup-form";
  const signupMessage = document.createElement("p");
  signupMessage.id = "signup-message";

  // Append form and message to signup container
  signupContainer.appendChild(signupForm);
  signupContainer.appendChild(signupMessage);

  // Append signup container to main container
  container.appendChild(signupContainer);

  // Function to create form elements
  function createFormElement(type, id, label) {
    const div = document.createElement("div");
    div.className = "form";

    const labelElement = document.createElement("label");
    labelElement.textContent = label;
    labelElement.className = "form-label";

    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = id;
    input.required = true;
    input.className = "form-input";

    div.appendChild(labelElement);
    div.appendChild(input);
    signupForm.appendChild(div);
  }

  // Create form elements for name, last name, email, password, and confirmation password
  createFormElement("text", "first-name", "Name *");
  createFormElement("text", "last-name", "Last Name *");
  createFormElement("email", "email", "Email *");
  createFormElement("password", "password", "Password *");
  createFormElement("password", "confirm-password", "Confirm Password *");

  // Create submit button
  const submitButton = document.createElement("button");
  submitButton.classList.add("btn", "signup-btn");
  submitButton.type = "submit";
  submitButton.textContent = "Sign Up";
  signupForm.appendChild(submitButton);

  // Event listener for form submission
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = signupForm.elements["first-name"].value;
    const lastName = signupForm.elements["last-name"].value;
    const email = signupForm.elements.email.value;
    const password = signupForm.elements.password.value;
    const confirmPassword = signupForm.elements["confirm-password"].value;

    // Perform validation (e.g., check if passwords match)
    if (password !== confirmPassword) {
      signupMessage.textContent = "Passwords do not match!";
    } else {
      // You can perform further processing here, like sending the data to a server
      signupMessage.textContent = `Signing up ${firstName} ${lastName} with email: ${email}`;
    }
  });
});
