import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

const navItem = "home,shop,about,contact".split(",");
const navIcons = ["user", "search", "favourite", "cart"];

const Navbar = ({ bg = "#fff" }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
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
      <Fragment>
        <img className="show-mobile" src="/vectors/user.svg" alt="user-icon" />
        <div className="hamburger">
          <img src="/vectors/cart.svg" alt="cart-icon" />
          <img
            src="/vectors/menu.svg"
            alt="menu-icon"
            onClick={() => {
              setShowMenu(true);
            }}
          />
        </div>
        {showMenu && (
          <div className="mobile-nav-items ">
            <img
              className="cancel-button"
              src="/vectors/cancel.svg"
              alt="cancel-icon"
              onClick={() => setShowMenu(false)}
            />
            {navItem.map((item, itemIndex) => (
              <span
                onClick={() => {
                  setShowMenu(false);
                  navigate(`/${item}`);
                }}
                key={itemIndex}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </Fragment>
    </nav>
  );
};

export default Navbar;
