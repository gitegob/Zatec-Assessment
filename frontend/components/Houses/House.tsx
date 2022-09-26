import { useState } from "react";
import { BsChevronContract, BsChevronExpand } from "react-icons/bs";
export const House = ({ house }: { house: any }) => {
  const [showDetails, setshowDetails] = useState(false);
  return (
    <div className="border-gray-100 border-[1px] rounded-md shadow-md my-2 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex justify-between">
          <div>
            <div className="font-semibold text-[#5E419A] tracking-wider text-base">
              {house.name}
            </div>
            <div className="text-gray-500 font-light">{house.region}</div>
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setshowDetails(!showDetails)}
        >
          {showDetails ? <BsChevronContract /> : <BsChevronExpand />}
        </div>
      </div>
      <div
        className={`transition-height ease-in-out duration-500 ${
          showDetails ? "h-fit" : "h-0"
        }`}
        hidden={!showDetails}
      >
        {house.coatOfArms || "N/A"}
      </div>
    </div>
  );
};
