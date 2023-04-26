import React from "react";

import locationIcon from "../../assets/icons/location.svg";
import airplaneIcon from "../../assets/icons/airplane.svg";
import frameIcon from "../../assets/icons/Frame 34.svg";
import starIcon from "../../assets/icons/Star.svg";
import { Link } from "react-router-dom";

const OfferCards = ({ icon, value }) => {
  return (
    <div className=" item-center flex flex-col  gap-10 rounded-2xl bg-white px-8 py-5 sm:flex-row sm:justify-between sm:gap-0">
      <div>
        <div className=" mb-5 flex items-center justify-center sm:justify-start">
          <div
            className={` flex items-center justify-center rounded-2xl  p-3 ${
              value === "Eco" ? "bg-[#ADBFFF]" : "bg-[#AFFFAD]"
            } `}
          >
            <span className="mr-2 inline-block">
              <img src={icon} alt="" />
            </span>
            <span className=" text-[11px]">{value}</span>
          </div>
          <p className=" ml-6 border-r-[1px] border-[#B1B1B199] pr-3 text-[13px] text-[#FF0000]">
            Express
          </p>
          <p className=" ml-3 text-[11px] text-[#565656]">Est. 5 days</p>
        </div>

        <div className=" mb-6 flex items-center justify-center text-[#565656] sm:justify-start">
          <img width={17} src={locationIcon} alt="" />
          <p className=" ml-2 text-[13px]">110003, Delhi</p>
          <div className="ml-2 h-[1px] w-[24px] bg-[#565656]"></div>
          <img className=" ml-2" width={16} src={airplaneIcon} alt="" />
          <div className="ml-2 h-[1px] w-[24px] bg-[#565656]"></div>
          <img className=" ml-2" width={17} src={locationIcon} alt="" />
          <p className=" ml-2 text-[13px]">200080, Shanghai</p>
        </div>

        <div className=" flex items-center justify-center sm:justify-start">
          <img width={20} src={frameIcon} alt="" />
          <p className=" ml-2 text-[11px]">Primetime Worldwide</p>
          <img className=" ml-3" width={78} src={starIcon} alt="" />
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center border-t-[1px] border-[#A3A3A366] pt-3 sm:border-l-[1px] sm:border-t-0 sm:pl-3 sm:pt-0">
        <p className="mb-3 text-[19px] font-bold">
          $ 3,982.<span className=" text-[11px]">63</span>
        </p>
        <Link
          to="/bookingPage"
          className="mb-2 rounded-2xl bg-[#6F57E9] px-7 py-3 text-white hover:bg-[#5643b8]"
        >
          Select
        </Link>
        <p className=" text-[11px] text-[#363636] underline">View details</p>
      </div>
    </div>
  );
};

export default OfferCards;
