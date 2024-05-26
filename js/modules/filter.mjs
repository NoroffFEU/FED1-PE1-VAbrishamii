import { displayPostGrid } from "../pages/index.mjs";
import { Base_URL } from "./api.mjs";
import { Blog_endpoint } from "./api.mjs";
import { allPost } from "./allpost.mjs";

export function filterIcon() {
    const main = document.querySelector('main');

    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filter-container');

    const filterIcon = document.createElement('i');
    filterIcon.classList.add('fa-solid', 'fa-sliders', 'filter-icon');
    filterIcon.addEventListener('click', toggleFilterMenu);

    const filterDropdown = document.createElement('div');
    filterDropdown.classList.add('filter-dropdown', 'hidden');

    const filterList = document.createElement('ul');
    filterList.classList.add('filter-list');
    const filters = ['All', 'Historic', 'Culture'];
    filters.forEach(filter => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = filter;
        link.addEventListener('click', () => filterPosts(filter));
        listItem.appendChild(link);
        filterList.appendChild(listItem);
    });

    filterDropdown.appendChild(filterList);
    filterContainer.appendChild(filterIcon);
    filterContainer.appendChild(filterDropdown);
    main.appendChild(filterContainer);
}


function toggleFilterMenu() {
    const filterDropdown = document.querySelector('.filter-dropdown');
    filterDropdown.classList.toggle('hidden');
}

export async function filterPosts(filter) {
    const name = 'Vahideh';
    const url = `${Base_URL}${Blog_endpoint.POST_BY_USER(name)}?_tag=${filter}`;
    console.log('filter url', url);

    try {
        let postsData;
        if (filter === 'All') {
            postsData = await allPost(); 
        } else {
            const response = await fetch(url);
            postsData = await response.json();
        }

        console.log('filter postdata', postsData);

        if (postsData.data && Array.isArray(postsData.data)) {
            displayPostGrid(1, postsData, filter); // Pass filter to displayPostGrid
        } else {
            console.log('No posts found with the specified tag');
        }

    } catch (error) {
        console.error('error fetching filtered posts', error);
    }
}
