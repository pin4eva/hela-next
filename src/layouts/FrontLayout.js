import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/HeaderComp";
import ModalComp from "@/components/Modal";

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const FrontLayout = ({ children }) => {
  return (
    <Layout id="front-layout">
      <HeaderComp />
      <div id="main-page"> {children} </div>
      <FooterComp />
    </Layout>
  );
};

FrontLayout.propTypes = {
  children: PropTypes.any,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  #main-page {
    flex: 2;
  }
`;

export default FrontLayout;
