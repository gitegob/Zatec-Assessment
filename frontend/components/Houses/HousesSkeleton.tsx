import {HouseSkeleton} from "./HouseSkeleton";

export const HousesSkeleton = ({number = 10}: { number?: number }) => {
  return (
    <div>
      <div className="animate-pulse">
        {Array(number)
          .fill("i")
          ?.map((h, i) => (
            <HouseSkeleton key={i}/>
          ))}
      </div>
    </div>
  );
};
