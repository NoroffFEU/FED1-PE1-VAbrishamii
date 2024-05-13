import { allPost } from "../modules/blogpost.mjs";
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

            postDiv.addEventListener('click', async()=>{
                try{
                    const clickedPost = await singlePost(post.name, post.id);
                    const encodedPost = encodeURIComponent(JSON.stringify(clickedPost));
                    window.location.href = `../post/update.html?post=${encodedPost}`;
                }catch (error){
                    console.log('error fetching clicked post', error);
                }
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