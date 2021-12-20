import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Voquar DnD Wiki
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/maps">
                  Maps
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/history">
                  History and Information
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resources">
                  Scrolls and Books
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
