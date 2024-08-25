import enFlag from '../assets/images/englishFlag.svg';
import DropdownButton from './DropdownButton';

const NavbarLinks = () => {
  return (
      <div className="relative w-full h-[36px] xl:flex items-center justify-start px-[40px] py-[10px] hidden gap-[20px] bg-[#191A2C]">
        <a className="text-[#6a6fa3] hover:text-[#9a9ec8] text-[14px] font-bold cursor-pointer navbar-text-shadow">Earn with us</a>
        <a className="text-[#6A6FA3] hover:text-[#9a9ec8] text-[14px] font-bold cursor-pointer navbar-text-shadow">Leaderboard</a>
        <a className="text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFD691_0%,_#EEB351_54.17%)] hover:text-[#EEB351] text-[14px] font-bold cursor-pointer navbar-text-shadow">Rewards</a>
        <div className="flex items-center gap-[8px] ml-auto cursor-pointer">
          <div className="flex items-center justify-center gap-[6px]">
            <div className='w-[16px] h-[16px] flex justify-center items-center'>
              <img 
                className="w-[16px]" 
                src={enFlag} 
                alt="English Flag" 
              />
            </div>
            <span className="font-bold text-[13px] text-[#9A9EC8]">ENG</span>
          </div>
          
          <DropdownButton />
        </div>
      </div>
  );
};

export default NavbarLinks;