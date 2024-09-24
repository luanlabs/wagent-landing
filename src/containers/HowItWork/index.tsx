import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";

import planet from "public/images/how-it-work/Planet.svg";
import legalLogo from "public/images/how-it-work/legal.svg";
import br from "public/images/how-it-work/Group1000004656.svg";
import dataLogo from "public/images/how-it-work/data-translate.svg";

const HowItWork = () => {
  return (
    <div className="w-full flex-col justify-center items-center relative">
      <div className="flex-col justify-center items-center space-y-4 w-[50%] bigScreen:w-[45%] desktop:w-[55%] mobile:w-[100%] m-auto px-5">
        <div className="w-[103px] m-auto">
          {
            //           <Button variant="simpleWhiteStatic" text="How it works" />
          }
        </div>
        <h1 className="text-center text-[#30382E] text-[40px] mobile:text-[20px] font-bold">
          Secure and Scalable Solution
        </h1>
        <p className="text-center text-[#6A786B] text-base">
          With Wagent, merchants benefit from the security of blockchain
          technology and the scalability of the Stellar network. Whether you're
          a small business or a large enterprise, Wagent’s infrastructure is
          designed to handle high volumes of transactions efficiently.
        </p>
      </div>

      <div className="flex-col items-start mt-[183px] mobile:mt-[81px] w-full space-y-4 z-50 mobile:px-5">
        <div className="w-[103px] z-50 mobile:m-auto">
          <Button variant="simpleWhiteStatic" text="How it works" />
        </div>

        <h1 className=" text-[#30382E] text-[40px] mobile:text-[20px] mobile:text-center font-bold w-[60%] mobile:w-full bigScreen:w-[45%] leading-[49.6px] mobile:leading-[27px] z-50">
          Key Features and Benefits
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
            title="Streamlined Payment Options"
            text="Wagent gives buyers flexibility by offering multiple payment options, including direct payments, streaming, and vesting. Merchants can boost revenue by catering to diverse buyer preferences, enhancing growth potential and global reach."
            icon={dataLogo}
          />

          <img
            src={br}
            alt="space"
            className="mx-[100px] mobile:mx-0 mobile:rotate-90"
            draggable={false}
          />

          <FeatureCard
            title="Automated Token Conversion"
            text="Wagent automatically converts buyers’ payments into the merchant’s preferred currency. For example, if a buyer uses XLM, Wagent swaps it into the merchant’s chosen token seamlessly, ensuring a smooth experience for both buyers and sellers."
            icon={legalLogo}
          />
        </div>

        <div className="flex items-center justify-center w-full mobile:flex-col mobile:-space-y-[50px]">
          <FeatureCard
            title="Low Fees, High Efficiency"
            text="Built on Stellar, Wagent capitalizes on its low-fee, fast transaction capabilities, saving buyers and merchants from the high fees imposed by traditional payment gateways. With transaction fees lower than 1%, Wagent provides cost-effective solutions for businesses of all sizes."
            icon={dataLogo}
          />

          <img
            src={br}
            alt="space"
            className="mx-[100px] mobile:mx-0 mobile:rotate-90 mobile:my-0"
            draggable={false}
          />

          <FeatureCard
            title="Easy Integration with E-commerce Platforms"
            text="Wagent offers plugins for popular platforms like WordPress, Shopify, PrestaShop, Joomla, Magento, and OpenCart. Merchants can easily integrate Wagent into their existing systems, making the setup process hassle-free and immediate."
            icon={legalLogo}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 mt-[200px] mobile:mt-[99px] w-[50%] bigScreen:w-[45%] desktop:w-[55%] mobile:w-[100%] m-auto px-5">
        <div className="w-[103px]">
          <Button variant="simpleWhiteStatic" text="Stellar / Soroban" />
        </div>
        <h1 className="text-center text-[#30382E] text-[40px] mobile:text-[20px] font-bold">
          Powered by Soroban
        </h1>
        <p className="text-center text-[#6A786B] text-base">
          Wagent ensures trustless transactions by utilizing Soroban smart
          contracts, automating the payment process and minimizing human error.
          Smart contracts handle everything from token swaps to transaction
          execution, ensuring security and transparency.
        </p>
      </div>
    </div>
  );
};

export default HowItWork;
