import arrowDownIcon from '../assets/images/arrowDown.svg';

const GamesDropdown = () => {
  return (
    <div className="max-w-[143px] w-[143px] h-[40px] hidden xl:block flex justify-between items-center bg-[linear-gradient(266deg,rgb(32,36,71)_54.3%,rgb(44,41,50)_96.88%),linear-gradient(259deg,rgb(39,43,76)_65.15%,rgb(79,60,56)_99.34%)] rounded-[4px] border border-1 border-white/5 cursor-pointer">
      <div className="flex justify-between items-center w-full h-full px-[12px] py-[11px]">
        <div className="flex gap-[8px] items-center"> 
          <svg viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="10"><path d="M24 3.09675V4.40861H0V3.09675L1.7507 0H22.2493L24 3.09675Z" fill="#FFB436"></path><path d="M10.362 8.64753H13.638L14.0269 5.9087H9.97312L10.362 8.64753Z" fill="#FFB436"></path><path d="M2.96371 18H5.56562V15.5838H8.4879V18H15.5122V15.5838H18.4344V18H21.0363C22.6731 18 24 16.3433 24 14.2996V5.9087H15.9791L15.2495 11.0475H8.75045L8.0209 5.9087H0V14.2996C0 16.3433 1.32688 18 2.96371 18Z" fill="#FFB436"></path></svg>
          <span className="text-white text-[14px] font-medium">Games</span>
        </div>
        <div className="w-[16px] h-[16px] flex items-center justify-center">
          <img src={arrowDownIcon} className="w-[10px]" alt="ArrowDownIcon" />
        </div>
      </div>
    </div>
  );
};

export default GamesDropdown;
