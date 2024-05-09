import { Auth_endpoint, Base_URL } from "./api.mjs";

export async function checkLoggedIn () {
    const token = localStorage.getItem("token");
    return token ? true : false;
  };
  
  // Function to get the name of the logged-in user
 export async function getLoggedInName () {
    const token = localStorage.getItem("token");
    if (!token) {  
         console.log('the user is not login');
         return null; 
        }
     
    const url = `${Base_URL}${Auth_endpoint.LOGIN}`;
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
             Authorization: "Bearer " + token ,
        },
        body: JSON.stringify(token)
    };
    try {
      const response = await fetch(url,options);
      if (response.ok) {
        const userData = await response.json();
        console.log(userData.name)
        return userData.name; // Assuming the API returns the user's name
      
      } else {
        // Handle error response
        console.error("Failed to fetch user data");
        return null;
      }
    } catch (error) {
        console.error("Error:", error);
        throw new Error('Please Register account')
    }
  };
  

  