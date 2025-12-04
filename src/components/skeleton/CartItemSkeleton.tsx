export const CartItemSkeleton = () => {
  return (
    <div className="border-travel-secondary/10 flex flex-wrap border-b border-dashed pb-4">
      <div className="mb-2.5 flex w-full flex-row-reverse items-center justify-between gap-9 lg:mr-2.5 lg:mb-0 lg:w-auto lg:flex-col lg:justify-start">
        <div className="h-2.5 w-2.5 animate-pulse bg-gray-200"></div>
        <div className="h-5 w-5 animate-pulse rounded-sm bg-gray-200" />
      </div>

      <div className="mb-2.5 flex items-start gap-2.5 sm:gap-4 lg:mb-0">
        <div className="border-travel-secondary/10 aspect-[118/100] w-[118px] overflow-hidden rounded-md border lg:aspect-[150/120] lg:w-[150px]">
          <div className="h-full w-full animate-pulse bg-gray-200" />
        </div>
        <div className="w-full flex-1 lg:w-[280px] lg:flex-none">
          <div className="mb-3 space-y-0.5">
            <div className="h-5 w-full animate-pulse bg-gray-200"></div>
            <div className="h-5 w-4/5 animate-pulse bg-gray-200"></div>
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <div className="h-5 w-3/4 animate-pulse bg-gray-200"></div>
            <div className="h-5 w-2/3 animate-pulse bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
