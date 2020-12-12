import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HeaderComp from "./HeaderComp";

const HeaderBannerComp = ({ children, image }) => {
  return (
    <Wrapper
      className="header-banner"
      image={image}
      style={{
        background: image && `url(${image}) no-repeat`,
        height: image && "27rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay">
        <HeaderComp />

        <div className="wrapper">
          <h1 className="text-light header-banner-desc">
            Choose from over 5000+ law reports from 1980 till date
          </h1>
        </div>
      </div>
    </Wrapper>
  );
};

HeaderBannerComp.propTypes = {
  children: PropTypes.element,
  image: PropTypes.string,
};

const Wrapper = styled.div`
  margin-bottom: 2rem;
  .overlay {
    height: inherit;
    .wrapper {
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 700px;
      margin: auto;
      h1 {
        font-size: 3rem;
        line-height: 4.5rem;
        text-align: center;
      }
    }
    background: linear-gradient(
      179.88deg,
      #000000 15.44%,
      rgba(0, 0, 0, 0.709677) 36.79%,
      rgba(0, 0, 0, 0) 186.21%
    );
  }
`;
export default HeaderBannerComp;
