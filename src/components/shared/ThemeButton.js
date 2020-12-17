import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Spinner } from "theme-ui";
// import { theme } from "theme";

const ThemeButton = (props) => {
  return (
    <Wrapper {...props}>
      {props.isLoading ? (
        <span className="d-flex align-items-center">
          <Spinner size="25" color="#fff" />
          <span className="ml-2">Loading...</span>
        </span>
      ) : (
        props.children
      )}
    </Wrapper>
  );
};

ThemeButton.propTypes = {
  children: PropTypes.any,
  isLoading: PropTypes.bool,
};
ThemeButton.defaultProps = {
  isLoading: false,
};

// ThemeButton.defaultProps = {
//   loading: true,
// };

// const Wrapper = styled(Button)`
//   color: blue;
//   background-color: blue;
//   padding: 3rem;
// `;

const Wrapper = styled.button``;

export default ThemeButton;
