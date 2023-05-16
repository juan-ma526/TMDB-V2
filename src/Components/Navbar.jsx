import { useState } from "react";
import "./Navbar.css";
import { HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
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

          <Link to="/" className="link-router">
            <div className="logo-name">TMDB</div>
          </Link>
        </div>
        <div className="container-links">
          <Link to="/home" className="link-router">
            <div className="link">Movies</div>
          </Link>
          <div className="link">Series</div>
          <Link className="link-router" to="/login">
            <div className="link">Login</div>
          </Link>
          <Link className="link-router" to="/register">
            <div className="link">Registro</div>
          </Link>
          <div className="link">
            <FiSearch />
          </div>
          <div className="link">juan_ma526</div>
        </div>
      </div>
      {/* vista mobile*/}
      <div className={toggle ? "open" : "close"}>
        <div className="link">
          <FiSearch />
        </div>
        <div className="link">juan_ma526</div>
        {/*   <Link to="/home" className="link-router"> */}
        <div className="link" onClick={() => setToggle(!toggle)}>
          Movies
        </div>
        {/* </Link> */}
        <div className="link" onClick={() => setToggle(!toggle)}>
          Series
        </div>
        <Link className="link-router" to="/login">
          <div className="link" onClick={() => setToggle(!toggle)}>
            Login
          </div>
        </Link>
        <Link className="link-router" to="/register">
          <div className="link" onClick={() => setToggle(!toggle)}>
            Registro
          </div>
        </Link>
        <div className="logo-icon" onClick={() => setToggle(!toggle)}>
          <HiX />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
