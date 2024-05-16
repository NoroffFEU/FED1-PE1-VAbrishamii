import { Base_URL, Blog_endpoint } from "./api.mjs";
import { singlePost } from "./singlepost.mjs";

export async function deletePost(name, id) {
    // const post = await singlePost(name, id);
    // console.log('post', post);

    // if (!post || !post.data) {
    //     throw new Error('Invalid post data');
    // }

    // const postData = post.data;
   
    const accessToken = localStorage.getItem("token");
    const url = `${Base_URL}${Blog_endpoint.POST_BY_ID(name, id)}`;
    
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + accessToken,
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        // alert('Are you sure to delete this message?');

        return { message: 'Post deleted successfully' };
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}
