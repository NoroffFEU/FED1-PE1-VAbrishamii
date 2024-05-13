


export  async function renderPost(post) {
  
    const container = document.getElementById('post-container');

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const image = document.createElement('img');
    image.src = post.media.url;
    image.alt = post.title;

    const title = document.createElement('h2');
    title.textContent = post.title;

    const body = document.createElement('p');
    body.textContent = post.body;

 
    postDiv.appendChild(image);
    postDiv.appendChild(title);
    postDiv.appendChild(body);

    container.appendChild(postDiv);
}
