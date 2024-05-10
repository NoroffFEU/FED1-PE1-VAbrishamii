import { Base_URL, Blog_endpoint } from "../modules/api.mjs";
import { createBlogForm } from "../pages/createpostform.mjs";

const form = createBlogForm();

export async function createBlogPost(form){

    // Get user information from local storage
    const userInfoString = localStorage.getItem("userInfo");
    const accessToken = localStorage.getItem("token");
    const userInfo = JSON.parse(userInfoString);
    const name = userInfo ? userInfo.data.name : null;
    // const name = userInfo.data.name;
    console.log('name', name);
    console.log('accessToken' , accessToken);

     if (!userInfo) {
      alert('Please log in to publish a blog post.');
     return;
     }

     const postData = {
        title,
        body: text,
        media: {
        url: image,
        alt: 'Blog image'
        },
        author: name
    };
        
    // Send POST request to create blog post
    const blogPostUrl = `${Base_URL}${Blog_endpoint.POST_BY_USER(name)}`;
    const blogPostOptions = {
     method: 'POST',
     headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(postData)
    };

    // Retrieve input values
    const title = form.querySelector("#title").value;
    const text = form.querySelector("#text").value;
    const image = form.querySelector("#image").value;

    // Check if any field is empty
      if (!title || !text || !image) {
       alert('Please fill in all fields.');
       return;
     }

    try{

        const blogPostResponse = await fetch(blogPostUrl, blogPostOptions);

        if (blogPostResponse.ok) {
            alert('create is successfully');
           return true; // Indicate success
        } else {
            alert('creating have problem');
            return false; // Indicate failure
        }
    } catch (error) {
        console.error('Error:', error);
        return false; // Indicate failure
    }

    }

    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent default form submission
        // Call createBlogPost function to handle form submission
        const success = await createBlogPost(form);
        if (success) {
            alert('Blog post created successfully!');
            // Here you can redirect the user or perform any other action
        } else {
            alert('Failed to create blog post. Please try again later.');
        }
    });

     
   




// const main = document.querySelector("main");

// // Call the function to create the blog post form
// const form = createBlogForm();
// main.appendChild(form);

// form.addEventListener("submit", async (event) => {
//     event.preventDefault();

//     // Retrieve input values
//     // const title = form.querySelector("#title").value;
//     // const text = form.querySelector("#text").value;
//     // const image = form.querySelector("#image").value;

//     // Get user information from local storage
//     const userInfoString = localStorage.getItem("userInfo");
//     const userInfo = JSON.parse(userInfoString);
//     const name = userInfo.data.name;
//     const accessToken = localStorage.getItem("token");

//     // If user information is not available, display an alert and return
//      if (!userInfo) {
//       alert('Please log in to publish a blog post.');
//      return;
//      }

//     // Create the blog post
//     const success = await createBlogPost(title, text, image, name, accessToken);
//     if (success) {
//         alert('Blog post created successfully!');
//         form.reset();
//     } else {
//         alert('Failed to create blog post. Please try again later.');
//     }
// });




// // Function to create a blog post
// export async function createBlogPost(event) {
//     event.preventDefault();

//     // Retrieve input values
//     const title = form.querySelector("#title").value;
//     const text = form.querySelector("#text").value;
//     const image = form.querySelector("#image").value;

//       // Check if any field is empty
//       if (!title || !text || !image) {
//         alert('Please fill in all fields.');
//         return;
//       }

//     try {
//         // Prepare data object for blog post
//         const postData = {
//             title,
//             body: text,
//             media: {
//                 url: image,
//                 alt: 'Blog image'
//             },
//             author: name
//         };

//         // Send POST request to create blog post
//         const blogPostUrl = `${Base_URL}${Blog_endpoint.POST_BY_USER(name)}`;
//         const blogPostOptions = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: "Bearer " + accessToken,
//             },
//             body: JSON.stringify(postData)
//         };

//         const blogPostResponse = await fetch(blogPostUrl, blogPostOptions);

//         if (blogPostResponse.ok) {
//             return true; // Indicate success
//         } else {
//             return false; // Indicate failure
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return false; // Indicate failure
//     }
// }