import PropTypes from "prop-types";
import { useState } from "react";

const PaginationComp = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

PaginationComp.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginate: PropTypes.func,
};

export default PaginationComp;
