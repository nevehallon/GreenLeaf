import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          GreenLeaf <i className="fab fa-envira"></i> App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbars"
          aria-controls="navbars"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbars">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink className="nav-link" to="/my-cards">
                My Cards
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {!user && (
              <>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink className="nav-link" to="/sign-in">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink className="nav-link" to="/sign-up">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink className="nav-link" to="/logout">
                  Log Out
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
