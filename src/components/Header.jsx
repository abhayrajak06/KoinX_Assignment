import React from "react";

const Header = () => {
  return (
    <div style={{ position: "sticky", top: "0", left: "0" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <span className="text-primary">Koin</span>
            <span className="text-warning">X</span>
            <sup className="">
              <span className="" style={{ fontSize: "0.6rem" }}>
                TM
              </span>{" "}
            </sup>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold active"
                  aria-current="page"
                  href="#"
                >
                  Crypto Taxes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold active" href="#">
                  Free Tools
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link fw-bold active" href="#">
                  Resource Center
                </a>
              </li>

              <li className="nav-item mt-1  me-3">
                <button className="btn btn-primary ps-2 pe-2 fw-bold">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
