import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import MoreIcon from "../shared/MoreIcon";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  DELETE_REPORT_MUTATION,
  GET_LIMITED_REPORTS,
} from "apollo/queries/reportQuery";

const ReportTableComp = ({ onDelete }) => {
  const [reports, setReports] = useState([]);
  const [deleteReport, { loading: deleting }] = useMutation(
    DELETE_REPORT_MUTATION
  );
  const [getReport] = useLazyQuery(GET_LIMITED_REPORTS, {
    onCompleted: (data) => setReports(data.getLimitedReports),
    onError: (err) => console.log(err),
  });
  const removeReport = async (_id) => {
    const res = window.confirm("Do you want to delete now ?");

    if (!res) return;
    try {
      const { data } = await deleteReport({ variables: { _id } });
      reports.filter((report) => report._id !== data.deleteReport._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getLimited = async () => {
      await getReport({ variables: { limit: 10, skip: 0 } });
    };

    getLimited();
  }, []);
  return (
    <div className="reportlist-table">
      <table className="table table-borderless table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, i) => (
            <tr key={i}>
              <td
                style={{ textDecoration: deleting ? "line-through" : "none" }}
              >
                <Link href={`/reports/${report.slug}`}>{report.title}</Link>
              </td>
              <td>{report.author}</td>
              <td>{report.createdAt}</td>
              <td>
                <MoreIcon>
                  <div>Edit</div>
                  <div onClick={() => removeReport(report._id)}>Delete</div>
                </MoreIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ReportTableComp.propTypes = {
  reports: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ReportTableComp;
