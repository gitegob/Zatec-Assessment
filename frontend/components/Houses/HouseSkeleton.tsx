export const HouseSkeleton = ({heightInPx}: { heightInPx?: number }) => {
  return (
    <div
      className={`bg-dark-gray p-5 rounded-md ${
        heightInPx ? `h-[${heightInPx}px]` : `h-48`
      } animate-pulse w-full`}
    ></div>
  );
};
