import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    backgroundColor: "#e3f2fd",
  };
  return (
    <nav className="navbar navbar-light mb-4" style={navStyle}>
      <div className="container">
        <ul className="nav ">
          <li className="nav-item">
            <Link className="nav-link link-dark" to="/">
              Об отеле
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-dark" to="/rooms">
              Номера
            </Link>
          </li>
        </ul>
        <div>
          <Link className="nav-link link-dark" to="/login">
            Войти
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
