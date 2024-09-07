import React from 'react';

export const Pagination = ({ totalProductos, productosPorPagina, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalProductos / productosPorPagina);

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const renderPageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    id="page-btn"
                    key={i}
                    className={`transicion-btn ${currentPage === i ? 'active' : ''}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <button
                    id="page-btn"
                    className="transicion-btn"
                    onClick={handlePreviousClick}
                >
                    Anterior
                </button>
            )}
            {renderPageNumbers()}
            {currentPage < totalPages && (
                <button
                    id="next-page"
                    className="transicion-btn"
                    onClick={handleNextClick}
                >
                    Siguiente
                </button>
            )}
        </div>
    );
};

