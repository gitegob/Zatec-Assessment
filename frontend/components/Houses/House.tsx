import {useRouter} from "next/router";
import {PropsWithChildren} from "react";
import {BsClock} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";

export const House = ({house}: PropsWithChildren & { house: any }) => {
  const router = useRouter();
  return (
    <div className="bg-dark-gray p-5 rounded-md">
      <div className="flex justify-between mb-[9px]">
        <p className="text-white text-lg font-bold">{house.name}</p>
        <button
          className="py-1 px-3 text-light-gray border-[1px] border-light-gray rounded-full text-xs"
          onClick={() =>
            router.push(
              `/houses/${
                house.url?.split("/")[house.url?.split("/")?.length - 1]
              }`
            )
          }
        >
          Details
        </button>
      </div>
      <div className="flex items-center text-light-gray mb-[6px]">
        <MdLocationOn/>
        <p className="text-xs mx-1">{house?.region || "N/A"}</p>
      </div>
      <div className="flex items-center text-light-gray">
        <BsClock/>
        <p className="text-xs mx-1">{house?.founded || "N/A"}</p>
      </div>
    </div>
  );
};
