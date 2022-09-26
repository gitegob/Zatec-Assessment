export const HouseSkeleton = () => {
  return (
    <div className="animate-pulse rounded-md shadow-md my-2 p-4 bg-[#bdb4c5] h-20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex justify-between">
          <div>
            <div className=" bg-[#b398eb] w-2/4"></div>
            <div className="bg-[#b398eb] w-1/4"></div>
          </div>
        </div>
        <div className=" bg-[#b398eb]"></div>
      </div>
    </div>
  );
};
