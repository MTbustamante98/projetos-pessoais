import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import useMedia from "../Hooks/useMedia";

const Header = () => {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const { pathname } = useLocation();
  const responsive = useMedia("(max-width: 63.938rem)");

  function toggleMenu() {
    setActiveMenu((prev) => !prev);
  }

  function closeMenu() {
    setActiveMenu(false);
  }

  const OBJwichByPathName = {
    "/": "home",
    "/sobre": "sobre",
    "/portfolio": "portfolio",
    "/contato": "contato",
  };
  const varWichByPathName = OBJwichByPathName[pathname];
 
  if (responsive) {
    return (
      <header className="bg-red-2 fixed w-full z-50">
        <div className="py-4 flex items-center justify-between pr-4 pl-4">
          <Logo className="w-60" />
          {activeMenu && (
            <nav className="flex items-center z-40 fixed w-full inset-0">
              <div
                onClick={closeMenu}
                className="fixed lg:hidden inset-0 bg-red-950/40 backdrop-blur-md"
              ></div>
              <ul className="flex flex-col divide-y-2 divide-white/10 text-white z-50 absolute p-8 w-full *:uppercase *:font-sans *:font-medium *:text-neutral-5 *:text-lg *:py-4 *:block *:hover:bg-white/10 *:tracking-wider">
                <Link onClick={closeMenu} to="/">
                  <li>Home</li>
                </Link>
                <Link onClick={closeMenu} to="/sobre">
                  <li>Sobre mim</li>
                </Link>
                <Link onClick={closeMenu} to="/portfolio">
                  <li>Portfólio</li>
                </Link>
                <Link onClick={closeMenu} to="/contato">
                  <li>Contato</li>
                </Link>
              </ul>
            </nav>
          )}
          <button onClick={toggleMenu} className="py-4 px-8 cursor-pointer">
            <span className="flex flex-col justify-between h-6 w-9 *:h-0.5 *:rounded-md *:bg-white">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="bg-red-2 fixed w-full z-50 top-0 left-0">
        <div className="h-30 flex items-center justify-center lg:pr-8 lg:pl-8">
          <nav>
            <ul className="flex items-center md:gap-10 lg:gap-16 uppercase mr-20 md:mr-10 *:font-regular md:text-sm lg:*:text-sm 2xl:*:text-base **:text-neutral-5 *:tracking-wider">
              <Link
                className={`py-4 px-4 dec ${varWichByPathName === "home" ? "active" : ""}`}
                to="/"
              >
                <li>Home</li>
              </Link>
              <Link
                className={`py-4 px-4 dec ${varWichByPathName === "sobre" ? "active" : ""}`}
                to="/sobre"
              >
                <li>Sobre mim</li>
              </Link>
            </ul>
          </nav>
          <Link to="/">
            <Logo className="w-100 lg:w-80 " />
          </Link>
          <nav>
            <ul className="flex items-center md:gap-10 lg:gap-16 uppercase ml-20 md:ml-10 *:font-regular md:text-sm lg:*:text-sm 2xl:*:text-base **:text-neutral-5 *:tracking-wider">
              <Link
                className={`py-4 px-4 dec ${varWichByPathName === "portfolio" ? "active" : ""}`}
                to="/portfolio"
              >
                <li>Portfólio</li>
              </Link>
              <Link
                className={`py-4 px-4 dec ${varWichByPathName === "contato" ? "active" : ""}`}
                to="/contato"
              >
                <li>Contato</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
