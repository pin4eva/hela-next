import DashboardLayout from "@/layouts/DashboardLayout";
import React, { Fragment } from "react";

const DashboardHome = () => {
  return (
    <DashboardLayout title="Home">
      <Fragment>
        <h3>Dasboard Home</h3>
        <div className="grid-2">
          <div className="grid-item">Item 1</div>
          <div className="grid-item">Item 2</div>
          <div className="grid-item">Item 3</div>
          <div className="grid-item">Item 4</div>
          <div className="grid-item">Item 5</div>
        </div>
      </Fragment>
    </DashboardLayout>
  );
};

export default DashboardHome;
