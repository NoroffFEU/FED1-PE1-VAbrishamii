import { Base_URL, Blog_endpoint } from "./api.mjs";
import { singlePost } from "./singlepost.mjs";
export async function deletePost(name, postId) {
    const post = await singlePost(name, postId);
    console.log('post', post);

    if (!post || !post.data) {
        throw new Error('Invalid post data');
    }

    // const postData = post.data;
    const url = `${Base_URL}${Blog_endpoint.POST_BY_ID(name, id)}`;
    
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete post');
        }

        return { message: 'Post deleted successfully' };
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}
