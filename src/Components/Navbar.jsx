import { useState } from "react";
import "./Navbar.css";
import { HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="container-logo">
          <button
            className="hamburger-lines"
            onClick={() => setToggle(!toggle)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </button>
          <div className="logo-name">TMDB</div>
        </div>
        <div className="container-links">
          <div className="link">Movies</div>
          <div className="link">Series</div>
          <div className="link">Login</div>
          <div className="link">Registro</div>
          <div className="link">
            <FiSearch />
          </div>
          <div className="link">juan_ma526</div>
        </div>
      </div>
      <div className={toggle ? "open" : "close"}>
        <div className="link">
          <FiSearch />
        </div>
        <div className="link">juan_ma526</div>
        <div className="link">Movies</div>
        <div className="link">Series</div>
        <div className="link">Login</div>
        <div className="link">Registro</div>
        <div className="logo-icon" onClick={() => setToggle(!toggle)}>
          <HiX />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
