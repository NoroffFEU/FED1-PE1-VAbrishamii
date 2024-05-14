import { Base_URL, Blog_endpoint } from "./api.mjs";


export async function allPost () {
  
    const userInfoString = localStorage.getItem("userInfo");
    const accessToken = localStorage.getItem("token");
    const userInfo = JSON.parse(userInfoString);
    const name = userInfo ? userInfo.data.name : null;
    const blogPostUrl = `${Base_URL}${Blog_endpoint.POST_BY_USER(name)}`;
    try {
        const response = await fetch(blogPostUrl);
        console.log('response', response);
        const posts = await response.json();
        console.log('posts', posts);
        return posts;
    }catch(error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
    
