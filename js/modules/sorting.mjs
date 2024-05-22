import { displayPostGrid } from "../pages/index.mjs";

export async function createSortDropdown(id, onChangeHandler) {
    const options = [
        { value: 'createdAt', text: 'Newest' },
        { value: '-createdAt', text: 'Oldest' }
    ];

    const select = document.createElement('select');
    select.id = id;

    options.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        select.appendChild(option);
    });

    select.addEventListener('change', (event) => {
        const sortBy = event.target.value;
        console.log('sortby',sortBy)
        const sortOrder = sortBy.startsWith('-') ? 'desc' : 'asc';
        onChangeHandler(sortBy.replace('-', ''), sortOrder); // Adjust for '-' in front of oldest
    });

    return select;
}

export function initializeSortDropdown() {
    createSortDropdown('sortDropdown', (sort, sortOrder) => displayPostGrid(1, sort, sortOrder))
        .then(sortDropdown => {
            const main = document.querySelector('main');
            const carousel = document.getElementById('carousel');
            main.insertBefore(sortDropdown, carousel.nextSibling);
        })
        .catch(error => console.error('Error creating sort dropdown:', error));
}
