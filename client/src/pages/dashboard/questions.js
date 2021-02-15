import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import withAuth from "utils/withAuth";

const DashboardQuestionPage = () => {
  return (
    <DashboardLayout title="Q & A">
      <>
        <h2>DashboardQuestionPage</h2>
      </>
    </DashboardLayout>
  );
};

export default withAuth(DashboardQuestionPage);
