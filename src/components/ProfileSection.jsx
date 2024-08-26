import profilePic from '../assets/images/avatar.png';
import profileBadge from '../assets/images/diamondIII.png';

import DropdownButton from './DropdownButton';

const ProfileSection = () => {
  return (
    <div className="hidden xl:flex items-center justify-end gap-[20px]">
      <div className="flex items-center gap-[8px] cursor-pointer">
        <div className="h-[40px] w-[40px] relative flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19.5" stroke="#404472"/>
            <path d="M20 39.5C31.0457 39.5 39.5 30.5 39.5 20C39.5 9.5 31.0457 0.5 20 0.5" stroke="#CA83F5" strokeLinecap="round"/>
          </svg>
          <div className="absolute">
            <img 
              className="h=[34px] w-[34px] rounded-full p-0.5" 
              src={profilePic} 
              alt="Profile" 
            />
          </div>
          <div className="absolute top-0 right-0 translate-x-[8px]">
            <img 
              className="w-[16px]" 
              src={profileBadge} 
              alt="Profile Badge" 
            />
          </div>
        </div>

        <div className="w-[20px] h-[20px] flex items-center justify-center">
          <DropdownButton />
        </div>
        
      </div>
        <div className="bg-[linear-gradient(270deg,_#2C3053_44%,_#292C41_100%)] rounded-[4px] p-[1px]">
          <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[3px] bg-[radial-gradient(106.76%_124.95%_at_77.08%_-35.83%,_#262A50_32.6%,_#1D1F36_100%)] cursor-pointer">
            <div className="h-[16px] flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.8502 2.43403C8.5137 2.31418 8.15838 2.23125 7.78833 2.19053V1.60282C7.78833 1.28226 7.57724 1.06854 7.26059 1.06854C6.94395 1.06854 6.73286 1.28226 6.73286 1.60282V2.19053C4.30527 2.45767 2.51097 4.48794 2.51097 6.94564V11.7542C2.51097 12.6624 1.82491 13.357 0.927761 13.357C0.611119 13.357 0.400024 13.5707 0.400024 13.8913C0.400024 14.2119 0.611119 14.4256 0.927761 14.4256H5.2552C5.46629 15.1736 5.99403 15.7079 6.73286 15.9216C7.8411 16.2421 9.00212 15.5476 9.31877 14.4256H13.5934C13.9101 14.4256 14.1212 14.2119 14.1212 13.8913C14.1212 13.5707 13.9101 13.357 13.5934 13.357C12.6963 13.357 12.0102 12.6624 12.0102 11.7542V6.94564C12.0102 6.90047 12.0096 6.85542 12.0083 6.81049C10.1884 6.33533 8.8438 4.66233 8.8438 2.67139C8.8438 2.59174 8.84596 2.5126 8.8502 2.43403ZM10.5565 3.5002C10.7317 4.04443 11.075 4.51186 11.5241 4.83975C11.2805 4.33981 10.9524 3.88617 10.5565 3.5002Z" fill="#9A9EC8"/>
                <path d="M15.7044 2.67141C15.7044 4.14678 14.523 5.34281 13.0657 5.34281C11.6084 5.34281 10.427 4.14678 10.427 2.67141C10.427 1.19603 11.6084 0 13.0657 0C14.523 0 15.7044 1.19603 15.7044 2.67141Z" fill="#27F278"/>
              </svg>
            </div>
          </div>
        </div>
        
    </div>
  );
};

export default ProfileSection;
