import AdminReportComp from "@/components/reports/AdminReport";
import UserReportComp from "@/components/reports/UserReport";
import DashboardLayout from "@/layouts/DashboardLayout";
import { UserAtom } from "atoms/UserAtom";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import withAuth from "utils/withAuth";

const ReportsPage = () => {
  const user = useRecoilValue(UserAtom);

  if (!user) return <p>Loading....</p>;
  return (
    <DashboardLayout title="Reports">
      <Wrapper className="dashboard-reports">
        {user?.role !== "Admin" ? <UserReportComp /> : <AdminReportComp />}
      </Wrapper>
    </DashboardLayout>
  );
};

export default withAuth(ReportsPage);

const Wrapper = styled.div``;
