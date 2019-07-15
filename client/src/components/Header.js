import React from "react";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top header-col">
      <a className="navbar-brand" href="/">
        Globally Public Assets
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/assets">
              Asset List
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;