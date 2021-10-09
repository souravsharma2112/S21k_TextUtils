import React from "react";
import PropTypes from "prop-types";


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar flex bg-black navbar-dark bg-dark ${props.theme}`}>
        <div className="container-fluid mx-3">
          <a className="navbar-brand" href="#">{props.title}</a>
          <div className="right-side flex">
            <div className={`right-side-theme-box ${props.themeName} ${props.activeColorBox}`} onClick={props.toggleTheme} ></div>
            <button onClick={props.toggleBtn} className="btn theme-button">
              <i className={`bi bi-${props.iconChange}-fill`}></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Title Here",
};

