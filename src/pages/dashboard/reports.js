import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import styled from "styled-components";

const ReportsPage = () => {
  return (
    <DashboardLayout title="Reports">
      <Wrapper>
        <div className="recently-viewed">
          <h5 className="my-3 heading">Recently viewed</h5>
          <div className="grid-2">
            <p className="grid-item">OGUNSANYA OLUWASEYI V THE STATE</p>
            <p className="grid-item">OGUNSANYA OLUWASEYI V THE STATE</p>
            <p className="grid-item">OGUNSANYA OLUWASEYI V THE STATE</p>
            <p className="grid-item">OGUNSANYA OLUWASEYI V THE STATE</p>
          </div>
        </div>

        <h5 className="heading my-4">Supreme court Reports</h5>
        <input type="search" className=" bg-secondary" />

        <div className="report-list">
          <ul className="nav ">
            <li className="nav-link">
              {" "}
              <a href="#" className="nav-link">
                All Reports
              </a>{" "}
            </li>
            <li className="nav-link">
              {" "}
              <a href="#" className="nav-link">
                Supreme court
              </a>{" "}
            </li>
            <li className="nav-link">
              {" "}
              <a href="#" className="nav-link">
                Court of Apeal
              </a>{" "}
            </li>
          </ul>
          <hr className="m-0" />

          <div className="reports-list">
            {reports.map((report, i) => (
              <div className="report-item my-3" key={i}>
                <p className="font-weight-bold">{report.title}</p>
                <div> {report.desc} </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </DashboardLayout>
  );
};

export default ReportsPage;

const Wrapper = styled.div`
  .report-list {
    ul {
      list-style: none;
    }
  }
`;

const reports = [
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE",
    desc:
      "Adipiscing luctus potenti nunc etiam mauris in mollis tristique. Nibh integer iaculis vehicula interdum tristique lectus magna. Sodales malesuada vel est metus. Faucibus pretium pulvinar.",
  },
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE 2",
    desc:
      "Adipiscing luctus potenti nunc etiam mauris in mollis tristique. Nibh integer iaculis vehicula interdum tristique lectus magna. Sodales malesuada vel est metus. Faucibus pretium pulvinar.",
  },
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE 3",
    desc:
      "Adipiscing luctus potenti nunc etiam mauris in mollis tristique. Nibh integer iaculis vehicula interdum tristique lectus magna. Sodales malesuada vel est metus. Faucibus pretium pulvinar.",
  },
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE 3",
    desc:
      "Adipiscing luctus potenti nunc etiam mauris in mollis tristique. Nibh integer iaculis vehicula interdum tristique lectus magna. Sodales malesuada vel est metus. Faucibus pretium pulvinar.",
  },
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE 3",
    desc:
      "Adipiscing luctus potenti nunc etiam mauris in mollis tristique. Nibh integer iaculis vehicula interdum tristique lectus magna. Sodales malesuada vel est metus. Faucibus pretium pulvinar.",
  },
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE 3",
    desc:
      "Adipiscing luctus potenti nunc etiam mauris in mollis tristique. Nibh integer iaculis vehicula interdum tristique lectus magna. Sodales malesuada vel est metus. Faucibus pretium pulvinar.",
  },
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE 3",
    desc:
      "Adipiscing luctus potenti nunc etiam mauris in mollis tristique. Nibh integer iaculis vehicula interdum tristique lectus magna. Sodales malesuada vel est metus. Faucibus pretium pulvinar.",
  },
  {
    title: "OGUNSANYA OLUWASEYI V THE STATE 3",
    desc:
      "Adipiscing luctus potenti nunc etiam mauris in mollis tristique. Nibh integer iaculis vehicula interdum tristique lectus magna. Sodales malesuada vel est metus. Faucibus pretium pulvinar.",
  },
];
