import { Report } from "@/model/Report";
import { connectDB } from "utils/db";

export const getReports = async () => {
  await connectDB();
  const reports = await Report.find().select(" slug");
  return reports;
  // const apolloClient = initializeApollo();

  // let { data } = await apolloClient.query({
  //   query: GET_REPORTS_QUERY,
  // });
  // data = data?.getReports || [];
  // data = data.map((rep) => {
  //   return {
  //     ...rep,
  //     _id: rep._id.toString(),
  //   };
  // });

  // return data || [];
};

export const getReport = async (slug) => {
  await connectDB();
  // const apollo = initializeApollo();

  // let { data } = await apollo.query({
  //   query: GET_REPORT_QUERY,
  //   variables: { slug },
  // });

  // data = data?.getReport;
  // data = {
  //   ...data,
  //   _id: data._id.toString(),
  // };

  // return data || {};

  let report = await Report.findOne({ slug });
  report = JSON.parse(JSON.stringify(report));

  return report;
};
