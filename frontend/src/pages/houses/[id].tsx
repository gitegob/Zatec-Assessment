import type {NextPage} from "next";
import {useRouter} from "next/router";
import {BsClock} from "react-icons/bs";
import {MdArrowBack, MdLocationOn} from "react-icons/md";
import {Banner} from "../../components/Banner/Banner";
import {HouseSkeleton} from "../../components/Houses/HouseSkeleton";
import {MetaHead} from "../../components/MetaHead/MetaHead";
import {useGetHouse} from "../../hooks/use-get-houses";

const HouseDetailsPage: NextPage = () => {
    const router = useRouter();
    const {state} = useGetHouse(router.query?.id as string);

    return (
        <>
            <MetaHead/>
            <div
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)), url(/images/kings_landing.jpg)",
                }}
                className="min-h-screen bg-cover pt-10"
            >
                {/* Logo Banner */}
                <div className="mx-auto w-fit mb-40">
                    <Banner/>
                </div>
                {/* Main body */}
                <div className="text-white w-1/3 mx-auto">
                    {state.loading ? (
                        Array(3)
                            .fill("i")
                            .map((el, i) => <HouseSkeleton key={i}/>)
                    ) : (
                        <>
                            <div className="flex items-center mb-4">
                                <MdArrowBack size={50} onClick={() => router.push("/houses")}/>
                                <p className="text-3xl font-bold mx-10">{state.house?.name}</p>
                            </div>
                            <div className="flex justify-center items-center mb-32">
                                <div className="flex items-center mr-5">
                                    <MdLocationOn className="text-gold"/>
                                    <p className="text-sm mx-1 text-light-gray">
                                        {state.house?.region || "N/A"}
                                    </p>
                                </div>
                                <div className="flex items-center ml-5">
                                    <BsClock className="text-gold"/>
                                    <p className="text-sm mx-1 text-light-gray">
                                        {state.house?.founded || "N/A"}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-2xl font-bold mb-8">Details</p>
                                <div>
                                    <div className="flex justify-start py-2">
                                        <p className="text-light-gray w-1/5">Coat of arms:&nbsp;</p>
                                        <p className="w-4/5 text-white">
                                            {state.house?.coatOfArms || "N/A"}
                                        </p>
                                    </div>
                                    <div className="flex justify-start py-2">
                                        <p className="text-light-gray w-1/5">Words:&nbsp;</p>
                                        <p className="w-4/5 text-white">
                                            {" "}
                                            {state.house?.words || "N/A"}
                                        </p>
                                    </div>
                                    <div className="flex justify-start py-2">
                                        <p className="text-light-gray w-1/5">Titles:&nbsp;</p>
                                        <p className="w-4/5 text-white">
                                            {" "}
                                            {state.house?.titles?.join(", ") || "N/A"}
                                        </p>
                                    </div>
                                    <div className="flex justify-start py-2">
                                        <p className="text-light-gray w-1/5">Seats:&nbsp;</p>
                                        <p className="w-4/5 text-white">
                                            {" "}
                                            {state.house?.seats?.join(", ") || "N/A"}
                                        </p>
                                    </div>
                                    <div className="flex justify-start py-2">
                                        <p className="text-light-gray w-1/5">
                                            Ancestral weapons:&nbsp;
                                        </p>
                                        <p className="w-4/5 text-white">
                                            {" "}
                                            {state.house?.ancestralWeapons?.join(", ") || "N/A"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
export default HouseDetailsPage;
