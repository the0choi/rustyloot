import './App.css';

import menuIcon from './assets/images/Menu.svg';

import LogoSection from './components/LogoSection';
import NavbarLinks from './components/NavbarLinks';
import WalletBalance from './components/WalletBalance';
import ProfileSection from './components/ProfileSection';
import GamesDropdown from './components/GamesDropdown';
import Banner from './components/Banner';
import BenefitsCards from './components/BenefitsCards';
import HowDoesItWork from './components/HowDoesItWork';
import ProgressiveAffiliateSystem from './components/ProgressiveAffiliateSystem';
import EarningsDashboard from './components/EarningsDashboard';

function App() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-[56px] max-h-[56px] xl:max-h-[116px] xl:h-[116px] flex items-center justify-between xl:items-start xl:justify-normal py-[8px] px-[16px] xl:p-0 bg-[linear-gradient(90deg,#21202F_0%,#1B1D2F_48.4%,#1C1E30_100%)] xl:bg-[#1A1D2F] z-[50]">
        
        <LogoSection />

        <div className="relative h-full w-full flex flex-col xl:bg-[linear-gradient(90deg,#1A1D2F_0%,#191A2C_100%)] xl:max-w-none">

          <NavbarLinks />
          
          <div className="relative w-full h-full flex items-center justify-between xl:px-[40px]">
            
            <GamesDropdown />
            
            <div className="flex-grow flex justify-center items-center">
              <WalletBalance />
            </div>

            <ProfileSection />

            {/* Menu Button */}
            <div className="ml-auto">
              <div className="relative w-[40px] h-[40px] rounded-[4px] xl:hidden flex items-center justify-center">
                <img 
                  src={menuIcon} 
                  className="w-[17px] cursor-pointer" 
                  alt="Menu Icon"
                />
              </div>
            </div>

          </div>
        </div>
      </nav>

      <div className="mt-[56px] xl:mt-[116px] w-full flex flex-col">
        
        <Banner />

        <BenefitsCards />

        <HowDoesItWork />

        <ProgressiveAffiliateSystem />

        <EarningsDashboard />

      </div>
    </div>
  );
}

export default App;
