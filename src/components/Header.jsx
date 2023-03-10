import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import BurguerMenu from "./BurguerMenu";
import UfrgsMunLogo from "../assets/logo.svg";
import "./header.css";

export default function Header() {
  const BREAKPOINT = 1090;
  const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINT);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos > 50; // adjust this value as needed
      setIsVisible(visible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.innerWidth]);

  return (
    <>
      <header className="py-2 px-8 bg-transparent flex justify-between md:justify-around items-center raleway font-light">
        <div className="content">
          <a href="/">
            <img
              src={UfrgsMunLogo}
              alt="UFRGS Mun logo"
              className="h-8 md:h-10"
            />
          </a>
        </div>
        <nav className="content">{isMobile ? <BurguerMenu /> : <Nav />}</nav>
      </header>
      <header
        className={`py-2 px-8 bg-darkGreen shadow-lg flex justify-between md:justify-around items-center raleway font-light sticky-header ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="content">
          <a href="/">
            <img
              src={UfrgsMunLogo}
              alt="UFRGS Mun logo"
              className="h-8 md:h-10"
            />
          </a>
        </div>
        <nav className="content">{isMobile ? <BurguerMenu /> : <Nav />}</nav>
      </header>
    </>
  );
}
