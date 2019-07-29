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
              Public Asset List
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://herc.one/get-started">
              Create Value Chain
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://hipr.one/">
              Play HIPR
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://wallet.herc.one/">
              Wallet
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://etherscan.io/token/0x6251583e7d997df3604bc73b9779196e94a090ce"
            >
              Blockscanner
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://purchase.herc.one/">
              Top Up HERC
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
