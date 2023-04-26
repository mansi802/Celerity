import React, { useContext } from "react";
import Logo from "../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import dollarSquare from "../assets/icons/dollarsquare.svg";
import { navbarOpenContext } from "../App";

const Header = () => {
  const { navbarOpen, setNavbarOpen } = useContext(navbarOpenContext);

  return (
    <React.Fragment>
      <header className="flex items-center justify-between px-5 py-10 sm:px-0 sm:pl-9 sm:pr-14">
        <div>
          <Link to="/">
            <img className=" max-w-[170px]" src={Logo} alt="Shipmate" />
          </Link>
        </div>
        <div className=" hidden sm:block">
          <div className=" flex gap-8">
            <img className=" max-w-[40px]" src={dollarSquare} alt="Profile" />
            <button className=" rounded-2xl bg-[#6F57E9] px-5 py-[14px] text-[19px] font-semibold text-white hover:bg-[#5643b8]">
              Track shipment
            </button>
          </div>
        </div>

        <button
          className="relative z-50 flex h-10 w-10 bg-transparent text-[#6F57E9] hover:bg-transparent focus:outline-none sm:hidden "
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div className="absolute left-1/2 top-1/2 flex w-10 -translate-x-1/2 -translate-y-1/2 transform gap-2">
            <span
              className={` absolute h-1 w-10 transform bg-[#6F57E9] transition duration-300 ease-in-out ${
                navbarOpen ? "rotate-45 delay-200" : "-translate-y-2.5"
              }`}
            ></span>
            <span
              className={` absolute h-1 transform bg-[#6F57E9] transition-all duration-200 ease-in-out ${
                navbarOpen ? "w-0 opacity-50" : "w-10 opacity-100 delay-200"
              }`}
            ></span>
            <span
              className={`absolute h-1 w-10 transform bg-[#6F57E9] transition duration-300 ease-in-out ${
                navbarOpen ? "-rotate-45 delay-200" : "translate-y-2.5"
              }`}
            ></span>
          </div>
        </button>
      </header>
    </React.Fragment>
  );
};

export default Header;
