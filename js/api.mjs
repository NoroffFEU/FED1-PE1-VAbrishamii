export const Base_URL = 'https://v2.api.noroff.dev/';

export const Auth_endpoint = {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    API_KEY:'auth/create_api_key'
};

export const Blog_endpoint ={
    POSTS_BY_USER: (name) => `blog/posts/${name}`,
    POST_BY_ID: (name, id) => `blog/posts/${name}/${id}`,

};

// const postData = async (path, data) =>{
//     try {
//         const response = await fetch(`${base_URL}/${path}`,{
//             method: 'POST',
//             body:JSON.stringify(data),
//             headers:{"Content-Type": "application/json"},
//         });
//         if (!response.ok) {
//             throw new Error('Login failed');
//         }
//         const responseData = await response.json();
//         const token = responseData.token;

//         return responseData; 
       
//     } catch (error) {
//         alert('something went wrong')
//     }
// };
// export{postData};