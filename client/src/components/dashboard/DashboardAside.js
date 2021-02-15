import { UserAtom } from "atoms/UserAtom";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { removeTokenCookie } from "utils/cookieUtils";
import { useAwayListener } from "../AwayListner";
import router from "next/router";

const DashboardAside = () => {
  const [user, setUser] = useRecoilState(UserAtom);

  const ref = useRef(null);

  useAwayListener(ref, () => {
    if (typeof window !== "undefined") {
      const sidebar = document.querySelector(".dashboard-aside");
      sidebar.classList.remove("open");
    }
  });

  const logout = () => {
    removeTokenCookie();
    router.push("/login");
    setUser(null);
  };

  return (
    <Aside className="dashboard-aside" ref={ref}>
      <div className="sidebar-wrapper text-light py-3">
        <div className="d-flex container  align-items-center justify-content-between">
          <Link href="/">
            <a className="flex-1 text-center c-hand">Hela</a>
          </Link>
          <i
            className="fas fa-cog text-light-green d-md-none"
            // onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
        <div className="profile container">
          <div className="text-center">
            <div className="profile-image d-flex flex-column align-items-center">
              <img
                className="avater-rounded"
                src={user?.image}
                alt="profile-image"
                // width="100"
                // height="100"
              />
              <p className="profile-username my-2 font-weight-bold">
                {user?.name}
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
            <li className="nav-item" onClick={logout}>
              <a className="nav-link c-hand">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </Aside>
  );
};

DashboardAside.propTypes = {
  isOpen: PropTypes.bool,
  user: PropTypes.object,
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
  { name: "Dashboard", link: "/dashboard" },
  { name: "Reports", link: "/dashboard/reports" },
  { name: "Practice Notes", link: "/dashboard/notes" },
  { name: "Q & A", link: "/dashboard/questions" },
  { name: "Settings", link: "/dashboard/settings" },
];
