import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";
import { useAwayListener } from "../AwayListner";

const DashboardAside = () => {
  const ref = useRef(null);
  useAwayListener(ref, () => {
    if (typeof window !== "undefined") {
      const sidebar = document.querySelector(".dashboard-aside");
      sidebar.classList.remove("open");
    }
  });

  return (
    <Aside className="dashboard-aside bg-green " ref={ref}>
      <div className="sidebar-wrapper text-light py-3">
        <div className="d-flex container  align-items-center justify-content-between">
          <h6 className="m-0">Hela</h6>{" "}
          <i
            className="fas fa-cog text-light-green d-md-none"
            // onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
        <div className="profile container">
          <div className="text-center">
            <div className="profile-image">
              <Image
                className="rounded-circle"
                src="/images/my-dp.jpg"
                width="100"
                height="100"
              />
              <p className="profile-username my-3 font-weight-bold">
                Peter Akaliro
              </p>
            </div>
          </div>
        </div>

        <div className="links mt-5">
          <ul className="nav flex-column ">
            {navLinks.map((nav, i) => (
              <li className="nav-item" key={i}>
                <Link href={nav.link}>
                  <a className="nav-link font-weight-bold">{nav.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Aside>
  );
};

DashboardAside.propTypes = {
  isOpen: PropTypes.bool,
};

DashboardAside.defaultProps = {
  isOpen: true,
};

const Aside = styled.aside`
  .links {
    width: 100%;

    .nav {
      width: 100%;
    }
  }
  .profile {
    margin: 3rem 0;
  }
`;

export default DashboardAside;

const navLinks = [
  { name: "Reports", link: "/dashboard/reports" },
  { name: "Practice Notes", link: "/dashboard/notes" },
  { name: "Q & A", link: "/dashboard/questions" },
  { name: "Settings", link: "/dashboard/settings" },
];
