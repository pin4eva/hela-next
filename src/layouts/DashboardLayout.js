import DashboardAside from "@/components/dashboard/DashboardAside";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (open) {
        const sidebar = document.querySelector(".dashboard-aside");
        sidebar.classList.toggle("open");
      } else {
        setOpen(false);
      }
    }
    return () => {
      setOpen(false);
    };
  }, [open]);

  return (
    <div className="dashboard">
      <DashboardAside />
      <main className="dashboard-main">
        <div className="wrapper ">
          <div className="container">
            <div className="d-flex align-items-center py-3">
              <i
                className="fas fa-bars fa-2x text-light-green d-md-none c-hand"
                onClick={handleToggle}
              ></i>
              <h5 className="text-center align-self-center flex-1 m-0">
                {title}
              </h5>
            </div>
            {children}
          </div>
        </div>
        <footer className="dashboard-footer">footer</footer>
      </main>
    </div>
  );
};
DashboardLayout.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default DashboardLayout;
