import React from "react";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className=" max-w-[332px] rounded-2xl bg-white px-6 py-7 shadow-customServiceCard">
      <div className=" flex items-center gap-[30px] border-b-[1px] border-[#9E9E9E] pb-5">
        <img width={28} src={icon} alt="Ship Icon" />
        <h4 className=" text-[20px] font-medium">{title}</h4>
      </div>
      <p className=" pt-5 font-medium text-[#535353]">{description}</p>
    </div>
  );
};

export default ServicesCard;
