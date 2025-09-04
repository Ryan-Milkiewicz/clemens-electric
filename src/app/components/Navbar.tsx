import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary navbar-expand-sm ">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/clemens-electric-logo.png"
            alt="Clemens Electric Logo"
            height={315}
            width={885}
            style={{ maxHeight: "100px", height: "auto", width: "auto" }}
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
          <ul className="navbar-nav d-flex ms-auto">
            <li className="nav-item px-4 py-2">
              <Link href="/" className={`nav-link ${styles.navLinkStyle}`}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown px-4 py-2">
              <a
                className={`nav-link dropdown-toggle ${styles.navLinkStyle}`}
                href="/about-us"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    href="/about-us"
                    className={`dropdown-item ${styles.navLinkStyle}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us/faq"
                    className={`dropdown-item ${styles.navLinkStyle}`}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item px-4 py-2">
              <Link
                href="/about-us"
                className={`nav-link ${styles.navLinkStyle}`}
              >
                About
              </Link>
            </li> */}
            <li className="nav-item px-4 py-2">
              <Link
                href="/services"
                className={`nav-link ${styles.navLinkStyle}`}
              >
                Services
              </Link>
            </li>
            <li className="nav-item px-4 py-2">
              <Link
                href="/markets"
                className={`nav-link ${styles.navLinkStyle}`}
              >
                Markets
              </Link>
            </li>
            {/* <li className="nav-item px-4 py-2">
              <Link
                href="#contact"
                className={`nav-link ${styles.navLinkStyle}`}
              >
                Contact
              </Link>
            </li> */}
          </ul>
          <div className="ms-3">
            <Link href="/contact">
              <button className="btn rounded-5 buttonColor">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
