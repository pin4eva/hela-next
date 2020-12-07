import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Spinner } from "theme-ui";
// import { theme } from "theme";

const ThemeButton = (props) => {
  return (
    <Wrapper {...props}>
      {props.loading ? (
        <>
          <Spinner size="25" color="#fff" className="mr-2" /> Loading...
        </>
      ) : (
        props.children
      )}
    </Wrapper>
  );
};

ThemeButton.propTypes = {
  children: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
ThemeButton.defaultProps = {
  loading: false,
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
