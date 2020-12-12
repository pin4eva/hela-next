import DashboardAside from "@/components/dashboard/DashboardAside";
import { DSidebar } from "atoms/DashboardSideBar";
import PropTypes from "prop-types";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const DashboardLayout = ({ children, title }) => {
  const [isOpen, setIsOpen] = useRecoilState(DSidebar);

  return (
    <div className="dashboard">
      <DashboardAside />
      <main className="dashboard-main">
        <div className="container">
          <div className="d-flex align-items-center py-3">
            <i
              className="fas fa-bars fa-2x text-light-green d-md-none c-hand"
              onClick={() => setIsOpen(!isOpen)}
            ></i>
            <h5 className="text-center align-self-center flex-1 m-0">
              {title}
            </h5>
          </div>
          {children}
        </div>
      </main>
      <footer className="dashboard-footer">footer</footer>
    </div>
  );
};
DashboardLayout.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};
const Wrapper = styled.div``;
export default DashboardLayout;
