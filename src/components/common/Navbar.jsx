import React, { useState } from "react";
import { UserLinks, HirerLinks } from "../../constants/NavLinks";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import MobileMenu from "./section/MobileMenu";
import navLogo from "../../assets/logo.png"

const Navbar = () => {
  const links = UserLinks;

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="">
        <div className="fixed  bg-white container py-3 px-5 md:py-2 md:px-5">
          <div className="flex justify-between items-center">
            {/* logo section */}
            <div>
              <a href="/" className="flex items-center">
                <img src={navLogo} alt="logo" className="w-12 mt-1" />
                <span className="text-xl sm:text-4xl font-bold text-indigo-500">
                  Recruiter
                </span>
              </a>
            </div>

            {/* desktop navlinks section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {links.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="cursor-pointer py-4">
                      <a
                        href={link}
                        className="text-lg font-medium hover:text-sky-600 py-2 hover:border-b-2 hover:border-sky-900 transition-all duration-300"
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <button className="hidden md:block bg-indigo-700 text-white hover:bg-sky-950 duration-300 rounded-lg py-2 px-4">
                Get Started
              </button>
            </div>

            {/* mobile view */}
            <div className="md:hidden">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl md:hidden"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl md:hidden"
                />
              )}
            </div>
          </div>
        </div>

        {/* mobile view links */}
        <MobileMenu 
        showMenu={showMenu}
        toggleMenu={toggleMenu}
        />
      </nav>
    </>
  );
};

export default Navbar;
