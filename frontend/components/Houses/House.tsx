import { useRouter } from "next/router";
import { PropsWithChildren, useState } from "react";
export const House = ({ house }: PropsWithChildren & { house: any }) => {
  const router = useRouter();
  const [showDetails, setshowDetails] = useState(false);
  return (
    <div className="border-gray-100 border-[1px] rounded-md shadow-sm my-4 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex justify-between">
          <div>
            <div className="font-semibold text-[#5E419A] tracking-wider text-base">
              {house.name}
            </div>
            <div className="text-gray-500 font-light">{house.region}</div>
          </div>
        </div>
        {/* <div className="cursor-pointer">
          {showDetails ? <BsChevronContract /> : <BsChevronExpand />}
        </div> */}
        <button
          className="py-3 px-5 bg-purple-200 rounded-md text-purple-500"
          onClick={() =>
            router.push(
              `/houses/${
                house.url?.split("/")[house.url?.split("/")?.length - 1]
              }`
            )
          }
        >
          View
        </button>
      </div>
      <div
        className={`transition-height ease-in-out duration-500 ${
          showDetails ? "h-fit" : "h-0"
        } ml-12 text-sm border-t-gray-100 py-4 border-t-[1px]`}
        hidden={!showDetails}
      >
        <div className="flex justify-start py-2">
          <p className="text-gray-800 font-bold w-1/5">Founded:&nbsp;</p>
          <p className="w-4/5 text-gray-500"> {house.founded || "N/A"}</p>
        </div>
        <div className="flex justify-start py-2">
          <p className="text-gray-800 font-bold w-1/5">Coat of arms:&nbsp;</p>
          <p className="w-4/5 text-gray-500">{house.coatOfArms || "N/A"}</p>
        </div>
        <div className="flex justify-start py-2">
          <p className="text-gray-800 font-bold w-1/5">Words:&nbsp;</p>
          <p className="w-4/5 text-gray-500"> {house.words || "N/A"}</p>
        </div>
        <div className="flex justify-start py-2">
          <p className="text-gray-800 font-bold w-1/5">Titles:&nbsp;</p>
          <p className="w-4/5 text-gray-500">
            {" "}
            {house.titles?.join(", ") || "N/A"}
          </p>
        </div>
        <div className="flex justify-start py-2">
          <p className="text-gray-800 font-bold w-1/5">Seats:&nbsp;</p>
          <p className="w-4/5 text-gray-500">
            {" "}
            {house.seats?.join(", ") || "N/A"}
          </p>
        </div>
        <div className="flex justify-start py-2">
          <p className="text-gray-800 font-bold w-1/5">
            Ancestral weapons:&nbsp;
          </p>
          <p className="w-4/5 text-gray-500">
            {" "}
            {house.ancestralWeapons?.join(", ") || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};
