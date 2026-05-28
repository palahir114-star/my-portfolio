// components/Navbar.jsx

import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Pal Ahir</h2>

      <div className={menu ? "nav-links active" : "nav-links"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="menu-btn" onClick={() => setMenu(!menu)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;