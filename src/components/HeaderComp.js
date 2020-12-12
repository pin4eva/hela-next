import { MobileNavAtom } from "atoms/MobileNav";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const HeaderComp = () => {
  const [open, setOpen] = useRecoilState(MobileNavAtom);
  const [isMobile, setIsMobil] = useState(false);

  const handleMobileToggle = () => {
    setOpen(!open);
    console.log(isMobile);
  };

  const resizeScreen = () => {
    if (window.innerWidth < 768) {
      setIsMobil(true);
    } else {
      setIsMobil(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeScreen);

    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  });

  return (
    <Header id="front-header">
      <nav className="navbar align-items-center container">
        <Link href="/">
          <a className="nav-brand font-weight-bold">HELA</a>
        </Link>

        <i className="fas fa-bars d-md-none" onClick={handleMobileToggle}></i>

        <ul className="nav">
          {navItems.map((nav, i) => (
            <li className="nav-item" key={i}>
              <Link href="/">
                <a className="nav-link">{nav.name}</a>
              </Link>
            </li>
          ))}

          <li className="nav-item">
            <button className="btn btn-outline-primary btn-sm">Login</button>
          </li>
        </ul>
        <div className={`mobile-nav ${!open ? "close" : ""}`}>
          <ul className="nav">
            {navItems.map((nav, i) => (
              <li className="nav-item" key={i}>
                <Link href="/">
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
