import { CartContainer } from "./CartContainer";

export default function CartPage() {
  return (
    <>
      <div className="py-[45px] sm:py-[60px]">
        <div className="container">
          <CartContainer />
          {/* <div className="mx-auto w-full lg:w-[902px]">
            <CartList />
            <BookingForm />
          </div> */}
        </div>
      </div>
    </>
  );
}
