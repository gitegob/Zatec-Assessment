import { HouseSkeleton } from "./HouseSkeleton";

export const HousesSkeleton = () => {
  return (
    <div>
      <div className="mt-8 animate-pulse">
        {Array(7)
          .fill("i")
          ?.map((h, i) => (
            <HouseSkeleton key={i} />
          ))}
      </div>
    </div>
  );
};
