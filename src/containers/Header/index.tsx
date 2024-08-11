import { useState } from 'react';
import wagentLogo from '../../../public/images/wagent.svg';

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
    <header className="flex justify-between items-center h-[60px] rounded-[20px] border border-1 border-[#F1F1F1] px-[24px] py-[6px] ">
      <img src={wagentLogo} alt="wagent" />

      <div className="flex justify-center items-center space-x-5 w-auto font-medium mobile:hidden">
        {headerTabs.map((x) => (
          <a
            key={x.link}
            href={x.link}
            className={`text-[12px] flex items-center justify-center  text-black rounded-[26px] w-auto h-[25px] px-2 ${
              activeTab === x.link ? 'bg-[#F5F5F5]' : ''
            }`}
            onClick={(e) => handleTabClick(e, x.link)}
          >
            {x.name}
          </a>
        ))}
      </div>

      <div>Laaaanch app</div>
    </header>
  );
};

export default Header;
