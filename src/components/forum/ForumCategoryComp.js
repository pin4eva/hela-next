import React from "react";
import PropTypes from "prop-types";

const ForumCategoryComp = (props) => {
  return (
    <div className="card">
      <div className="container">
        <div className="header">
          <p className="f5 m-0 ">Categories</p>
          <hr />
        </div>
        <div className="body">
          <ul>
            {categorieList.map((category, i) => (
              <li className="d-flex justify-content-between" key={i}>
                <p>{category.title}</p>
                <p className="rounded-pill text-light px-1 bg-gray-400">
                  {category.count}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ForumCategoryComp.propTypes = {};

export default ForumCategoryComp;

const categorieList = [
  { title: "Trading for Money", count: 20 },
  { title: "Vault Keys Giveway", count: 10 },
  { title: "Misc Guns Locations", count: 50 },
  { title: "Looking for Players", count: 36 },
  { title: "Stupid Bugs & Solves", count: 41 },
  { title: "Video & Audio Drivers", count: 11 },
];
