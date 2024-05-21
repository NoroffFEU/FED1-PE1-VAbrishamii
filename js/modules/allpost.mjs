import { Base_URL, Blog_endpoint } from "./api.mjs";


export async function allPost () {
    let name = 'Vahideh';
    const blogPostUrl = `${Base_URL}${Blog_endpoint.POST_BY_USER(name)}`;
    try {
        const response = await fetch(blogPostUrl);
        console.log('response', response);
        const data = await response.json();
        console.log('posts', data);
        return data;
    }catch(error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
    
