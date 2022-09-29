import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { House } from ".";
import { env } from "../../utils/env";
import { HousesSkeleton } from "./HousesSkeleton";

export const Houses = () => {
  const [state, setstate] = useState({
    houses: [],
    search: "",
    loading: false,
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      (async () => {
        if (state.search.length >= 5) await handleGetHouses(true);
        else if (state.search.length === 0 || state.search === null)
          await handleGetHouses(false);
      })();
    }, 500);
    return () => clearTimeout(timeout);
  }, [state.search]);

  const handleGetHouses = async (isSearching?: boolean) => {
    setstate({ ...state, loading: true });
    try {
      const response = await axios.get(
        isSearching
          ? `${env.apiUrl}/v1/houses?name=${state.search}`
          : `${env.apiUrl}/v1/houses`
      );
      setstate({ ...state, houses: response.data.payload, loading: false });
    } catch (error) {
      setstate({ ...state, loading: false });
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({ ...state, search: e.target.value });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Houses ({state.houses?.length})</p>
        <input
          type="search"
          name="search"
          id="date"
          placeholder="Search..."
          className="bg-[#FCF9FF] p-4 rounded-md w-1/3 block"
          onChange={handleChange}
        />
      </div>

      {state.loading ? (
        <HousesSkeleton />
      ) : state.houses?.length ? (
        <div className="mt-8">
          {state.houses?.map((h, i) => (
            <House house={h} key={i} />
          ))}
        </div>
      ) : (
        <div className="mt-20 flex justify-between items-center flex-col">
          <Image src={"/no_data.svg"} alt="No Data" height={200} width={200} />
          <p className="mt-8">No houses found</p>
        </div>
      )}
    </div>
  );
};
