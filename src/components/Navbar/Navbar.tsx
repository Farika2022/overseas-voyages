import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Navbar.css";

import { assets } from "../../assets/assets";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
        <motion.header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-br from-red-accent-600 to-red-accent-200"
          : "bg-gradient-to-br from-white to-red-accent-700"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <Link to="/">
        <img
          src={assets.logo}
          className=" bg-white logo inline-flex transition-transform duration-200 hover:scale-125"
          alt=""
        />
      </Link>
      <ul className=" navbar-menu ">
        <MobileHeaderLink
              href="#aboutus"
              onClick={() => setMobileMenuOpen(false)}
            >
          WHO WE ARE
        </MobileHeaderLink>
         <MobileHeaderLink
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
          WHAT WE DO
        </MobileHeaderLink>
        <MobileHeaderLink
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
          WHY US
      </MobileHeaderLink>
         <MobileHeaderLink
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
          DESTINATION
        </MobileHeaderLink>
         <MobileHeaderLink
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
          SUSTAINABILITY
        </MobileHeaderLink>
         <MobileHeaderLink
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
          CONTACT
          </MobileHeaderLink>
        <li>
         
        </li>
      </ul>
      </div>
      </motion.header>
    </div>
  );
};
const MobileHeaderLink: React.FC<{
  href: string;
  children: React.ReactNode;
  
  onClick: () => void;
}> = ({ href, children, onClick }) => (
  <a
    href={href}
    className="py-3 text-center font-semibold text-lg text-white hover:text-red-accent-500 transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);
export default Navbar;
