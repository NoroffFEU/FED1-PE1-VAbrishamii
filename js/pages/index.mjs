import { allPost } from "../modules/allpost.mjs";
import { createCarousel } from "../modules/carousel.mjs";
import { createFooter } from "./footer.mjs";
import { createNavbar } from "./navbar.mjs";

// function makePage(){
//     createNavbar('container');
//    createCarousel();
//    displayPostGrid();
//    createFooter();


// }

//carousel elements
export function createPrevButton() {
    const prevBtn = document.createElement('button');
    prevBtn.id = 'prevBtn';
    prevBtn.classList.add('carousel-btn', 'prev-btn');
    prevBtn.textContent = '❮';
    return prevBtn;
}
export function createNextButton() {
    const nextBtn = document.createElement('button');
    nextBtn.id = 'nextBtn';
    nextBtn.classList.add('carousel-btn', 'next-btn');
    nextBtn.textContent = '❯';
    return nextBtn;
}
export function createCarouselInner() {
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');
    carouselInner.id = 'carouselInner';
    return carouselInner;
}
async function displayPostGrid() {
    const posts = await allPost();
    console.log('Fetched posts:', posts); 


    const main = document.querySelector('main');
    const postGrid = document.createElement('div');
    postGrid.id = 'postGrid';
    postGrid.classList.add('thumbnail');
    main.appendChild(postGrid);

    if (posts.length === 0) {
        postGrid.innerHTML = '<p>No posts available</p>';
        return;
    }

    posts.data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('grid-item');
        postElement.innerHTML = `
            <img src="${post.media.url}" alt="${post.title}">
            <h3>${post.title}</h3>
        `;
        postElement.addEventListener('click', () => {
            window.location.href = `detailspost.html?id=${post.id}&name=${post.author.name}`;
        });
        postGrid.appendChild(postElement);
    });
}

function makePage(){
    createNavbar('container');
    createCarousel();
    displayPostGrid();
    createFooter();
}

makePage();

// async function displayPostGrid(){
//     const posts = await allPost();
//     console.log('post', posts);

//     const main = document.querySelector('main');
//     const postGrid = document.createElement('div');
//     postGrid.id = 'postGrid';
//     postGrid.classList.add('thumbnail');
//     main.appendChild(postGrid);

  

//     if (posts.length === 0) {
//         postGrid.innerHTML = '<p>No posts available</p>';
//         return;
//     }

//     posts.forEach(post => {
//         const postElement = document.createElement('div');
//         postElement.classList.add('grid-item'); // Corrected classList usage
//         postElement.innerHTML = `
//             <img src="${post.media.url}" alt="${post.title}">
//             <h3>${post.title}</h3>
//         `;
//         postElement.addEventListener('click', () => {
//             window.location.href = `detailspost.html?id=${post.id}&name=${post.author.name}`;
//         });
//         postGrid.appendChild(postElement);
//     });

// }

// makePage();
