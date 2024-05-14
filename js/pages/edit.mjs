import { allPost } from "../modules/allpost.mjs";
import { singlePost } from "../modules/singlepost.mjs";
import { createFooter } from "./footer.mjs";
import { createNavbar } from "./navbar.mjs";

createNavbar('container');



export function editPostPage() {
    const renderPosts = (posts, containerId) => {
        console.log('post', posts);
        const container = document.getElementById(containerId);

        if (!Array.isArray(posts.data)) {
            console.error('Data array not found:', postsData);
            return;
        }

        posts.data.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            postDiv.addEventListener('click', ()=>{
                const postId = post.id;
                const postName = post.author.name; // Extract the name from post.author
                console.log(`Navigating to update page for post id: ${postId} and name: ${postName}`); 
                window.location.href = `../post/update.html?id=${postId}&name=${postName}`;
            });

            const image = document.createElement('img');
            image.src = post.media.url;
            image.alt = post.title;

            const title = document.createElement('h2');
            title.textContent = post.title;

            postDiv.appendChild(image);
            postDiv.appendChild(title);

            container.appendChild(postDiv);
        });
    }

    return { renderPosts };
}

async function displayPost (){
    try{
        const posts = await allPost();
        const render = editPostPage();
        render.renderPosts(posts, 'post-container');

    }catch (error){
        console.log('error displaying posts', error);
    }
   
}


displayPost();
createFooter