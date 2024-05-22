import { Base_URL, Blog_endpoint } from "./api.mjs";
import { createSortDropdown } from "../pages/index.mjs";


async function fetchSortedData() {
    const sortField = document.getElementById('sortField').value;
    const sortOrder = document.getElementById('sortOrder').value;
    const blogPostUrl = `${Base_URL}${Blog_endpoint.POST_BY_USER('Vahideh')}?sort=${sortField}&sortOrder=${sortOrder}`;

    try {
        const response = await fetch(blogPostUrl);
        const data = await response.json();
        displayBlogPosts(data);
    } catch (error) {
        console.error('Error fetching sorted posts:', error);
    }
}

// Function to display blog posts
function displayBlogPosts(posts) {
    const container = document.createElement('div');
    container.id = 'blogPosts';
    container.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blogPost';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.name}</p>
            <p>${post.date}</p>
        `;
        container.appendChild(postElement);
    });

    const main = document.querySelector('main');
    main.innerHTML = ''; // Clear existing content in main
    main.appendChild(container);
}

// Function to initialize the dropdowns and load the default posts
async function initializeControls() {
    // Fetch available sort fields from the API
    try {
        const response = await fetch('/api/sort-fields');
        const fields = await response.json();

        // Create the controls container
        const controls = document.createElement('div');
        controls.id = 'controls';

        // Create and append the sort field dropdown
        const sortFieldOptions = fields.map(field => ({ value: field, text: field.charAt(0).toUpperCase() + field.slice(1) }));
        const sortFieldSelect = createSortDropdown('sortField', sortFieldOptions, fetchSortedData);
        controls.appendChild(sortFieldSelect);

        // Create and append the sort order dropdown
        const sortOrderOptions = [
            { value: 'asc', text: 'Ascending' },
            { value: 'desc', text: 'Descending' }
        ];
        const sortOrderSelect = createSortDropdown('sortOrder', sortOrderOptions, fetchSortedData);
        controls.appendChild(sortOrderSelect);

        // Append the controls to the main element
        const main = document.querySelector('main');
        main.appendChild(controls);

        // Fetch and display the default sorted data
        await fetchSortedData();
    } catch (error) {
        console.error('Error fetching sort fields:', error);
    }
    document.addEventListener('DOMContentLoaded', initializeControls);
}
