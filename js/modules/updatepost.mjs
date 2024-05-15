import { Base_URL, Blog_endpoint } from "./api.mjs";
import { singlePost } from "./singlepost.mjs";

export async function updatePost(name, postId) {

    const post = await singlePost(name, postId);
    console.log('post', post);

    if (!post || !post.data) {
        throw new Error('Invalid post data');
    }

    const postData = post.data;
    const url = `${Base_URL}${Blog_endpoint.POST_BY_ID(name, id)}`;
    
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error('Failed to update post');
        }

        const updatedPost = await response.json();
        return updatedPost;
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
}
