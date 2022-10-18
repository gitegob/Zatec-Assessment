import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";
import { HousesSkeleton } from "../../components/Houses/HousesSkeleton";
import { MainContent } from "../../components/MainContent";
import { RightCol } from "../../components/RightCol";
import { useGetHouse } from "../../hooks/use-get-houses";

const HouseDetailsPage: NextPage = () => {
  const router = useRouter();
  const { state, setstate } = useGetHouse(router.query?.id as string);

  return (
    <div>
      <Head>
        <title>Houses in GOT</title>
        <meta
          name="description"
          content="Search and find out more about houses in game of thrones"
        />
        <link rel="icon" href="/gotlogo.png" />
      </Head>
      <Header />
      <main className="flex justify-center">
        <MainContent>
          <div className="flex mt-2 justify-center">
            <RightCol>
              {state.loading ? (
                <HousesSkeleton numberOfLines={5} />
              ) : (
                <div className="border-gray-100 border-[1px] rounded-md shadow-sm my-4 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-semibold text-[#5E419A] tracking-wider text-base">
                          {state.house?.name}
                        </div>
                        <div className="text-gray-500 font-light">
                          {state.house?.region}
                        </div>
                      </div>
                    </div>
                    {/* <div className="cursor-pointer">
          {showDetails ? <BsChevronContract /> : <BsChevronExpand />}
        </div> */}
                  </div>
                  <div
                    className={`transition-height ease-in-out duration-500 ml-12 text-sm border-t-gray-100 py-4 border-t-[1px]`}
                  >
                    <div className="flex justify-start py-2">
                      <p className="text-gray-800 font-bold w-1/5">
                        Founded:&nbsp;
                      </p>
                      <p className="w-4/5 text-gray-500">
                        {" "}
                        {state.house?.founded || "N/A"}
                      </p>
                    </div>
                    <div className="flex justify-start py-2">
                      <p className="text-gray-800 font-bold w-1/5">
                        Coat of arms:&nbsp;
                      </p>
                      <p className="w-4/5 text-gray-500">
                        {state.house?.coatOfArms || "N/A"}
                      </p>
                    </div>
                    <div className="flex justify-start py-2">
                      <p className="text-gray-800 font-bold w-1/5">
                        Words:&nbsp;
                      </p>
                      <p className="w-4/5 text-gray-500">
                        {" "}
                        {state.house?.words || "N/A"}
                      </p>
                    </div>
                    <div className="flex justify-start py-2">
                      <p className="text-gray-800 font-bold w-1/5">
                        Titles:&nbsp;
                      </p>
                      <p className="w-4/5 text-gray-500">
                        {" "}
                        {state.house?.titles?.join(", ") || "N/A"}
                      </p>
                    </div>
                    <div className="flex justify-start py-2">
                      <p className="text-gray-800 font-bold w-1/5">
                        Seats:&nbsp;
                      </p>
                      <p className="w-4/5 text-gray-500">
                        {" "}
                        {state.house?.seats?.join(", ") || "N/A"}
                      </p>
                    </div>
                    <div className="flex justify-start py-2">
                      <p className="text-gray-800 font-bold w-1/5">
                        Ancestral weapons:&nbsp;
                      </p>
                      <p className="w-4/5 text-gray-500">
                        {" "}
                        {state.house?.ancestralWeapons?.join(", ") || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </RightCol>
          </div>
        </MainContent>
      </main>
    </div>
  );
};
export default HouseDetailsPage;
