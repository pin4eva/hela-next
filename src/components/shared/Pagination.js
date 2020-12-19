import PropTypes from "prop-types";
import { useState } from "react";

const PaginationComp = ({ array }) => {
  const [totalCount] = useState(30);
  const [pageCount] = useState(totalCount / 10);
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>

          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

PaginationComp.propTypes = {
  array: PropTypes.array,
};

export default PaginationComp;
