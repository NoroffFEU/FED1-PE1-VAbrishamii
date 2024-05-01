const base_URL = 'https://v2.api.noroff.dev/';

const postData = async (path, data) =>{
    try {
        const response = await fetch(`${base_URL}/${path}`,{
            method: 'POST',
            body:JSON.stringify(data),
            headers:{"Content-Type": "application/json"},
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        const responseData = await response.json();
        const token = responseData.token;

        return responseData; 
       
    } catch (error) {
        alert('something went wrong')
    }
};
export{postData};