import React from "react";

const BannerBooking = () => {
  return (
    <React.Fragment>
      <div className=" py-8 sm:py-12">
        <div className=" container">
          <div className=" flex items-center justify-center">
            <div className=" md:item-center relative flex flex-col items-start gap-5 md:flex-row md:gap-20">
              <div className=" absolute left-5 top-5 z-[-1] h-[180px] w-[2px] bg-[#D3B0FF] md:left-10 md:top-1/4 md:h-[2px] md:w-[500px]"></div>
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
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[3px] border-[#F8F9FD] bg-[#D3B0FF] text-white">
                  4
                </span>
                <p>Booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BannerBooking;
