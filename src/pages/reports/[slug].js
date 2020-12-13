import { getReport, getReports } from "apollo/actions/reports";
import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";
import ReactMarkdown from "react-markdown/with-html";

const SingleReportPage = ({ single }) => {
  console.log(single);

  if (!single) return <Spinner />;
  return (
    <div>
      <h2>{single.title}</h2>

      <ReactMarkdown source={single.body} escapeHtml={false} />
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
    fallback: true,
  };
};
