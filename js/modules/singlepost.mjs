import { Base_URL, Blog_endpoint } from "./api.mjs";

export async function singlePost(name,id){
    const userInfoString = localStorage.getItem("userInfo");
    const accessToken = localStorage.getItem("token");
    const userInfo = JSON.parse(userInfoString);
    const userName = userInfo ? userInfo.data.name: null;  
    console.log('name', userName);
    console.log('id', id);

    const url = `${Base_URL}${Blog_endpoint.POST_BY_ID(userName,id)}`;
    console.log(url)
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('failed to fetch');

        }
        const post = await response.json();
        return post;
    }catch (error){
        console.log('error fetching post', error);
        throw error;
    }
}
