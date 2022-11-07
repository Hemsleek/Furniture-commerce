import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const navItem = "home,shop,about,contact".split(",");
const navIcons = ["user", "search", "favourite", "cart"];

const Navbar = ({ bg = "#fff" }) => {
  console.log({ bg });
  return (
    <nav className="Navbar " style={{ backgroundColor: bg }}>
      <div className="nav-items">
        {navItem.map((item, itemIndex) => (
          <Link to={`/${item}`} key={itemIndex}>
            {item}
          </Link>
        ))}
      </div>

      <div className="nav-icons">
        {navIcons.map((icon, iconIndex) => (
          <img src={`/vectors/${icon}.svg`} key={iconIndex} alt="nav-icon" />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
