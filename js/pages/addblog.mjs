import { Base_URL, Blog_endpoint } from "../modules/api.mjs";
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
    cancleButton.type = "submit";
    cancleButton.innerText = "Decline";
  
    // Append input fields and submit button to form
    form.append(titleLabel, titleInput,  imageLabel, imageInput, textLabel, textInput, submitButton , cancleButton);
  
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

    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      // If user is not logged in, display an alert to log in
      alert('Please log in to publish a blog post.');
      return;
    }
    try{

        // Prepare data object for blog post
    const postData = {
      title,
      body: text,
      media: {
        url: image,
        alt: 'Blog image'
      },
      author: name// Add the name of the author to the blog post data
    };

    // Send POST request to create blog post
    const blogPostUrl = `${Base_URL}${Blog_endpoint.POST_BY_USER(name)}`;
    const blogPostOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    };

      const blogPostResponse = await fetch(blogPostUrl, blogPostOptions);
      if (blogPostResponse.ok) {
        alert('Blog post created successfully!');
        // Clear input fields after successful post
        titleInput.value = '';
        textInput.value = '';
        imageInput.value = '';

        // Call function to display the newly created blog post
        displayBlogPost(postData);
      } else {
        // Handle error response from creating blog post
        alert('Failed to create blog post. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your request. Please try again later.');
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
  