import React from "react";
import "./navbar.css";
const Navbar = ({ links }) => {
  return (
    <header>
      <nav className="navbar">
        <p>
          <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>&lsaquo;AC/&rsaquo;</a>
        </p>
        <ul  id="menu">
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
