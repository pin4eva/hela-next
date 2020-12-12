import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/HeaderComp";
import ModalComp from "@/components/Modal";
import Head from "next/head";

import PropTypes from "prop-types";
import React, { Fragment } from "react";
import styled from "styled-components";

const FrontLayout = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>HELA | {title}</title>
      </Head>
      <Layout id="front-layout">
        {/* <HeaderComp /> */}
        <div id="main-page"> {children} </div>
        <FooterComp />
      </Layout>
    </Fragment>
  );
};

FrontLayout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

// FrontLayout.defaultProps = {
//   title: "Reports",
// };

const Layout = styled.div`
  display: flex;

  height: 100%;
  flex-direction: column;
  #main-page {
    flex: 1;
  }
`;

export default FrontLayout;
