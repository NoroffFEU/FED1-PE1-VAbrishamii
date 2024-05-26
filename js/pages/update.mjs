import { singlePost } from "../modules/singlepost.mjs";
import { updatePost } from "../modules/updatepost.mjs";


export async function createForm(name, id ) {
    try {
        const postData = await singlePost(name, id);
        console.log('postdata', postData);
    
    const form = document.createElement('form');
    form.id = 'edit-form'; 

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.value = postData.data.title;
    titleLabel.appendChild(titleInput); 

    const imageLabel = document.createElement('label');
    imageLabel.textContent = 'Image URL:';
    const imageInput = document.createElement('input');
    imageInput.type = 'text';
    imageInput.id = 'image';
    imageInput.name = 'image';
    imageInput.value = postData.data.media.url;
    imageLabel.appendChild(imageInput); 

    const bodyLabel = document.createElement('label');
    bodyLabel.textContent = 'Body:';
    const bodyTextarea = document.createElement('textarea');
    bodyTextarea.id = 'body';
    bodyTextarea.name = 'body';
    bodyTextarea.value = postData.data.body;
    bodyLabel.appendChild(bodyTextarea); 

    // const tagsLabel = document.createElement("label");
    // tagsLabel.innerText = "Tags:";
    // const tagsInput = document.createElement("input");
    // tagsInput.type = "text";
    // tagsInput.id = "tags";
    // tagsInput.name = "tags";
    // tagsInput.value = postData.data.tags;
    // tagsInput.placeholder = "Enter tags separated by commas";
    // tagsLabel.appendChild(tagsInput);


    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = 'buttonDiv';
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'blue-btn';
    submitButton.textContent = 'Save Changes';
    
    form.appendChild(titleLabel);
    form.appendChild(imageLabel);
    form.appendChild(bodyLabel);
    // form.appendChild(tagsLabel);
    form.appendChild(submitButton);
   
    const mainElement = document.querySelector('main');
    mainElement.appendChild(form);

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); 
        const updatedTitle = titleInput.value;
        const updatedImageURL = imageInput.value;
        const updatedBody = bodyTextarea.value;
        // const updatedTags = tagsInput.value;
        console.log('Updated Title:', updatedTitle);
     

     
        if (updatedTitle && updatedImageURL && updatedBody) {
            await updatePost(name, id, updatedTitle, updatedImageURL, updatedBody);
        } else {
            alert('Please fill in all fields');
        }
    });

    return form;
}catch(error){
    console.log('error fetching post', error);
    alert('Failed to fetch post data');
}
}


