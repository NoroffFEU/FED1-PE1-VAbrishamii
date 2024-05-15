// import { createBlogPost } from "../modules/createpost.mjs";
// import { createNavbar } from "./navbar.mjs";

createNavbar('container');

export function createBlogForm() {
    const main = document.querySelector("main");
    const form = document.createElement("form");
    form.className = "blog-form";

    //Create input fields for title, text, and image URL
    const titleLabel = document.createElement("label");
    titleLabel.innerText = "Title:";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    
    const imageLabel = document.createElement("label");
    imageLabel.innerText = "Image URL:";
    const imageInput = document.createElement("input");
    imageInput.type = "text";
    imageInput.id = "image";
    imageInput.name = "image";

    const textLabel = document.createElement("label");
    textLabel.innerText = "Blog Text:";
    const textInput = document.createElement("textarea");
    textInput.id = "text";
    textInput.name = "text";
  
    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.classList.add('blue-btn');
    submitButton.type = "submit";
    submitButton.innerText = "Save";

    const cancleButton = document.createElement("button");
    cancleButton.classList.add('btn');
    cancleButton.type = "button";
    cancleButton.innerText = "Decline";
  
    // Append input fields and submit button to form
    form.append(titleLabel, titleInput,  imageLabel, imageInput, textLabel, textInput, submitButton , cancleButton);
    main.appendChild(form);
    return form;

}

async function handleFormsubmit(event) {
    event.preventDefault();
    const FormData = new FormData(event.target);
    const postData ={
        title: FormData.get('title'),
        body: FormData.get('text'),
        media:{
            url:FormData.get('image')
        }
        
    };
    try {
        const createdPost = await createBlogPost(postData);
        console.log('Post created:', createdPost);
        // Add any further actions after successful post creation, like redirecting to another page
    } catch (error) {
        // Handle error
        console.error('Failed to create post:', error);
    }

}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormsubmit);
});


