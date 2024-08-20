import Button from '@components/Button';

import paymentShot from '@images/who-are-we/Widget-title.svg';
import paymentShotMobile from '@images/who-are-we/Widget-title-mobile.svg';
import vector from '@images/who-are-we/Vector(2).svg';
import vectorVertical from '@images/who-are-we/Vector(3).svg';

import chartShot from '@images/who-are-we/Protips.svg';
import chartShotMobile from '@images/who-are-we/Protips(1).svg';

const HowAreWe = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden space-y-[58px]">
      <div className="flex flex-col items-center justify-center bg-[#F7FAFA] rounded-[20px] relative -z-0 w-[90%] bigScreen:w-full overflow-hidden">
        <div className="w-[103px] mt-[68px]">
          <Button variant="simpleWhiteStatic" text="How it works" />
        </div>

        <h1 className="text-center text-[#30382E] text-[30px] mobile:text-[20px] font-bold my-4 w-[65%] bigScreen:w-[45%] mobile:w-[90%] z-50">
          Monitor every detail and event. Just one click away from seeing all
          the details
        </h1>
        <p className="text-center text-[#6A786B] text-base mb-[47px] w-[35%] bigScreen:w-[25%] mobile:w-[90%]">
          You may track the status of stream transactions and determine the time
          they require to cancel.
        </p>

        <img src={paymentShot} alt="payment" className="mobile:hidden" />
        <img
          src={paymentShotMobile}
          alt="payment-mobile"
          className="desktop:hidden"
        />

        <img
          src={vector}
          alt="vector"
          className="-z-20 absolute top-0 left-0 right-0 w-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center bg-[#F7FAFA] rounded-[20px] relative -z-0 w-[90%] bigScreen:w-full overflow-hidden">
        <div className="w-[103px] mt-[68px]">
          <Button variant="simpleWhiteStatic" text="Who are we?" />
        </div>

        <h1 className="text-center text-[#30382E] text-[30px] mobile:text-[20px] font-bold my-4 w-[65%] bigScreen:w-[45%] mobile:w-[90%] z-50">
          Revenue insights:
          <br />
          See your earnings at a glance
        </h1>
        <p className="text-center text-[#6A786B] text-base mobile:text-[14px] mb-[47px] w-[35%] bigScreen:w-[25%] mobile:w-[90%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <img
          src={chartShot}
          alt="payment"
          className="mobile:hidden mb-[58px] mt-[80px] shadow-image-shadow border-1 border-[#E4E7EC]"
        />
        <img
          src={chartShotMobile}
          alt="payment-mobile"
          className="desktop:hidden shadow-image-shadow border-1 border-[#E4E7EC]"
        />

        <img
          src={vectorVertical}
          alt="vector"
          className="-z-20 absolute bottom-0 left-0 right-0 w-full"
        />
      </div>
    </div>
  );
};

export default HowAreWe;
