import AdminReportComp from "@/components/reports/AdminReport";
import UserReportComp from "@/components/reports/UserReport";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import styled from "styled-components";

const ReportsPage = () => {
  const user = {
    type: "Admin",
  };
  return (
    <DashboardLayout title="Reports">
      <Wrapper className="dashboard-reports">
        {user.type !== "Admin" ? <UserReportComp /> : <AdminReportComp />}
      </Wrapper>
    </DashboardLayout>
  );
};

export default ReportsPage;

const Wrapper = styled.div``;

const tabMenus = [
  { id: 1, name: "All Reports" },
  { id: 2, name: "Supreme court" },
  { id: 3, name: "Court of Apeal" },
];

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
