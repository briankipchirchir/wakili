import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
        <Link to="/football" onClick={() => setMenuOpen(false)}>Football</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
