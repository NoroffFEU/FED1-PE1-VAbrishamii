import { Base_URL } from "../modules/api.mjs";
import { createNavbar } from "./navbar.mjs";

createNavbar('container');

// Function to create the blog post form
const createBlogForm = () => {
    const main = document.querySelector("main");
  
    // Create form element
    const form = document.createElement("form");
    form.className = "blog-form";
  
    // Create input fields for title, text, and image URL
    const titleLabel = document.createElement("label");
    titleLabel.innerText = "Title:";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    const textLabel = document.createElement("label");
    textLabel.innerText = "Blog Text:";
    const textInput = document.createElement("textarea");
    textInput.id = "text";
    textInput.name = "text";
    const imageLabel = document.createElement("label");
    imageLabel.innerText = "Image URL:";
    const imageInput = document.createElement("input");
    imageInput.type = "text";
    imageInput.id = "image";
    imageInput.name = "image";
  
    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.classList.add('blue-btn');
    submitButton.type = "submit";
    submitButton.innerText = "Save";
  
    // Append input fields and submit button to form
    form.append(titleLabel, titleInput, textLabel, textInput, imageLabel, imageInput, submitButton);
  
    // Add submit event listener to form
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      // Retrieve input values
      const title = titleInput.value;
      const text = textInput.value;
      const image = imageInput.value;
  
      // Check if any field is empty
      if (!title || !text || !image) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Prepare data object
      const postData = {
        title,
        body: text,
        media: {
          url: image,
          alt: 'Blog image'
        }
      };
  
      // Send POST request to API endpoin 
      const url = `${Base_URL}${Blog_endpoint.POSTS_BY_USER(name)}`
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData)    
    };

      try {
        const response = await fetch(url,options );
  
        // Check if request was successful
        if (response.ok) {
          alert('Blog post created successfully!');
          // Clear input fields after successful post
          titleInput.value = '';
          textInput.value = '';
          imageInput.value = '';
  
          // Call function to display the newly created blog post
          displayBlogPost(postData);
        } else {
          // Handle error response
          alert('Failed to create blog post. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while posting the blog. Please try again later.');
      }
    });
  
    // Append form to main element
    main.appendChild(form);
  };
  
  // Function to display the blog post on the page
  const displayBlogPost = (postData) => {
    const main = document.querySelector("main");
  
    // Create elements to display the blog post
    const blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    const title = document.createElement("h2");
    title.innerText = postData.title;
    const text = document.createElement("p");
    text.innerText = postData.body;
    const image = document.createElement("img");
    image.src = postData.media.url;
    image.alt = postData.media.alt;
  
    // Append elements to the blog post container
    blogPost.append(title, text, image);
  
    // Append blog post to the main element
    main.appendChild(blogPost);
  };
  
  // Call the function to create the blog post form
  createBlogForm();
  