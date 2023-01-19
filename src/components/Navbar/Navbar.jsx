import React from "react";
import "./navbar.css";
import { MdDarkMode } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";
import { useTheme } from "../../hooks/useTheme";

const Navbar = ({ links }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <nav className="navbar">
        <p>
          <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            &lsaquo;AC/&rsaquo;
          </a>
        </p>
        <ul id="menu">
          {links.map((l) => {
            return (
              <a onClick={l.onClick}>
                <li>{l.title}</li>
              </a>
            );
          })}
        </ul>
        <div className="oi">
          {theme === "light" ? (
            <MdDarkMode
              size={20}
              className="button-theme text-white cursor-pointer"
              onClick={() => setTheme("dark")}
            ></MdDarkMode>
          ) : (
            <BsFillLightbulbFill
              size={20}
              className="button-theme text-white cursor-pointer"
              onClick={() => setTheme("light")}
            ></BsFillLightbulbFill>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
