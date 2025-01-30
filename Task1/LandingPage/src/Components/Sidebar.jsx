import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
