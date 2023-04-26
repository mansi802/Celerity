import React from "react";
import weightmeterIcon from "../../assets/icons/weightmeter.svg";
import palletIcon from "../../assets/icons/Pallet.svg";
import frame from "../../assets/icons/Frame 64.svg";
import Xcover from "../../assets/icons/Xcover.svg";
import knownShipper from "../../assets/icons/known shipper.svg";
import portIcon from "../../assets/icons/Port.svg";
import planeIcon from "../../assets/icons/Plane icon.svg";

const CheckOut = () => {
  return (
    <React.Fragment>
      <div className=" py-10">
        <div className="container">
          <div className=" flex flex-col items-center justify-between gap-5 lg:flex-row lg:items-start xl:justify-center">
            <div className=" w-full lg:max-w-[600px] xl:max-w-[900px]">
              {/* Booking Summary card */}
              <div className=" rounded-2xl bg-white px-6 py-7">
                <h2 className=" mb-20 text-center text-[23px] font-bold sm:text-left">
                  Booking summary
                </h2>
                <div className=" relative flex items-center justify-between">
                  <div className=" absolute left-24 top-3 h-[2px] bg-black sm:w-[350px] md:w-[460px] lg:w-[350px] xl:w-[650px]"></div>

                  <div className=" absolute left-[43%] top-[-40%] flex flex-col items-center justify-center sm:left-[48%]">
                    <p className=" text-[13px] font-semibold">Express</p>
                    <img width={30} src={planeIcon} alt="Airplane Icon" />
                  </div>

                  <div className=" flex flex-col items-center justify-center">
                    <img
                      className=" mb-5"
                      width={35}
                      src={portIcon}
                      alt="Port"
                    />
                    <p className=" font-semibold sm:text-[19px]">Delhi,</p>
                    <p className=" font-semibold sm:text-[19px]">
                      110003 India
                    </p>
                  </div>

                  <div className=" flex flex-col items-center justify-center">
                    <img
                      className=" mb-5"
                      width={35}
                      src={portIcon}
                      alt="Port"
                    />
                    <p className=" font-semibold sm:text-[19px]">Shanghai</p>
                    <p className=" font-semibold sm:text-[19px]">
                      200080, China
                    </p>
                  </div>
                </div>
              </div>

              <div className=" mt-3 flex flex-col gap-3 sm:flex-row">
                {/* Total Weight/Volume card */}
                <div className=" flex w-full max-w-[232px] flex-col items-center justify-center self-center rounded-2xl bg-white px-6 py-4">
                  <h2 className=" mb-4 text-center text-[18px] font-semibold text-[#5C5C5C]">
                    Total Weight/Volume
                  </h2>
                  <img
                    width={65}
                    src={weightmeterIcon}
                    alt="weight meter icon"
                  />
                  <p className=" mt-4 text-[19px] font-bold">114.21KG</p>
                </div>

                {/* Load card */}
                <div className=" flex w-full flex-col items-center justify-between rounded-2xl bg-white px-6 py-4">
                  <h2 className=" self-start text-[19px] font-semibold text-[#5C5C5C]">
                    Load
                  </h2>
                  <div className=" flex items-center justify-center gap-12">
                    <p className="text-[24px] font-bold">1 X</p>
                    <div className=" flex flex-col items-center justify-center">
                      <img width={46} src={palletIcon} alt="Pallet Icon" />
                      <p className=" mt-2 font-bold">Pallets</p>
                    </div>
                  </div>
                  <p>230 X 140 X 120 CM</p>
                </div>
              </div>

              <div className=" mt-3 flex flex-col gap-3 sm:flex-row">
                {/* Seller card */}
                <div className=" flex-1 rounded-2xl bg-white px-6 pb-12 pt-7">
                  <h2 className=" mb-9 text-[19px] font-semibold text-[#5C5C5C]">
                    <span className=" font-normal">Seller</span> : Primetime
                    Worldwide
                  </h2>
                  <div className=" flex items-center justify-center">
                    <img width={140} src={frame} alt="" />
                  </div>
                </div>

                {/* Insurance card */}
                <div className=" flex-1 rounded-2xl bg-white px-6 pb-12 pt-7">
                  <h2 className=" mb-9 text-[19px] font-semibold text-[#5C5C5C]">
                    <span className=" font-normal">Insurance</span> : Xcover.com
                  </h2>
                  <div className=" flex items-center justify-center">
                    <img width={220} src={Xcover} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Side Bill */}
            <div className="w-full max-w-[500px] rounded-2xl bg-white px-9 pb-8 pt-10 sm:max-h-[576px] lg:max-w-[310px]">
              <div className=" mb-9 flex items-center gap-5">
                <h2 className=" text-[20px] font-bold">Price details</h2>
                <div className=" w-full max-w-[105px]">
                  <img src={knownShipper} alt="" />
                </div>
              </div>

              <div className=" flex items-center justify-between border-b-[1px] border-b-[#B3B3B380] pb-5">
                <p>Seller’s Quote</p>
                <p>$ 3,659.25</p>
              </div>

              <div className="border-b-[1px] border-b-[#B3B3B380] py-6">
                <div className=" mb-4 flex items-center justify-between">
                  <p>Duties and taxes</p>
                  <p>Not Included</p>
                </div>

                <div className=" flex justify-between">
                  <p>
                    <span>Insurance</span>
                    <br />
                    <span>Based on the items cost</span>
                  </p>
                  <p>$323.40</p>
                </div>
              </div>

              <div className="border-b-[1px] border-b-[#B3B3B380] py-6">
                <div className=" mb-4">
                  <p>
                    Add a <span className=" text-[#6F57E9]">promo code</span>
                  </p>
                </div>

                <div className=" flex justify-between">
                  <p>Platform fee</p>
                  <p>$119.48</p>
                </div>
              </div>

              <div className=" flex items-center justify-between pb-3 pt-6 text-[28px] font-bold">
                <h4>Total:</h4>
                <p>$ 4,102.13</p>
              </div>

              <button className=" w-full rounded-2xl bg-[#9747FF] py-3 text-[23px] text-white hover:bg-[#592c94]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckOut;
