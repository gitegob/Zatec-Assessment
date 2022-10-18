import Image from "next/image";
import {ChangeEvent} from "react";
import {House} from "./House";
import {useGetHouses} from "../../hooks/use-get-houses";
import {HousesSkeleton} from "./HousesSkeleton";

export const Houses = () => {
  const {state, setstate} = useGetHouses();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({...state, search: e.target.value});
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Houses ({state.houses?.length})</p>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="bg-[#FCF9FF] p-4 rounded-md w-1/3 block"
          onChange={handleChange}
        />
      </div>

      {state.loading ? (
        <HousesSkeleton/>
      ) : state.houses?.length ? (
        <div className="mt-8">
          {state.houses?.map((h, i) => (
            <House house={h} key={i}/>
          ))}
        </div>
      ) : (
        <div className="mt-20 flex justify-between items-center flex-col">
          <Image src={"/no_data.svg"} alt="No Data" height={200} width={200}/>
          <p className="mt-8">No houses found</p>
        </div>
      )}
    </div>
  );
};
