export const TourCardSkeleton = () => {
  return (
    <div className="flex-1 overflow-hidden rounded-md bg-white">
      <div className="aspect-3/2 overflow-hidden rounded-md md:aspect-[271/237]">
        <div className="h-full animate-pulse rounded-md bg-gray-300"></div>
      </div>
      <div className="mt-4 p-2.5">
        <div className="mb-2 space-y-1">
          <div className="h-5 animate-pulse rounded-md bg-gray-300"></div>
          <div className="mx-auto h-5 w-3/4 animate-pulse rounded-md bg-gray-300"></div>
        </div>
        <div className="mb-2.5 flex flex-col gap-2">
          <div className="h-4 w-1/2 animate-pulse rounded-md bg-gray-300"></div>
          <div className="h-4 w-2/3 animate-pulse rounded-md bg-gray-300"></div>
          <div className="h-4 w-1/2 animate-pulse rounded-md bg-gray-300"></div>
        </div>
        <div className="flex h-10 items-center justify-between rounded-4xl border border-gray-300">
          <div className="ml-3 h-6 w-28 animate-pulse rounded-md bg-gray-300 font-semibold"></div>
          <div className="h-10 w-[105px] animate-pulse rounded-4xl bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
