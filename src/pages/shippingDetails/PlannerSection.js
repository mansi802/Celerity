import React, { useState } from "react";
import OfferCards from "./OfferCards";
import dotgreen from "../../assets/icons/dotGreen.svg";
import dotblue from "../../assets/icons/dotblue.svg";

const PlannerSection = () => {
  const [activeButton, setActiveButton] = useState("1");

  return (
    <React.Fragment>
      <div className=" py-5">
        <div className="container">
          <div className=" flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            <div className=" w-full max-w-[256px]">
              <h3 className=" mb-10 font-semibold">
                3 Top Quote <span className=" font-normal">(6 in Total)</span>
              </h3>

              <div className=" flex flex-col gap-8">
                <select
                  className=" w-full bg-inherit font-semibold"
                  name="filters"
                  id="filters"
                >
                  <option selected>Filters</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 3</option>
                  <option value="option2">Option 3</option>
                </select>

                <select
                  className=" w-full bg-inherit font-semibold"
                  name="filters"
                  id="filters"
                >
                  <option selected>Price</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 3</option>
                  <option value="option2">Option 3</option>
                </select>

                <select
                  className=" w-full bg-inherit font-semibold"
                  name="filters"
                  id="filters"
                >
                  <option selected>Modes</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 3</option>
                  <option value="option2">Option 3</option>
                </select>

                <select
                  className=" w-full bg-inherit font-semibold"
                  name="filters"
                  id="filters"
                >
                  <option selected>Sellers</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 3</option>
                  <option value="option2">Option 3</option>
                </select>
              </div>
            </div>

            <div className=" w-full max-w-[400px] sm:max-w-[790px]">
              <div className=" mx-auto mb-10 flex max-w-[250px] flex-col items-center justify-center gap-5 rounded-2xl bg-[#EBE8FF] px-5 py-3 text-[13px] font-semibold text-[#868686] sm:max-h-[52px] sm:max-w-full sm:flex-row sm:gap-14 md:max-h-[42px]">
                <button
                  onClick={() => setActiveButton("1")}
                  className={` transition-all duration-300 ${
                    activeButton === "1"
                      ? " rounded-2xl bg-white px-5 py-2 text-[#9747FF]  sm:px-10 sm:py-4"
                      : ""
                  }`}
                >
                  Best Value 5-5 days. $3,121
                </button>
                <button
                  onClick={() => setActiveButton("2")}
                  className={` transition-all duration-300 ${
                    activeButton === "2"
                      ? " rounded-2xl bg-white px-5 py-2  text-[#9747FF] sm:px-10 sm:py-4"
                      : ""
                  }`}
                >
                  Quickest 5-5 days. $3,121
                </button>
                <button
                  onClick={() => setActiveButton("3")}
                  className={` transition-all duration-300 ${
                    activeButton === "3"
                      ? " rounded-2xl bg-white px-5 py-2  text-[#9747FF] sm:px-10 sm:py-4"
                      : ""
                  }`}
                >
                  Cheapest 5-5 days. $3,121
                </button>
              </div>

              <div className=" flex flex-col gap-5">
                <OfferCards icon={dotgreen} value="Best Value" />

                <OfferCards icon={dotblue} value="Eco" />

                <OfferCards icon={dotgreen} value="Best Value" />

                <OfferCards icon={dotgreen} value="Best Value" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlannerSection;
