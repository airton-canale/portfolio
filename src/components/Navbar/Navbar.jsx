import React from "react";
import "./navbar.css";

const Navbar = ({ links }) => {
  return (
    <header>
      <nav className="navbar">
        <p>
          <a href="#home">&lsaquo;AC/&rsaquo;</a>
        </p>
        <button data-menu="button" aria-controls="menu"></button>
        <ul data-menu="list" id="menu">
          {links.map((l) => {
            return (
              <a onClick={l.onClick}>
                <li>{l.title}</li>
              </a>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
