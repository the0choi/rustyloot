import arrowDown from '../assets/images/arrowDown.fd2bfb32.svg';
import enFlag from '../assets/images/enFlag.f28a649c.svg';

const NavbarLinks = () => {
  return (
      <div className="relative w-full min-h-[36px] h-[36px] xl:flex items-center justify-start px-[40px] hidden gap-[20px] bg-[#191A2C]">
        <a className="text-[#6a6fa3] hover:text-[#9a9ec8] text-[14px] font-bold cursor-pointer navbar-text-shadow">Earn with us</a>
        <a className="text-[#6A6FA3] hover:text-[#9a9ec8] text-[14px] font-bold cursor-pointer navbar-text-shadow">Leaderboard</a>
        <a className="text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFD691_0%,_#EEB351_54.17%)] hover:text-[#EEB351] text-[14px] font-bold cursor-pointer navbar-text-shadow">Rewards</a>
        <div className="flex items-center gap-[6px] ml-auto cursor-pointer">
          <img className="w-[16px]" src={enFlag} alt="English Flag" />
          <span className="font-bold text-[13px] text-[#9A9EC8]">ENG</span>
          <div className="min-w-[16px] w-[16px] min-h-[16px] h-[16px] flex items-center justify-center whitespace-nowrap rounded bg-[radial-gradient(77.08%_101.71%_at_77.08%_-35.83%,rgb(56,60,92)_32.6%,rgb(45,49,70)_100%),linear-gradient(258.59deg,rgb(66,70,98)_45.82%,rgb(59,61,79)_99.34%)] border border-1 border-[#494B5E]">
            <img className="w-[7px] h-[4px]" src={arrowDown} alt="Dropdown Arrow" />
          </div>
        </div>
      </div>
  );
};

export default NavbarLinks;