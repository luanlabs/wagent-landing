import Header from './containers/Header';
import IntroSection from './containers/IntroSection';

import greenGradiant from '../public/images/Background Gradients.svg';
import back from '../public/images/Eclipse (2).svg';

function App() {
  return (
    <section className="w-full relative">
      <div className="w-[75%] mobile:w-full m-auto mobile:flex-col mobile:justify-center">
        <div className="mt-[30px] mobile:mt-4 w-full mobile:w-[92%] mobile:m-auto">
          <Header />
        </div>
        <div className="mt-[80px] mobile:mt-[32px] flex w-full">
          <img
            src={greenGradiant}
            alt="an"
            className="absolute top-[-90px] mobile:hidden right-[2%] -z-10"
          />

          <img
            src={back}
            alt="an"
            className="absolute top-0 right-[20%] opacity-15 mobile:hidden -z-10"
          />
          <IntroSection />
        </div>
      </div>
    </section>
  );
}

export default App;
