interface FeatureCardProps {
  title: string;
  text: string;
  icon: string;
}

const FeatureCard = ({ title, text, icon }: FeatureCardProps) => {
  return (
    <div className="flex items-start justify-center space-x-[26px] mobile:space-x-0 w-auto rounded-[15px] mobile:bg-white mobile:w-[314px] mobile:h-[200px] mobile:flex-col">
      <div className="mobile:hidden">
        <div className="bg-white !h-[76px] !w-[76px] mobile:h-[42px] mobile:w-[42px] flex justify-center items-center rounded-[12px] shadow-box-shadow">
          <img src={icon} alt="data" />
        </div>
      </div>

      <div className="space-y-[10px] w-full">
        <div className="flex justify-center items-center desktop:justify-start">
          <img
            src={icon}
            alt="data"
            width={30}
            className="mr-4 desktop:hidden"
          />

          <h3 className="text-[18px] mobile:text-base text-[#020617] font-medium">
            {title}
          </h3>
        </div>
        <p className="text-[14px] text-[#020617]/50 w-full mobile:px-[30px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
