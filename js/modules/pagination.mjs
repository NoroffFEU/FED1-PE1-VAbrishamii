export function calculatePagination(totalItems, itemsPerPage, currentPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const offset = (currentPage - 1) * itemsPerPage;
    const limit = itemsPerPage;
    return { totalPages, offset, limit };
}
