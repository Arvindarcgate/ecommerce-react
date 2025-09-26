// src/components/Navbar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../style/component/Navbar.module.css"; // CSS Module

const Navbar: React.FC = () => {
  const location = useLocation(); // ✅ use hook to get current path

  const links = [
    { to: "/", label: "Home" },
    { to: "/product", label: "Product" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`${styles.navLink} ${
            location.pathname === link.to ? styles.active : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
