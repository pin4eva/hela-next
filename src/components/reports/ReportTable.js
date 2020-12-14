import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import MoreIcon from "../shared/MoreIcon";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  DELETE_REPORT_MUTATION,
  GET_LIMITED_REPORTS,
} from "apollo/queries/reportQuery";
import styled from "styled-components";
import { Notification } from "rsuite";
import { useRecoilState } from "recoil";
import { ReportsAtom } from "atoms/ReportsAtom";

const ReportItem = ({ report, onDelete }) => {
  const [deleteReport, { loading: deleting }] = useMutation(
    DELETE_REPORT_MUTATION
  );

  const removeReport = async (_id) => {
    const res = window.confirm("Do you want to delete now ?");

    if (!res) return;
    try {
      const { data } = await deleteReport({ variables: { _id } });
      Notification.success({
        title: "Success",
        description: <p>Successfully deleted {data.deleteReport.title} </p>,
      });
      onDelete(data.deleteReport._id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Tr deleting={deleting.toString()}>
      <td className="table-title">
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
    </Tr>
  );
};

const Tr = styled.tr`
  .table-title {
    text-decoration: ${({ deleting }) =>
      deleting === "true" ? "line-through" : ""};
  }
`;

ReportItem.propTypes = {
  report: PropTypes.object,
  onDelete: PropTypes.func,
};

const ReportTableComp = ({ reports }) => {
  return (
    <Wrapper>
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
            <ReportItem key={i} report={report} />
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

ReportTableComp.propTypes = {
  reports: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ReportTableComp;
