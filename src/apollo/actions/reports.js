import { initializeApollo } from "../index";
import { GET_REPORTS_QUERY, GET_REPORT_QUERY } from "../queries/reportQuery";

export const getReports = async () => {
  const apolloClient = initializeApollo();

  let { data } = await apolloClient.query({
    query: GET_REPORTS_QUERY,
  });
  data = data?.getReports || [];
  data = data.map((rep) => {
    return {
      ...rep,
      _id: rep._id.toString(),
    };
  });

  return data || [];
};

export const getReport = async (slug) => {
  const apollo = initializeApollo();

  let { data } = await apollo.query({
    query: GET_REPORT_QUERY,
    variables: { slug },
  });

  data = data?.getReport;
  data = {
    ...data,
    _id: data._id.toString(),
  };

  return data || {};
};
