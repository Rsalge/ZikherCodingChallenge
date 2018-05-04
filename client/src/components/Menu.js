import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">Refresh Token</Link>
      <Link to="/search">Search </Link>
    </div>
  );
};

export default Menu;
