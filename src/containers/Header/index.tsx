import { useState } from 'react';

import Button from '@/components/Button';

import wagentLogo from 'public/images/wagent.svg';

const headerTabs = [
  { name: 'Home', link: '/home' },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Our Team',
    link: '/ourteam',
  },
  {
    name: 'How it works',
    link: '/howitworks',
  },
  {
    name: 'Features',
    link: '/features',
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState('/home');

  const handleTabClick = (e, link: string) => {
    e.preventDefault();
    setActiveTab(link);
  };

  return (
    <header className="flex justify-between items-center h-[60px] w-full rounded-[20px] border border-1 border-[#F1F1F1] px-[24px] py-[6px] z-50">
      <img src={wagentLogo} alt="wagent" draggable={false} />

      <div className="flex justify-center items-center space-x-4 w-auto font-medium mobile:hidden z-50">
        {headerTabs.map((x) => (
          <a
            key={x.link}
            href={x.link}
            className={`text-[14px] flex items-center justify-center text-black rounded-[26px] w-auto h-[27px] px-3 select-none ${
              activeTab === x.link ? 'bg-[#F5F5F5]' : ''
            }`}
            onClick={(e) => handleTabClick(e, x.link)}
          >
            {x.name}
          </a>
        ))}
      </div>

      <div className="w-[85px] z-50">
        <Button variant="bordered" text="Launch app" />
      </div>
    </header>
  );
};

export default Header;
