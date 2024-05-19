import { createCarousel } from "../modules/carousel.mjs";
import { createFooter } from "./footer.mjs";
import { createNavbar } from "./navbar.mjs";

function makePage(){
    createNavbar('container');
   createCarousel();
   createFooter();

}

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


makePage();