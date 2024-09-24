import Button from "@/components/Button";

import { headerTabs } from "@/constants/headerLinks";

import armIcon from "public/images/footer/arm.svg";
import xLogo from "public/images/footer/X_logo.svg";
import wagentLogo from "public/images/footer/Group.svg";
import githubLogo from "public/images/footer/GitHub.svg";
import discordLogo from "public/images/footer/Discord.svg";
import wagentIcon from "public/images/footer/Artboard.svg";
import unlimitedIcon from "public/images/footer/Unlimited.svg";

const socialLogo = [discordLogo, xLogo, githubLogo];

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1D201D] rounded-[30px] overflow-hidden">
      <div className="mt-[109px] mb-[31px]">
        <h1 className="text-center text-[#fff] text-[36px] mobile:text-[28px] font-medium my-4 z-50 mobile:px-3">
          Ready to boost your business?
        </h1>
        <p className="text-center text-[#fff] opacity-[0.4] text-base mobile:text-[18px] w-[80%] m-auto"></p>
      </div>

      <div className="flex mobile:flex-col mobile:space-y-[31px]">
        <div className="space-y-[12px] flex flex-col justify-center items-center">
          <img src={unlimitedIcon} alt="unlimitedIcon" draggable={false} />
          <h1 className="text-[20px] text-[#fff]">Create Your Free Account</h1>
          <p className="text-center text-[#fff] opacity-[0.4] text-base mobile:text-[14px] w-[70%] bigScreen:w-[59%]">
            Customize your preferences in the Settings page and copy your API
            KEY for integration
          </p>
        </div>

        <div className="space-y-[12px] flex flex-col justify-center items-center">
          <img src={armIcon} alt="armIcon" draggable={false} />
          <h1 className="text-[20px] text-[#fff]">Connect Your Store</h1>
          <p className="text-center text-[#fff] opacity-[0.4] text-base mobile:text-[14px] w-[70%] bigScreen:w-[59%]">
            Easily integrate Wagent with your e-commerce platform via our
            plugins for WordPress, Shopify, and more.
          </p>
        </div>
      </div>

      {/*o
         *
      <div className="mt-[135px] mobile:mt-[103px] w-full flex flex-col justify-center items-center">
        <div className="w-[82px]">
          <Button variant="simpleGreen" text="Our Team" />
        </div>
        <h1 className="text-center text-[#fff] text-[30px] mobile:text-[28px] font-bold my-4 z-50">
          Revenue insights: <br />
          See your earnings at a glance
        </h1>
        <p className="text-center text-[#6A786B] text-base mobile:text-[18px] w-[59%] bigScreen:w-[19%] mobile:w-[80%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="mt-[60px] mobile:mt-[40px] flex space-x-4 mobile:flex-col mid:flex-col mobile:space-y-4 mobile:space-x-0">
        <div className="flex mobile:flex-col justify-center mobile:space-y-4">
          <TeamMember name="Kaiya Donin" bio="CEO/Founder" image={team} />
          <TeamMember
            name="Kierra Dokidis"
            bio="Engineering manager"
            image={team}
          />
        </div>
        <div className="flex mobile:flex-col justify-center mobile:space-y-4">
          <TeamMember name="Ryan Kenter" bio="Product manager" image={team} />
          <TeamMember
            name="Abram Ekstrom Bothman"
            bio="Backend developer"
            image={team}
          />
        </div>
      </div>
         */}

      <div className="mt-[205px] flex flex-col justify-center items-center">
        <img src={wagentLogo} alt="armIcon" draggable={false} />
        <h1 className="text-[30px] mobile:text-[24px] mt-[24px] font-medium text-center text-[#fff]">
          Get Started with Wagent Today!
        </h1>
        <p className="text-center text-[#fff] opacity-[0.6] text-base mobile:text-[14px] mobile:px-4">
          Sign up now and integrate Wagent’s powerful payment gateway in just a
          few minutes!
        </p>
        <div className="space-x-6 flex items-center mt-6">
          <Button
            variant="basicBlack"
            text="Register Now"
            className="w-[150px]"
          />
          <a href="" className="text-[#fff] text-[14px] w-[120px]">
            Learn more
          </a>
        </div>
      </div>

      <div className="w-full bg-[#262C26] mt-[113px] px-[200px] py-[100px] mobile:px-8 mobile:py-[30px]">
        <div className="flex items-center justify-between mobile:flex-wrap">
          <a href="/">
            <img src={wagentIcon} alt="wagentLogo2" draggable={false} />
          </a>

          <div className="flex justify-center items-center space-x-4 mobile:space-x-[1px] w-auto font-medium mobile:order-last z-50 mobile:mt-[36px] mobile:m-auto">
            {headerTabs.map((x) => (
              <a
                key={x.link}
                href={x.link}
                className={`text-[14px] mobile:text-[10px] flex items-center justify-center text-white rounded-[26px] w-auto h-[27px] mobile:px-2 px-3  select-none bg-[#ffffff0a] hover:bg-[#ffffff1a]`}
              >
                {x.name}
              </a>
            ))}
          </div>

          <div className="space-x-[8px] flex">
            {socialLogo.map((logo) => (
              <a
                className={`text-[14px] flex items-center justify-center w-[44px] h-[36px] text-white rounded-[26px] select-none bg-[#ffffff0a] hover:bg-[#ffffff1a] transition cursor-pointer`}
              >
                <img src={logo} alt={logo} width={logo === xLogo ? 12 : 28} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
