import { getReport, getReports } from "apollo/actions/reports";
// import Markdown from "markdown-to-jsx";
import PropTypes from "prop-types";
import React from "react";
import { Spinner } from "theme-ui";
import styles from "./md.module.scss";
import Markdown from "react-markdown/with-html";

const SingleReportPage = ({ single }) => {
  if (!single) return <Spinner />;
  return (
    <div className="container text-justify">
      <h4 className="text-center text-uppercase">{single.court}</h4>
      <div className={styles.markdown}>
        <Markdown source={single.body} allowDangerousHtml />
      </div>
    </div>
  );
};

SingleReportPage.propTypes = {
  single: PropTypes.object,
};

export default SingleReportPage;

export const getStaticProps = async ({ params }) => {
  const single = await getReport(params.slug);
  //   console.log(single);
  return {
    props: { single },
    revalidate: 20,
  };
};

export const getStaticPaths = async () => {
  const data = await getReports();

  return {
    paths: data?.map((report) => `/reports/${report.slug}`),
    fallback: false,
  };
};
