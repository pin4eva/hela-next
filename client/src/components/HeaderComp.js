import { UserAtom } from "atoms/UserAtom";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Avatar } from "rsuite";
import styled from "styled-components";
import Logo from "./Logo";
import PropTypes from "prop-types";

const HeaderComp = (props) => {
  const user = useRecoilValue(UserAtom);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mobileNav = document.querySelector(".mobile-nav");

      const navToggler = document.getElementById("front-nav-toggler");

      navToggler.addEventListener("click", () => {
        navToggler.classList.toggle("text-light");
        mobileNav.classList.toggle("open");
      });
    }
  }, []);

  return (
    <Header id="front-header">
      <nav className="navbar align-items-center container">
        <Link href="/">
          <a>
            <Logo bg={props.logoBG} height="2rem" width="4rem" />
          </a>
        </Link>

        <i
          className="fas fa-bars d-md-none"
          // onClick={handleMobileToggle}
          id="front-nav-toggler"
        ></i>

        <div className="mobile-nav">
          <ul className="nav">
            {navItems.map((nav, i) => (
              <li className="nav-item" key={i}>
                <Link href={nav.link}>
                  <a className="nav-link">{nav.name}</a>
                </Link>
              </li>
            ))}

            <li className="nav-item">
              {user ? (
                <a className="nav-link">
                  <Avatar circle size="sm" />
                </a>
              ) : (
                <Link href="/login">
                  <a className="btn btn-outline-primary btn-sm">Login</a>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </Header>
  );
};

HeaderComp.propTypes = {
  logoBG: PropTypes.string,
};

const Header = styled.header``;
export default HeaderComp;

const navItems = [
  { name: "Forum", link: "/forum" },
  { name: "Reports", link: "/reports" },
  { name: "Practice Notes", link: "/notes" },
];
