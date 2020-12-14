import { ReportsAtom } from "atoms/ReportsAtom";
import React, { Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Grid } from "theme-ui";
import AddReportsComp from "./AddReports";
import ReportTableComp from "./ReportTable";
import UpdateReportsComp from "./UpdateReport";

const AdminReportComp = () => {
  const [view, setView] = useState("main");
  const [reports, setReports] = useRecoilState(ReportsAtom);
  const [slug, setSlug] = useState("");

  const handleAddReport = (data) => {
    setReports([...reports, data]);
  };

  const handleUpdate = (slug) => {
    setView("update");
    setSlug(slug);
  };

  return (
    <Wrapper>
      <div className="card-wrapper">
        <Grid columns={[1, null, 2]}>
          <div className="card bg-white text-center">
            <p>Total reports</p>
            <h1 className="text-info display-3">20</h1>
          </div>
          <div className="card bg-white text-center">
            <p>Total reports</p>
            <h1 className="text-info display-3">20</h1>
          </div>
        </Grid>
      </div>

      {view === "main" && (
        <Fragment>
          <div className="reports-table my-4">
            <div className="card">
              <ReportTableComp onUpdate={handleUpdate} reports={reports} />
            </div>
          </div>

          <div className="report-add-btn">
            <div
              className="wrapper rounded-circle p-3 bg-primary c-hand"
              onClick={() => setView("add")}
            >
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </Fragment>
      )}
      {view === "add" && (
        <AddReportsComp
          onAdd={handleAddReport}
          onCancel={() => setView("main")}
        />
      )}
      {view === "update" && (
        <UpdateReportsComp
          slug={slug}
          onUpdate={(data) => {
            setReports(
              reports.map((rep) => (rep._id === data._id ? (rep = data) : rep))
            );
            setView("main");
          }}
          onCancel={() => setView("main")}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  /* .report-table {
  } */
  .report-add-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    .wrapper {
      /* height: 3rem;
      width: 3rem; */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default AdminReportComp;

const reports = [
  {
    title: "OLUSEGUN ADEGBOYE V THE STATE",
    author: "Chisom Ugwu",
    createdAt: "December 12, 2020",
  },
  {
    title: "OLUSEGUN ADEGBOYE V THE STATE",
    author: "Chisom Ugwu",
    createdAt: "December 12, 2020",
  },
  {
    title: "OLUSEGUN ADEGBOYE V THE STATE",
    author: "Chisom Ugwu",
    createdAt: "December 12, 2020",
  },
  {
    title: "OLUSEGUN ADEGBOYE V THE STATE",
    author: "Chisom Ugwu",
    createdAt: "December 12, 2020",
  },
];
