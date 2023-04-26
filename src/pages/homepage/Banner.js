import React from "react";
import arrowRight from "../../assets/icons/arrowRight.svg";
import locationIcon from "../../assets/icons/location.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import shipIcon from "../../assets/icons/ship.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <React.Fragment>
      <div className=" py-16">
        <div className=" container">
          <h2 className=" mb-2 text-center text-[32px] font-semibold sm:text-[42px]">
            Hassle-Free Shipping Solutions
          </h2>
          <p className=" mb-20 text-center text-[18px] font-medium sm:text-[22px] md:mb-32">
            Compare, book, and manage your freight across the world’s top
            logistics providers, all on one platform.
          </p>
          <div className=" mx-auto flex max-w-[450px] flex-col justify-between gap-4 rounded-2xl bg-white px-6 py-5 font-semibold text-[#868686] shadow-custom lg:max-w-[1286px] lg:flex-row">
            <div className=" flex items-center">
              <img
                className=" ml-3 w-[18px]"
                src={locationIcon}
                alt="Location icon"
              />
              <input
                className=" w-full px-2 focus-within:outline-none"
                type="text"
                placeholder="Origin, Port, City"
              />
            </div>

            <div className=" flex items-center">
              <img
                className=" ml-3 w-[18px]"
                src={locationIcon}
                alt="Location icon"
              />
              <input
                className=" w-full px-2 focus-within:outline-none"
                type="text"
                placeholder="Destination, Port, City"
              />
            </div>

            <div className=" lg:boder-[#B9B9B9] flex items-center lg:border-l-2">
              <img
                className=" ml-3 w-[18px]"
                src={calendarIcon}
                alt="Location icon"
              />
              <input
                className=" w-full px-2 focus-within:outline-none"
                type="text"
                placeholder="dd/mm/yyyy"
              />
            </div>

            <div className=" lg:boder-[#B9B9B9] flex items-center lg:border-l-2">
              <img
                className=" ml-3 w-[18px]"
                src={shipIcon}
                alt="Location icon"
              />
              <input
                className=" w-full px-2 focus-within:outline-none"
                type="text"
                placeholder="Load"
              />
            </div>

            <div className=" lg:boder-[#B9B9B9] self-center lg:border-l-2">
              <Link onClick={() => window.scrollTo(0, 0)} to="/shippingPage">
                <button className=" ml-3 rounded-2xl bg-[#6F57E9] px-5 py-3 text-white hover:bg-[#5643b8] lg:px-2">
                  <img width={16} src={arrowRight} alt="shipping page" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
