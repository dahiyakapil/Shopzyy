const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center", margin: "1rem 0" }}>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            <span> Page {currentPage} of {totalPages} </span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default Pagination;