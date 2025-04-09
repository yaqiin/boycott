
const PageSelector = ({ totalPages, currentPage, handlePageChange }) => {
  const pageNumbers: (number | string)[] = [];
  const maxButtons = 5;

  if (totalPages <= maxButtons + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1);

    if (currentPage > 3) {
      pageNumbers.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push("...");
    }

    pageNumbers.push(totalPages);
  }

  return (
    <div className="flex justify-center mt-8 gap-1 md:gap-2 ">
      {pageNumbers.map((num, idx) =>
        typeof num === "number" ? (
          <button
            key={idx}
            className={`px-2 md:px-3 py-1 rounded ${
              num === currentPage ? "bg-yaqiin-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handlePageChange(num)}
          >
            {num}
          </button>
        ) : (
          <span key={idx} className="px-3 py-1 text-gray-400">
            {num}
          </span>
        )
      )}
    </div>
  );
};

export default PageSelector;
