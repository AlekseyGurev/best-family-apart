import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    backgroundColor: "#e3f2fd",
  };
  return (
    <nav className="navbar navbar-light mb-4" style={navStyle}>
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Об отеле
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rooms">
              Номера
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
