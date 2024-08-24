import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';

import planet from 'public/images/how-it-work/Planet.svg';
import legalLogo from 'public/images/how-it-work/legal.svg';
import br from 'public/images/how-it-work/Group1000004656.svg';
import dataLogo from 'public/images/how-it-work/data-translate.svg';

const HowItWork = () => {
  return (
    <div className="w-full flex-col justify-center items-center relative">
      <div className="flex-col justify-center items-center space-y-4 w-[50%] bigScreen:w-[45%] desktop:w-[55%] mobile:w-[100%] m-auto px-5">
        <div className="w-[103px] m-auto">
          <Button variant="simpleWhiteStatic" text="How it works" />
        </div>
        <h1 className="text-center text-[#30382E] text-[40px] mobile:text-[20px] font-bold">
          We’re most professional team that you ever meet!
        </h1>
        <p className="text-center text-[#6A786B] text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>

      <div className="flex-col items-start mt-[183px] mobile:mt-[81px] w-full space-y-4 z-50 mobile:px-5">
        <div className="w-[103px] z-50 mobile:m-auto">
          <Button variant="simpleWhiteStatic" text="How it works" />
        </div>

        <h1 className=" text-[#30382E] text-[40px] mobile:text-[20px] mobile:text-center font-bold w-[60%] mobile:w-full bigScreen:w-[45%] leading-[49.6px] mobile:leading-[27px] z-50">
          We’re most professional team that you ever meet!
        </h1>
        <img
          src={planet}
          alt="a"
          className="absolute top-[15%] -left-[17%] -z-50 opacity-10 bigScreen:top-[25%] bigScreen:-left-[7%]"
          draggable={false}
        />
      </div>

      <div className="mt-[73px] mobile:mt-[60px] w-full space-y-[74px] mobile:space-y-10 px-[48px] mobile:px-0">
        <div className="flex items-center justify-between w-full mobile:flex-col mobile:-space-y-[50px]">
          <FeatureCard
            title="Earn As Your Network Trade"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley"
            icon={dataLogo}
          />

          <img
            src={br}
            alt="space"
            className="mx-[100px] mobile:mx-0 mobile:rotate-90"
            draggable={false}
          />

          <FeatureCard
            title="Earn As Your Network Trade"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley"
            icon={legalLogo}
          />
        </div>

        <div className="flex items-center justify-center w-full mobile:flex-col mobile:-space-y-[50px]">
          <FeatureCard
            title="Earn As Your Network Trade"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley"
            icon={dataLogo}
          />

          <img
            src={br}
            alt="space"
            className="mx-[100px] mobile:mx-0 mobile:rotate-90 mobile:my-0"
            draggable={false}
          />

          <FeatureCard
            title="Earn As Your Network Trade"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley"
            icon={legalLogo}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 mt-[200px] mobile:mt-[99px] w-[50%] bigScreen:w-[45%] desktop:w-[55%] mobile:w-[100%] m-auto px-5">
        <div className="w-[103px]">
          <Button variant="simpleWhiteStatic" text="How it works" />
        </div>
        <h1 className="text-center text-[#30382E] text-[40px] mobile:text-[20px] font-bold">
          We’re most professional team that you ever meet!
        </h1>
        <p className="text-center text-[#6A786B] text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>
    </div>
  );
};

export default HowItWork;
