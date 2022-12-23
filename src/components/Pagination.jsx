import React from "react";

import "./Pagination.css";

const Pagination = () => {
  return (
    <div className="Pagination">
      <div className="pages-wrapper">
        {[1, 2, 3].map((page, pageIndex) => (
          <span className={`page ${pageIndex === 0 ? "active" : ""}`}>
            {page}
          </span>
        ))}
      </div>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
