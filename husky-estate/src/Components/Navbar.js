import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Links } from "../data";
import "../main.css";
import ShowLinks from "./ShowLinks";
import logo from "./../assets/logo.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <div className="links-container show-container">
              <div className="first-set">
                <ul className="links">
                  {Links.slice(1, 6).map((link) => {
                    const { id, nav, url } = link;
                    return (
                      <li key={id}>
                        <Link to={url}>{nav}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="second-set">
                <ul className="links">
                  {Links.slice(6, 9).map((link) => {
                    const { id, nav, url } = link;
                    return (
                      <li key={id}>
                        <Link to={url}>{nav}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <button className="nav-toggle">
              <FaBars
                style={{ color: "#fff", fontSize: "20px" }}
                className="nav-toggle"
                onClick={() => setShowLinks(true)}
              />
            </button>
            {/* <Link to="/homes">
              <span className="logo">HuskyEstate</span>
            </Link> */}

            <Link to="/homes">
              <span className="logo">
                <img src={logo} alt="logo" />
                HuskyEstate
              </span>
            </Link>

            <span>
              <a href="/" className="links signUp">
                Sign Up
              </a>
              <a href="/" className="links logIn">
                Log In
              </a>
            </span>
          </div>
          {showLinks && <ShowLinks onClose={() => setShowLinks(false)} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
