import { BookingForm } from "./BookingForm";
import { CartDetail } from "./CartDetail";

export default function CartPage() {
  return (
    <>
      <div className="py-[45px] sm:py-[60px]">
        <div className="container">
          <div className="mx-auto w-full lg:w-[902px]">
            <CartDetail />
            <BookingForm />
          </div>
        </div>
      </div>
    </>
  );
}