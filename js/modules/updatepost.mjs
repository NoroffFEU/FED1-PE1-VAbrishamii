import { Base_URL, Blog_endpoint } from "./api.mjs";

export async function updatePost(name, id, updatedPostData) {
    const url = `${Base_URL}${Blog_endpoint.POST_BY_ID(name, id)}`;
    
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPostData)
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
