import './App.css';

import LogoSection from './components/LogoSection';
import NavbarLinks from './components/NavbarLinks';
import WalletBalance from './components/WalletBalance';
import ProfileSection from './components/ProfileSection';
import GamesDropdown from './components/GamesDropdown';
import MenuButton from './components/MenuButton';
import Banner from './components/Banner';
import BenefitsCards from './components/BenefitsCards';
import HowDoesItWork from './components/HowDoesItWork';
import ProgressiveAffiliateSystem from './components/ProgressiveAffiliateSystem';

function App() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-[56px] max-h-[56px] xl:max-h-[116px] xl:h-[116px] flex items-center justify-between xl:items-start xl:justify-normal py-[8px] px-[16px] xl:p-0 bg-logo-mobile-background xl:bg-[#1A1D2F] z-[50]">
        
        <LogoSection />

        <div className="relative h-full w-full flex flex-col xl:bg-header-footer-background xl:max-w-none">

          <NavbarLinks />
          
          <div className="relative w-full h-full flex items-center justify-between xl:px-[40px]">
            
            <GamesDropdown />
            
            <div className="flex-grow flex justify-center items-center">
              <WalletBalance />
            </div>

            <ProfileSection />

            <div className="ml-auto">
              <MenuButton />
            </div>

          </div>
        </div>
      </nav>

      <div className="mt-[56px] xl:mt-[116px] w-full flex flex-col ">
        
        <Banner />

        <BenefitsCards />

        <HowDoesItWork />

        <ProgressiveAffiliateSystem />

      </div>
      


    </div>
  );
}

export default App;
