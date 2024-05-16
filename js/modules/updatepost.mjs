import { Base_URL, Blog_endpoint } from "./api.mjs";
import { createForm } from "../pages/update.mjs";
import { singlePost } from "./singlepost.mjs";

createForm();


export async function updatePost(name,id){
    
    const postData = await singlePost(name,id);

    const title = postData.title;
    const body = postData.body;
    const imageURL = postData.media.url;

    const formData = {
        title: title,
        image: imageURL,
        body: body,
    };

    try{
        const accessToken = localStorage.getItem("token");
        const updateUrl = `${Base_URL}${Blog_endpoint.POST_BY_ID(name, id)}`;
        const response = await fetch (updateUrl,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                Authorization: "Bearer " + accessToken,
            },
            body: JSON.stringify(formData)


        });
        if (!response.ok){
            throw new Error ('Failed to update post');
        }
        alert('Post updated successfully!');
    }catch(error){
        console.log('Error updating post:', error);
        alert('Failed to update post. Please try again.');
    }
}

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
const postName = urlParams.get('name');

updatePost(postName,postId);


