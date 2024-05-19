import { singlePost } from "../modules/singlepost.mjs";
import { createFooter } from "./footer.mjs";
import { createNavbar } from "./navbar.mjs";
 createNavbar('container');
 createFooter();

export async function displaySinglePost(postName, postId) {
    try {
        const post = await singlePost(postName, postId);
        console.log('post', post);

        if (!post || !post.data) {
            throw new Error('Invalid post data');
        }

        const postData = post.data;

        const singlePostContent = document.getElementById('single-post');
        singlePostContent.innerHTML = '';

        const postContent = `
           <div class= 'single-post'>
            <h1>${postData.title}</h1>
            <img src="${postData.media.url}" alt="${postData.title}">
            <p id="postBody"></p>
            <p>Author: ${postData.author.name}</p>
            <i class="fa-solid fa-share share"></i>
           <div>
        `;
        singlePostContent.innerHTML = postContent;

        const postBody = singlePostContent.querySelector('#postBody');
        postBody.innerText = postData.body; 
        
        const shareLink = singlePostContent.querySelector('.share');
        shareLink.addEventListener('click', async () => {
            const postUrl = window.location.href;
            try {
                await navigator.share({ url: postUrl });
                console.log('Post shared successfully');
            } catch (error) {
                console.error('Error sharing post:', error);
            }
        });
    } catch (error) {
        console.error('Error displaying single post:', error);
    }

}


export async function displayPostFromUrlParams() {
        try {
            const params = new URLSearchParams(window.location.search);
            console.log('URL Params:', params.toString());
    
            const postId = params.get('id');
            console.log('postid', postId)
            const postName = params.get('name');
            console.log('postname', postName)
    
            if (!postId || !postName) {
                throw new Error('Post ID or name missing from URL parameters');
            }
    
            console.log(`Post ID from URL: ${postId}`);
            console.log(`Post name from URL: ${postName}`);
    
            await displaySinglePost(postName, postId);
        } catch (error) {
            console.error('Error displaying post from URL parameters:', error);
        }
    }
    
    
    displayPostFromUrlParams();
  