// pagination.js

export function displayPagination(totalPages, currentPage, onPageChange) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // Clear existing pagination

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.textContent = i;
        pageLink.href = '#'; // Set the href attribute for styling
        pageLink.classList.add('pagination-link');
        if (i === currentPage) {
            pageLink.classList.add('active'); // Highlight the current page
        }
        pageLink.addEventListener('click', (event) => {
            event.preventDefault();
            onPageChange(i);
        });
        paginationContainer.appendChild(pageLink);
    }
}

// export function createViewMoreButton() {
//     const viewMoreBtn = document.createElement('button');
//     viewMoreBtn.id = 'viewMoreBtn';
//     viewMoreBtn.textContent = 'View More';
//     viewMoreBtn.classList.add('view-more-btn');
//     return viewMoreBtn;
// }


