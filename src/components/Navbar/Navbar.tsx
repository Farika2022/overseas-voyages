import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={assets.logo}
          className="logo inline-flex transition-transform duration-200 hover:scale-145"
          alt=""
        />
      </Link>
      <ul className="navbar-menu ">
        <li
          onClick={() => setMenu("WHO WE ARE")}
          className={menu === "WHO WE ARE" ? "active" : ""}
        >
          WHO WE ARE
        </li>
        <li
          onClick={() => setMenu("WHAT WE DO")}
          className={menu === "WHAT WE DO" ? "active" : ""}
        >
          WHAT WE DO
        </li>
        <li
          onClick={() => setMenu("WHY US")}
          className={menu === "WHY US" ? "active" : ""}
        >
          WHY US
        </li>
         <li
          onClick={() => setMenu("DESTINATION")}
          className={menu === "DESTINATION" ? "active" : ""}
        >
          DESTINATION
        </li>
         <li
          onClick={() => setMenu("SUSTAINABILITY")}
          className={menu === "SUSTAINABILITY" ? "active" : ""}
        >
          SUSTAINABILITY
        </li>
         <li
          onClick={() => setMenu("CONTACT")}
          className={menu === "CONTACT" ? "active" : ""}
        >
          CONTACT
        </li>
        <li>
         
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
