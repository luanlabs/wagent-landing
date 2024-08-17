import Button from '@components/Button';

import Box from '@components/Box';

import mock from '@images/15.png';
import mockMobileSize from '@images/mockupMobileSize.png';

const IntroSection = () => {
  return (
    <section className="flex w-full z-40">
      <div className="w-[80%] mobile:w-full mobile:m-auto mobile:flex-col mobile:justify-center mobile:items-center">
        <div className=" w-[140px] mobile:m-auto bg-white border-[1.5px] border-[#F1F1F1] py-[6px] shadow-white-shadow font-medium h-[31px] flex justify-center items-center rounded-full text-[14px] select-none">
          We are incredible
        </div>
        <h1 className="text-[50px] mobile:text-[26px] text-[#30382E] font-bold mt-3 w-full mobile:text-center mobile:px-1">
          Plug-and-play integration:
          <br />
          <span className="text-[#00C17E]">Power up</span> your platforms
        </h1>
        <p className="text-[#6A786B] mobile:text-[14px] text-base w-[55%] bigScreen:w-[40%] mt-4 mobile:text-center mobile:w-full mobile:px-5">
          Take control of your shop transactions effortlessly with our sleek,
          feature-rich merchant dashboard. Feel the ...
        </p>
        <div className="flex space-x-2 mt-[24px] w-full mobile:justify-center">
          <Button
            variant="simpleDark"
            text="Launch app"
            className="!w-[110px]"
          />
          <Button
            variant="simpleWhite"
            text="Learn more"
            className="!w-[131px]"
          />
        </div>

        <div className="mt-[150px] mobile:mt-[45px] flex items-center mobile:flex-col">
          <div>
            <img
              src={mockMobileSize}
              alt="an"
              width={1400}
              draggable={false}
              className="desktop:hidden select-none"
            />
          </div>
          <div className="flex mobile:flex-col mobile:space-y-2 w-full space-x-[32px] mobile:space-x-0 mobile:mt-[35px] mobile:px-6">
            <div className="flex mobile:w-full mobile:space-x-2 space-x-[32px]">
              <Box
                title="Vesting"
                subTitle="description"
                icon="vesting"
                className="mobile:!w-[50%]"
              />
              <Box
                title="Single"
                subTitle="description"
                icon="single"
                className="mobile:!w-[50%]"
              />
            </div>

            <div className="mobile:w-full">
              <Box
                title="Stream"
                subTitle="description"
                icon="stream"
                className="mobile:!w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={mock}
          alt="an"
          className="absolute top-[-40px] right-0 mobile:hidden desktopFix:right-[-120px] select-none"
          draggable={false}
          width={1000}
        />
      </div>
    </section>
  );
};

export default IntroSection;