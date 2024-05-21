import { allPost } from "../modules/allpost.mjs";
import { createCarousel } from "../modules/carousel.mjs";
import { createFooter } from "./footer.mjs";
import { createNavbar } from "./navbar.mjs";
import { displayPagination } from "../modules/pagination.mjs";


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
//grid thumbnail
const postsPerPage = 12; 
let totalPosts = 0; 

async function displayPostGrid(pageNumber = 1) {
    const postsData = await allPost();
    console.log(`Fetched posts:`, postsData);

    totalPosts = postsData.data.length;

    const startIndex = (pageNumber - 1) * postsPerPage;
    const endIndex = pageNumber * postsPerPage;
    const posts = postsData.data.slice(startIndex, endIndex);

    const postGrid = document.getElementById('postGrid');
    postGrid.innerHTML = ''; 

    if (posts.length === 0) {
        postGrid.innerHTML = '<p>No posts available</p>';
        return;
    }

    posts.forEach(post => {
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

    const totalPages = Math.ceil(totalPosts / postsPerPage);
    displayPagination(totalPages, pageNumber, displayPostGrid);
}


export function createPostGrid() {
    const main = document.querySelector('main');

    const postGrid = document.createElement('div');
    postGrid.id = 'postGrid';
    postGrid.classList.add('thumbnail');
    main.appendChild(postGrid);

    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination';
    main.appendChild(paginationContainer);
}


async function makePage() {
    createNavbar('container');
    createCarousel();
    createPostGrid();
    await displayPostGrid(1); 
    createFooter();
}

makePage();




