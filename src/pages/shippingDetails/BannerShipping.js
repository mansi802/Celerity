import React from "react";
import locationIcon from "../../assets/icons/location.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import shipIcon from "../../assets/icons/ship.svg";
import editIcon from "../../assets/icons/edit2.svg";

const BannerShipping = () => {
  return (
    <React.Fragment>
      <div className=" border-b-[1px] border-[#B4B4B499] pb-5 pt-12">
        <div className=" container">
          <div className=" mb-12 flex flex-col items-center gap-11 sm:px-20 lg:flex-row xl:px-40">
            <div className=" flex max-h-[52px] w-full max-w-[211px] items-center rounded-xl bg-white p-3">
              <img width={24} src={shipIcon} alt="" />
              <h3 className=" ml-3 font-semibold text-[#868686]">Load</h3>
            </div>
            <div className=" md:item-center relative flex flex-col items-start gap-5 md:flex-row md:gap-10 xl:gap-20">
              <div className=" absolute left-5 top-5 z-[-1] h-[180px] w-[2px] bg-[#D3B0FF] md:left-10 md:top-1/4 md:h-[2px] md:w-[400px] xl:w-[500px]"></div>
              <div className=" flex items-center justify-center gap-2 md:flex-col">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] border-[#F8F9FD] bg-[#D3B0FF] text-white">
                  1
                </span>
                <p>Search</p>
              </div>

              <div className=" flex items-center justify-center gap-2 md:flex-col">
                <span className=" flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] border-[#F8F9FD] bg-[#D3B0FF] text-white">
                  2
                </span>
                <p>Recommended services</p>
              </div>

              <div className=" flex items-center justify-center gap-2 md:flex-col">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] border-[#F8F9FD] bg-[#D3B0FF] text-white">
                  3
                </span>
                <p>Results</p>
              </div>

              <div className=" flex items-center justify-center gap-2 md:flex-col">
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] border-[#F8F9FD] bg-[#868686] text-white">
                  4
                </span>
                <p>Booking</p>
              </div>
            </div>
          </div>

          <div className=" mx-auto flex max-w-[450px] flex-col justify-between gap-4 rounded-2xl bg-white px-6 py-5 font-semibold shadow-custom lg:max-w-[1286px] lg:flex-row">
            <div className=" flex items-center">
              <img
                className=" ml-3 w-[18px]"
                src={locationIcon}
                alt="Location icon"
              />
              <input
                value="Delhi,110003"
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
                value="Shanghai, 200080"
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
                value="13 April 2023"
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
                value="114.21KG - AIR"
                className=" w-full px-2 focus-within:outline-none"
                type="text"
                placeholder="Load"
              />
            </div>

            <div className=" lg:boder-[#B9B9B9] self-center lg:border-l-2">
              <button className=" ml-3 rounded-2xl ">
                <img width={20} src={editIcon} alt="shipping page" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BannerShipping;
