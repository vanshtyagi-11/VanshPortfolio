import { useState } from "react";
import logo from "../assets/logo.svg";
import underline from "../assets/nav_underline.svg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import "../css/navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (section) => {
    setmenu(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Vansh logo" className="logo-img" />
      <button
        className="nav-mob-toggle nav-mob-open"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <img src={menu_open} alt="" />
      </button>
      {isMenuOpen && (
        <button
          className="nav-menu-backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <ul className={`nav-menu${isMenuOpen ? " nav-menu-open" : ""}`}>
        <li className="nav-menu-close-item">
          <button
            className="nav-mob-toggle nav-mob-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={menu_close} alt="" />
          </button>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#hero">
            <p onClick={() => handleMenuItemClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && (
            <img className="nav-underline" src={underline} alt="" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuItemClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && (
            <img className="nav-underline" src={underline} alt="" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#mywork">
            <p onClick={() => handleMenuItemClick("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && (
            <img className="nav-underline" src={underline} alt="" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuItemClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && (
            <img className="nav-underline" src={underline} alt="" />
          )}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};
export default Navbar;
