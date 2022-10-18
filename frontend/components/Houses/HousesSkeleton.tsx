import { HouseSkeleton } from "./HouseSkeleton";

export const HousesSkeleton = ({
  numberOfLines = 10,
}: {
  numberOfLines?: number;
}) => {
  return (
    <div>
      <div className="mt-8 animate-pulse">
        {Array(numberOfLines)
          .fill("i")
          ?.map((h, i) => (
            <HouseSkeleton key={i} />
          ))}
      </div>
    </div>
  );
};
