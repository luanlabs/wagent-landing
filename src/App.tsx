import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import HowAreWe from '@/containers/HowAreWe';
import HowItWork from '@/containers/HowItWork';
import IntroSection from '@/containers/IntroSection';

import greenBackground from 'public/images/GreenEclipse.svg';
import greenBack from 'public/images/how-it-work/Eclipse.svg';
import greenGradient from 'public/images/BackgroundGradients.svg';
import greenBackMobile from 'public/images/how-it-work/Eclipse(3)Mobile.svg';

function App() {
  return (
    <section className="w-full relative">
      <div className="w-[75%]  mobile:w-full m-auto mobile:flex-col mobile:justify-center">
        <div className="mt-[30px] mobile:mt-4 w-full mobile:w-[92%] mobile:m-auto">
          <Header />
        </div>
        <div className="mt-[80px] mobile:mt-[32px] flex w-full">
          <img
            src={greenGradient}
            alt="background"
            draggable={false}
            className="absolute -top-[90px] mobile:hidden right-[2%] -z-10"
          />

          <img
            src={greenBackground}
            alt="background"
            draggable={false}
            className="absolute top-0 right-[20%] opacity-15 mobile:hidden -z-10"
          />
          <div id="home">
            <IntroSection />
          </div>
        </div>

        <div className="mt-[140px] mobile:mt-[63px] relative">
          <HowItWork />
          <img
            src={greenBack}
            alt="green"
            draggable={false}
            className="absolute -left-[20%] top-0 opacity-15 bigScreen:opacity-55 -z-10 mobile:hidden"
          />
          <img
            src={greenBackMobile}
            alt="green"
            draggable={false}
            className="desktop:hidden absolute -top-[21%] opacity-10 -z-10"
          />
        </div>

        <div className="mt-[157px] mobile:mt-[75px]" id="features">
          <HowAreWe />
        </div>
      </div>

      <div className="w-[95%] m-auto mt-[157px] mb-[34px]">
        <Footer />
      </div>
    </section>
  );
}

export default App;
