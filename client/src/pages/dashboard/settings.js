import ProfileEdit from "@/components/user/ProfileEdit";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import withAuth from "utils/withAuth";

const SettingsPage = () => {
  return (
    <DashboardLayout title="Account Settings">
      <div>
        <ProfileEdit />
      </div>
    </DashboardLayout>
  );
};

// export default SettingsPage;
export default withAuth(SettingsPage);
