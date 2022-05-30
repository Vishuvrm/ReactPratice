// We need react function based componet... Write the shortcut "rfc"
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.dark ? "dark" : "light"}`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${props.dark ? "light" : "dark"}`}
          to="/"
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.dark ? "light" : "dark"
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.dark ? "light" : "dark"
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* <form className="d-flex" role="search"> */}
          {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          <div className="btn-group px-4 d-flex" id="navbarNav">
            <button className="btn btn-round" style={{"backgroundColor": "#6f0808"}} onClick={()=>props.setTheme("#6f0808")}/>
            <button className="btn btn-round" style={{"backgroundColor": "#0a4c86"}} onClick={()=>props.setTheme("#0a4c86")}/>
            <button className="btn btn-round" style={{"backgroundColor":"#a67f09"}} onClick={()=>props.setTheme("#a67f09")}/>
            <button className="btn btn-round" style={{"backgroundColor": "#056639"}} onClick={()=>props.setTheme("#056639")}/>
            <button className="btn btn-round" style={{"backgroundColor": "#5f0875"}} onClick={()=>props.setTheme("#5f0875")}/>
          </div>
          

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              aria-checked
              id="flexSwitchCheckDefault"
              onClick={props.toggleStyle}
            />
            <label
              className={`form-check-label text-${
                props.dark ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable dark mode
            </label>
          </div>
        {/* </form> */}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Unknown",
};
