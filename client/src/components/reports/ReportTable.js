import { useMutation } from "@apollo/client";
import { DELETE_REPORT_MUTATION } from "apollo/queries/reportQuery";
import { ReportsAtom } from "atoms/ReportsAtom";
import dayjs from "dayjs";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { useRecoilState } from "recoil";
import { Notification } from "rsuite";
import styled from "styled-components";
import MoreIcon from "../shared/MoreIcon";

const ReportItem = ({ report, onDelete, edit }) => {
  const [reports, setReports] = useRecoilState(ReportsAtom);
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
      setReports(reports.filter((rep) => rep._id !== data.deleteReport._id));
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
      <td>{dayjs(report.createdAt).format("DD-MM-YYYY")}</td>
      <td>
        <MoreIcon>
          <div onClick={() => edit(report.slug)}>
            {" "}
            <i
              className="fas fa-pen mr-5"
              style={{ marginRight: "8px" }}
            ></i>{" "}
            Edit
          </div>
          <div onClick={() => removeReport(report._id)}>
            <i className="fas fa-times text-danger"></i> Delete
          </div>
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
  edit: PropTypes.func,
};

const ReportTableComp = ({ reports, onUpdate }) => {
  if (!reports?.length) return <p>Getting reports....</p>;
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
            <ReportItem key={i} report={report} edit={onUpdate} />
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
  onUpdate: PropTypes.func,
};

export default ReportTableComp;
