// import { createNavbar } from "./navbar.mjs";

// createNavbar('container');

// export function createBlogForm() {
//     // const main = document.querySelector("main");
//     const form = document.createElement("form");
//     form.className = "blog-form";

//     //Create input fields for title, text, and image URL
//     const titleLabel = document.createElement("label");
//     titleLabel.innerText = "Title:";
//     const titleInput = document.createElement("input");
//     titleInput.type = "text";
//     titleInput.id = "title";
//     titleInput.name = "title";
    
//     const imageLabel = document.createElement("label");
//     imageLabel.innerText = "Image URL:";
//     const imageInput = document.createElement("input");
//     imageInput.type = "text";
//     imageInput.id = "image";
//     imageInput.name = "image";

//     const textLabel = document.createElement("label");
//     textLabel.innerText = "Blog Text:";
//     const textInput = document.createElement("textarea");
//     textInput.id = "text";
//     textInput.name = "text";
  
//     // Create submit button
//     const submitButton = document.createElement("button");
//     submitButton.classList.add('blue-btn');
//     submitButton.type = "submit";
//     submitButton.innerText = "Save";

//     const cancleButton = document.createElement("button");
//     cancleButton.classList.add('btn');
//     cancleButton.type = "button";
//     cancleButton.innerText = "Decline";
  
//     // Append input fields and submit button to form
//     form.append(titleLabel, titleInput,  imageLabel, imageInput, textLabel, textInput, submitButton , cancleButton);

//     return form;

// }