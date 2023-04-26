import React, { useContext } from "react";
import { navbarOpenContext } from "../App";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const { navbarOpen, setNavbarOpen } = useContext(navbarOpenContext);
  return (
    <React.Fragment>
      <nav
        className={`fixed left-0 top-0 z-40 flex h-full w-full transform items-center justify-center bg-[#F8F9FD] text-black transition-all delay-100 duration-300 ${
          navbarOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 text-[26px]">
          <Link
            className=" font-primary "
            to="home"
            smooth={true}
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            Profile
          </Link>
          <Link
            className="  font-primary "
            to="about"
            smooth={true}
            onClick={() => {
              setNavbarOpen(false);
            }}
          >
            Track Shipment
          </Link>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default MobileMenu;
