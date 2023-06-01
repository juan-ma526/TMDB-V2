import { useContext, useState } from "react";
import "./Navbar.css";
import { HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState("open-menu");

  const handleLogout = () => {
    setUser(null); // Elimina el usuario del estado del contexto
  };

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
          <Link className="link-router" to="/login">
            <div className="link">{user ? "" : "Login"}</div>
          </Link>
          <Link className="link-router" to="/register">
            <div className="link">{user ? "" : "Registro"}</div>
          </Link>
          <Link to="search" className="link-router">
            <div className="link">
              <FiSearch />
            </div>
          </Link>
          <Link className="link-router" to="/profile">
            <div className="link" onClick={() => setMenuOpen(!menuOpen)}>
              {user ? user.name : "Profile"}
            </div>
          </Link>
        </div>
        <div className={menuOpen ? "sub-menu-wrap open-menu" : "sub-menu-wrap"}>
          <div className="sub-menu" onClick={handleLogout}>
            <Link className="link-router" to="/">
              <div className="user-info">
                <h4>Logout</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* vista mobile*/}
      <div className={toggle ? "open" : "close"}>
        <Link to="search" className="link-router">
          <div className="link" onClick={() => setToggle(!toggle)}>
            <FiSearch />
          </div>
        </Link>
        <div className="link">{user ? user.name : "Profile"}</div>
        <Link to="/" className="link-router">
          <div className="link" onClick={() => setToggle(!toggle)}>
            Home
          </div>
        </Link>

        <Link className="link-router" to="/login">
          <div className="link" onClick={() => setToggle(!toggle)}>
            {user ? "" : "Login"}
          </div>
        </Link>
        <Link className="link-router" to="/">
          <div className="link" onClick={() => setToggle(!toggle)}>
            Logout
          </div>
        </Link>
        <Link className="link-router" to="/register">
          <div className="link" onClick={() => setToggle(!toggle)}>
            {user ? "" : "Registro"}
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
