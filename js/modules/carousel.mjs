
import { createCarouselInner, createNextButton, createPrevButton } from "../pages/index.mjs";
import { Base_URL, Blog_endpoint } from "./api.mjs";
import { calculatePagination } from "./pagination.mjs";

let currentPage = 1;
const postsPerPage = 3 ;

export async function createCarousel(){
    const main = document.querySelector('main');

    const carousel = document.createElement('div');
    carousel.id = 'carousel';
    carousel.classList.add ('carousel');

    carousel.appendChild(createPrevButton());
    carousel.appendChild(createCarouselInner());
    carousel.appendChild(createNextButton());

    main.appendChild(carousel);
    await carouselPost(currentPage);

    document.getElementById('nextBtn').addEventListener('click', async() =>{
        currentPage++;
        await carouselPost(currentPage);
    });
    document.getElementById('prevBtn').addEventListener('click' , async() =>{
        currentPage--;
        if (currentPage<1){
            currentPage = 1;
        }
        await carouselPost(currentPage);
    });
}

async function carouselPost(page){
    // const totalPosts = 100;
    // const {totalPages, currentPage, itemsPerPage } = calculatePagination(totalPosts,postsPerPage,page);
    
    const userInfoString = localStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoString);
    console.log('userinfo', userInfo);
    const name = userInfo.data.name;
    console.log('name', name);
    try{
        const url = `${Base_URL}${Blog_endpoint.POST_BY_USER(name)}?limit=${postsPerPage}&page=${page}`;
        const response = await fetch(url);
        if (!response.ok){
            throw new Error ('Error fetching posts: ${response.statusText}')
        }

        const responseData = await response.json();
        console.log('resposnedata', responseData);
        const posts = responseData.data || responseData;

        totalPages = Math.ceil(responseData.total / postsPerPage);

        currentPage = page > totalPages ? 1 : page;

        // Determine which posts to display based on currentPage
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        let displayedPosts = posts.slice(startIndex, endIndex);

        // If the displayed posts are empty and currentPage is not 1, reset currentPage to 1
        if (displayedPosts.length === 0 && currentPage !== 1) {
            currentPage = 1;
            displayedPosts = posts.slice(0, postsPerPage);
        }
        updateCarousel(displayedPosts);
    }catch (error){
        console.log('error fetching posts', error);
    }
}

function updateCarousel(posts) {
    const carouselInner = document.getElementById('carouselInner');
    carouselInner.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('carousel-item');
        postElement.innerHTML = `
        <img src="${post.media.url}" alt="${post.title}">
        <h3>${post.title}</h3>
        <a href="#" class="read-more" data-id="${post.id}">Read more</a>
        
        `
        carouselInner.appendChild(postElement);
    });

}