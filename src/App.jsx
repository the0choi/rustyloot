import './App.css';

import menuIcon from './assets/images/Menu.svg';

import LogoSection from './components/LogoSection';
import NavbarLinks from './components/NavbarLinks';
import WalletBalance from './components/WalletBalance';
import ProfileSection from './components/ProfileSection';
import GamesDropdown from './components/GamesDropdown';
import Banner from './components/Banner';
import BenefitsCards from './components/BenefitsSection/BenefitsCards';
import HowDoesItWork from './components/HowDoesItWork';
import ProgressiveAffiliateSystem from './components/AffiliateSystemSection/ProgressiveAffiliateSystem';
import EarningsDashboard from './components/EarningsDashboard';

function App() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-[56px] max-h-[56px] lg:max-h-[116px] lg:h-[116px] flex items-center justify-between lg:items-start lg:justify-normal py-[8px] px-[16px] lg:p-0 bg-[linear-gradient(90deg,#21202F_0%,#1B1D2F_48.4%,#1C1E30_100%)] lg:bg-[#1A1D2F] z-[50]">
        
        <LogoSection />

        <div className="relative h-full w-full flex flex-col lg:bg-[linear-gradient(90deg,#1A1D2F_0%,#191A2C_100%)] lg:max-w-none">

          <NavbarLinks />
          
          <div className="relative w-full h-full flex items-center justify-between lg:px-[40px]">
            
            <GamesDropdown />
            
            <div className="flex-grow flex justify-center items-center">
              <WalletBalance />
            </div>

            <ProfileSection />

            {/* Menu Button */}
            <div className="ml-auto">
              <div className="relative w-[40px] h-[40px] rounded-[4px] lg:hidden flex items-center justify-center">
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

      <div className="mt-[56px] lg:mt-[116px] w-full flex flex-col">
        
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
