import { Base_URL, Blog_endpoint } from "./api.mjs";

export async function singlePost(name,id){ 

    const url = `${Base_URL}${Blog_endpoint.POST_BY_ID(name,id)}`;
    console.log('url', url)
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('failed to fetch');

        }
        const post = await response.json();
        console.log('post', post);
        return post;
    }catch (error){
        console.log('error fetching post', error);
        throw error;
    }
}

// export async function displaySinglePost(name, postId) {
//     try {
//         const post = await singlePost(name, postId);
//         console.log('post', post);

//         if (!post || !post.data) {
//             throw new Error('Invalid post data');
//         }

//         const postData = post.data;

//         const singlePostContent = document.getElementById('single-post');
//         singlePostContent.innerHTML = '';

//         const postContent = `
//            <div class= 'single-post'>
//             <h1>${postData.title}</h1>
//             <img src="${postData.media.url}" alt="${postData.title}">
//             <p>${postData.body}</p>
//             <p>Author: ${postData.author.name}</p>
//            <div>
//         `;
//         singlePostContent.innerHTML = postContent;
//     } catch (error) {
//         console.error('Error displaying single post:', error);
//     }
// }

// export async function displayPostFromUrlParams() {
//         try {
//             const params = new URLSearchParams(window.location.search);
//             console.log('URL Params:', params.toString());
    
//             const postId = params.get('id');
//             console.log('postid', postId)
//             const postName = params.get('name');
//             console.log('postname', postName)
    
//             if (!postId || !postName) {
//                 throw new Error('Post ID or name missing from URL parameters');
//             }
    
//             console.log(`Post ID from URL: ${postId}`);
//             console.log(`Post name from URL: ${postName}`);
    
//             await displaySinglePost(postName, postId);
//         } catch (error) {
//             console.error('Error displaying post from URL parameters:', error);
//         }
//     }
    
    
//     displayPostFromUrlParams();
  