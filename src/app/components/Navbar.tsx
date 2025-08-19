import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary navbar-expand-sm align-items-center">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="#">
          <Image
            src="/clemens_electric_logo.png"
            alt="Clemens Electric Logo"
            height={0}
            width={200}
            style={{ height: "175px", width: "auto" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item p-4">
              <Link href="#home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item p-4">
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item p-4">
              <Link href="#services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item p-4">
              <Link href="#ourWork" className="nav-link">
                Our Work
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn rounded-5 btn-danger">Get a Quote</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
