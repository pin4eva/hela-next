import { MobileNavAtom } from "atoms/MobileNav";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const HeaderComp = () => {
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
          <a className="nav-brand font-weight-bold">HELA</a>
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
              <button className="btn btn-outline-primary btn-sm">Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </Header>
  );
};

const Header = styled.header``;
export default HeaderComp;

const navItems = [
  { name: "Q & A", link: "/qa" },
  { name: "Reports", link: "/reports" },
  { name: "Practice Notes", link: "/notes" },
];
