import { Base_URL, Blog_endpoint } from "./api.mjs";

export async function deletePost(name, id) {
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
