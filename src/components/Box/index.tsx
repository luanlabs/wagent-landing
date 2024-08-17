import cn from 'classnames';

import SingleIcon from '@assets/SingleIcon';
import StreamIcon from '@assets/StreamIcon';
import VestingIcon from '@assets/VestingIcon';

export type BoxIconType = 'single' | 'vesting' | 'stream';

interface BoxProps {
  title: string;
  subTitle: string;
  icon: BoxIconType;
  className?: string;
}

const Box = ({ title, subTitle, icon, className }: BoxProps) => {
  let icons = <StreamIcon />;
  if (icon === 'single') {
    icons = <SingleIcon />;
  } else if (icon === 'vesting') {
    icons = <VestingIcon />;
  }
  return (
    <div
      className={cn(
        className,
        'flex-col justify-center items-center text-center bg-white rounded-[20px] py-4 px-[13px] shadow-box-shadow w-[152px] mobile:border mobile:border-1 mobile:border-[#EFEFEF]',
      )}
    >
      <div className="flex justify-center">{icons}</div>

      <p className="mt-[23px] font-medium">{title}</p>
      <p className="text-[rgba(0, 0, 0, 0.60)]">{subTitle}</p>
    </div>
  );
};

export default Box;
