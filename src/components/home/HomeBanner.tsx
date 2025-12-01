import { FormSearch } from "./FormSearch";

export const HomeBanner = () => {
  return (
    <section className="bg-[url(/assets/images/bg-section-1.jpg)] bg-cover bg-center bg-no-repeat py-[107px]">
      <div className="container">
        <div className="mx-auto w-full lg:w-[768px]">
          <h1 className="text-travel-primary mb-5 text-center text-[28px] font-bold md:text-[32px] lg:text-4xl">
            Du lịch Châu Á - Khám phá Mỹ, Úc, Âu Đi nơi đâu bạn muốn
          </h1>
          <p className="text-travel-secondary mb-[30px] text-center text-sm font-normal lg:text-[16px]">
            Trải nghiệm hành trình đáng nhớ cùng chúng tôi – khám phá văn hoá,
            ẩm thực và cảnh đẹp khắp năm châu, mang đến kỳ nghỉ trọn vẹn cho bạn
            và gia đình.
          </p>
          <FormSearch />
        </div>
      </div>
    </section>
  );
};
