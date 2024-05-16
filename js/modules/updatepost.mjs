import { Base_URL, Blog_endpoint } from "./api.mjs";
import { createForm } from "../pages/update.mjs";
import { singlePost } from "./singlepost.mjs";
import { createNavbar } from "../pages/navbar.mjs";
import { createFooter } from "../pages/footer.mjs";

async function main() {
    createNavbar('container');
  
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const postName = urlParams.get('name');

  

    createForm(postName,postId);
    await updatePost(postName, postId);
    createFooter();
    
   
}


export async function updatePost(name,id){

    const postData = await singlePost(name,id);

    const title = postData.data.title;
    const body = postData.data.body;
    const imageURL = postData.data.media.url;
  

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
        // alert('Post updated successfully!');
    }catch(error){
        console.log('Error updating post:', error);
        alert('Failed to update post. Please try again.');
    }
}

main();


