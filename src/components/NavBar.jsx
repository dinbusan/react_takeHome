import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "/assets/logo.svg";

const NavBar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('Home');
    
    useEffect(() => {
      const pathname = location.pathname;
      // Update activeLink based on the current route
      if (pathname === "/") {
        setActiveLink("Home");
      } else if (pathname === "/blog") {
        setActiveLink("Blog");
      }
    }, [location]);

  return (
    <nav className="flex flex-col mx-32 mt-8">
      <div className="flex justify-between">
        <NavLink to="/">
          <img className="w-[240px]" src={Logo} alt="Social Brothers Logo" />
        </NavLink>
        <ul className="space-x-5">
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </ul>
      </div>
      <div className="flex justify-center">
        <h1>{activeLink}</h1>
      </div>
    </nav>
  );
};

export default NavBar;
