import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import withAuth from "utils/withAuth";

const DashboardNotesPage = () => {
  return (
    <DashboardLayout title="Practice & Study notes">
      <>
        <h2>DashboardNotesPage</h2>
      </>
    </DashboardLayout>
  );
};

export default withAuth(DashboardNotesPage);
