import {NextPage} from "next";
import {ChangeEvent} from "react";
import {MdOutlineSearch} from "react-icons/md";
import {Banner} from "../../components/Banner/Banner";
import {House} from "../../components/Houses/House";
import {HouseSkeleton} from "../../components/Houses/HouseSkeleton";
import {MetaHead} from "../../components/MetaHead/MetaHead";
import {useGetHouses} from "../../hooks/use-get-houses";

const HousesPage: NextPage = () => {
  const {state, setstate} = useGetHouses();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({...state, search: e.target.value});
  };
  return (
    <>
      <MetaHead/>
      <main className=" bg-black min-h-screen">
        <div className="h-[500px] bg-[url('/images/bg_image.jpg')] bg-cover flex">
          <div className="bg-black w-full h-full flex flex-col justify-start items-center opacity-80">
            <div className="my-6">
              <Banner/>
            </div>
            <p className="text-white text-xl w-[500px] text-center my-10 font-light">
              “When you play the game of thrones, you win or you die. There is
              no middle ground.” - <span className="font-bold">Cersei</span>
            </p>
            <a
              href="https://web.fmovies.to/series/game-of-thrones-92p7q"
              target="__blank"
              className="bg-transparent border-[1px] text-purple-50 py-3 rounded-full text-xl px-10 mb-36"
            >
              Watch now
            </a>
            <div className="w-1/4 flex items-center border-[1px] rounded-full overflow-hidden">
              <div className="z-30 pl-2">
                <MdOutlineSearch className="text-light-gray" size={30}/>
              </div>
              <input
                type="search"
                id="search"
                placeholder="search for one of the great houses..."
                className="block p-5 font-light bg-black flex-1 text-gray-300 outline-none"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
          <div className="text-white flex items-center">
            <p className="text-3xl p-5">Houses</p>
            <div className="bg-gold w-fit h-fit rounded-full py-1 px-2 ">
              {state.houses?.length}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[14px]">
            {state.loading
              ? Array(4)
                .fill("i")
                .map((el, i) => <HouseSkeleton key={i}/>)
              : state?.houses.map((house, i) => (
                <House key={i} house={house}/>
              ))}
          </div>
        </div>
        <p className="text-center text-dark-gray mt-24 p-5 text-lg">
          By Brian Gitego
        </p>
      </main>
    </>
  );
};

export interface IApiResponseProps {
  data?: any;
}

export default HousesPage;
