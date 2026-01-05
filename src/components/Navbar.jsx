import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
     

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
        <Link to="/football" onClick={() => setMenuOpen(false)}>Football</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* Hamburger (visible on ALL screens) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
