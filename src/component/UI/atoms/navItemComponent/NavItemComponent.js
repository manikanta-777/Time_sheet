import React from "react";
import { Link } from "react-router-dom";

import "./NavItemComponent.css";

const NavItemComponent = ({ navInfo }) => {
  return (
    <Link to={navInfo.url} className="navLink" >
      <div className="navItems"><span className="me-2">{navInfo.icon}</span><span>{navInfo.name}</span></div>
    </Link>
  );
};

export default NavItemComponent;
