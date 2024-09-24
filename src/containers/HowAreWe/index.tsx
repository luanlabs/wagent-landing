import chartShot from "public/images/who-are-we/Protips.svg";
import vector from "public/images/who-are-we/Vector(2).svg";
import vectorVertical from "public/images/who-are-we/Vector(3).svg";
import paymentShot from "public/images/who-are-we/Widget-title.svg";
import chartShotMobile from "public/images/who-are-we/Protips(1).svg";
import paymentShotMobile from "public/images/who-are-we/Widget-title-mobile.svg";

const HowAreWe = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden space-y-[58px] mobile:space-y-[35px]">
      <div className="flex flex-col items-center justify-center bg-[#F7FAFA] rounded-[20px] relative -z-0 w-[90%] bigScreen:w-full overflow-hidden">
        <h1 className="text-center text-[#30382E] text-[30px] mobile:text-[20px] font-bold my-4 w-[65%] bigScreen:w-[45%] mobile:w-[90%] z-50">
          Monitor every transaction. Just one click away from seeing all the
          details
        </h1>
        <p className="text-center text-[#6A786B] text-base mb-[47px] w-[35%] bigScreen:w-[25%] mobile:w-[90%]">
          Track and manage all your transactions effortlessly with Wagent's
          user-friendly dashboard, providing real-time insights and detailed
          history.
        </p>

        <img
          src={paymentShot}
          alt="payment"
          className="mobile:hidden"
          draggable={false}
        />
        <img
          src={paymentShotMobile}
          alt="payment-mobile"
          className="desktop:hidden"
          draggable={false}
        />

        <img
          src={vector}
          alt="vector"
          className="-z-20 absolute top-0 left-0 right-0 w-full"
          draggable={false}
        />
      </div>

      <div className="flex flex-col items-center justify-center bg-[#F7FAFA] rounded-[20px] relative -z-0 w-[90%] bigScreen:w-full overflow-hidden">
        <h1 className="text-center text-[#30382E] text-[30px] mobile:text-[20px] font-bold my-4 w-[65%] bigScreen:w-[45%] mobile:w-[90%] z-50">
          Revenue insights:
          <br />
          See your earnings at a glance
        </h1>
        <p className="text-center text-[#6A786B] text-base mobile:text-[14px] mb-[47px] w-[35%] bigScreen:w-[25%] mobile:w-[90%]">
          View and analyze your earnings over customizable time periods, gaining
          valuable insights into your income trends."
        </p>

        <img
          src={chartShot}
          alt="payment"
          className="mobile:hidden mb-[58px] mt-[80px] shadow-image-shadow border-1 border-[#E4E7EC]"
          draggable={false}
        />
        <img
          src={chartShotMobile}
          alt="payment-mobile"
          className="desktop:hidden shadow-image-shadow border-1 border-[#E4E7EC]"
          draggable={false}
        />

        <img
          src={vectorVertical}
          alt="vector"
          className="-z-20 absolute bottom-0 left-0 right-0 w-full"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default HowAreWe;
