import React from "react";
import ServicesCard from "./ServicesCard";
import shipblueIcon from "../../assets/icons/shipblue.svg";
import briefcaseIcon from "../../assets/icons/briefcase.svg";
import globalsearchIcon from "../../assets/icons/globalsearch.svg";
import i24supportIcon from "../../assets/icons/i24support.svg";

const Services = () => {
  return (
    <div className=" relative">
      <div className=" absolute bottom-[-220px] left-0 z-20 h-[138px] w-full bg-wave1 bg-repeat-x "></div>
      <div className=" absolute bottom-[-220px] left-0 z-10 h-[148px] w-full bg-wave2 bg-repeat-x "></div>

      <div className="container">
        <h3 className=" mb-10 text-center text-[32px] font-semibold">
          Services
        </h3>

        <div className=" mb-[220px] grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-4">
          <ServicesCard
            icon={shipblueIcon}
            title="Freight Services"
            description="Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door."
          />

          <ServicesCard
            icon={briefcaseIcon}
            title="Business Services"
            description="We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level."
          />

          <ServicesCard
            icon={globalsearchIcon}
            title="Shipping & Logistics"
            description="Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs."
          />

          <ServicesCard
            icon={i24supportIcon}
            title="24/7 Support"
            description="Receive support from our experts all over the world at every stage of the process, 24/7."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
