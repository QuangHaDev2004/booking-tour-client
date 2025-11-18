/* eslint-disable @next/next/no-img-element */
export const ImageBanner = ({ src }: { src: string }) => {
  return (
    <div className="pb-[45px] sm:pb-[60px]">
      <div className="container">
        <div className="overflow-hidden rounded-[10px]">
          <img src={src} alt="" className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
};
