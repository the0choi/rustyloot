import profilePic from '../assets/images/avatar.png';
import profileBadge from '../assets/images/opalTierBadge.21f4a217.png';
import bellIcon from '../assets/images/bell-solid-24.png';

const ProfileSection = () => {
  return (
    <div className="relative hidden xl:block flex items-center justify-end gap-[10px]">
      <div className="flex items-center gap-[10px] cursor-pointer">
        {/* Profile Picture */}
        <div className="relative flex items-center justify-center">
          <svg width="40" height="40">
            <circle stroke="#404472" fill="none" r="19.25" cx="20" cy="20"></circle>
            <circle stroke="#404472" fill="none" r="19.25" cx="20" cy="20" transform="rotate(-90 20 20)"></circle>
          </svg>
          <div className="absolute">
            <img className="h=[34px] w-[34px] rounded-full p-0.5" src={profilePic} alt="Profile" />
          </div>
          <div className="absolute top-0 right-0 translate-x-[6px]">
            <img className="w-[16px]" src={profileBadge} alt="Profile Badge" />
          </div>
        </div>

        <div className="min-w-[16px] w-[16px] min-h-[16px] h-[16px] flex items-center justify-center whitespace-nowrap rounded bg-[radial-gradient(77.08%_101.71%_at_77.08%_-35.83%,rgb(56,60,92)_32.6%,rgb(45,49,70)_100%),linear-gradient(258.59deg,rgb(66,70,98)_45.82%,rgb(59,61,79)_99.34%)] border border-1 border-[#494B5E]">
          <img className="w-[7px] h-[4px]" src={bellIcon} alt="Dropdown Arrow" />
        </div>

        <div className="ml-[5px] min-w-[34px] w-[34px] min-h-[34px] h-[34px] flex items-center justify-center whitespace-nowrap rounded bg-[radial-gradient(77.08%_101.71%_at_77.08%_-35.83%,rgb(56,60,92)_32.6%,rgb(45,49,70)_100%),linear-gradient(258.59deg,rgb(66,70,98)_45.82%,rgb(59,61,79)_99.34%)] border border-1 border-[#494B5E]">
          <img className="w-[16px] h-[16px]" src={bellIcon} alt="Bell Icon" />
          <div className="absolute translate-x-[5px] -translate-y-[6px] w-[5px] h-[5px] p-[1px] rounded-full bg-[#27F278]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
