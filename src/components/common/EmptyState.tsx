/* eslint-disable @next/next/no-img-element */
export const EmptyState = () => {
  return (
    <>
      <div className="flex items-center flex-col">
        <div className="w-full">
          <img src="/assets/images/img-empty.png" alt="Empty Image" className="w-1/2 h-auto mx-auto" />
        </div>
        <div className="text-2xl font-bold text-travel-primary mt-6 mb-3">
          Rất tiếc khi chúng tôi không tìm thấy tour bạn cần
        </div>
        <div className="text-sm text-travel-secondary italic font-normal">
          Thay đổi nội dung để tìm kiếm các tour tuyệt vời khác nhé!
        </div>
      </div>
    </>
  );
};
