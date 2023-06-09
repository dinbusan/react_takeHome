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
        setActiveLink("");
      } else if (pathname === "/blog") {
        setActiveLink("Blog");
      }
    }, [location]);

  return (
    <nav className="flex flex-col justify-between h-[208px] bg-slate-500 text-lg">
      <div className="flex mx-40 pt-8 justify-between text-white">
        <NavLink to="/">
          <img className="w-[240px]" src={Logo} alt="Social Brothers Logo" />
        </NavLink>
        <ul className="space-x-8 decoration-underlineOrange underline-offset-8	">
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
      <div className="flex justify-center text-white text-5xl font-semibold mb-10">
        <h1>{activeLink}</h1>
      </div>
    </nav>
  );
};

export default NavBar;
