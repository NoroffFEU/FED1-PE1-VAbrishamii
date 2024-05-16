export function createForm() {
    const form = document.createElement('form');
    form.id = 'edit-form'; // Set form id

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleLabel.appendChild(titleInput); // Nest input inside label

    const imageLabel = document.createElement('label');
    imageLabel.textContent = 'Image URL:';
    const imageInput = document.createElement('input');
    imageInput.type = 'text';
    imageInput.id = 'image';
    imageInput.name = 'image';
    titleLabel.appendChild(titleInput); // Nest input inside label

    const bodyLabel = document.createElement('label');
    bodyLabel.textContent = 'Body:';
    const bodyTextarea = document.createElement('textarea');
    bodyTextarea.id = 'body';
    bodyTextarea.name = 'body';
    bodyLabel.appendChild(bodyTextarea); // Nest textarea inside label



    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Save Changes';




    form.appendChild(titleLabel);
    form.appendChild(document.createElement('br')); // Add line break
    form.appendChild(bodyLabel);
    form.appendChild(document.createElement('br')); // Add line break
    form.appendChild(submitButton);

    return form;
}

// const form = document.getElementById('edit-form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent default form submission
//     updatePost(postName, postId); // Call updatePost with post ID and name
// });