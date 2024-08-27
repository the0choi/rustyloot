import { useEffect, useRef, useState } from 'react';

import ironBadge from '../../assets/images/ironBadge.png';
import copperBadge from '../../assets/images/copperBadge.png';
import titaniumBadge from '../../assets/images/titaniumBadge.png';
import opalBadge from '../../assets/images/opalBadge.png';
import amberBadge from '../../assets/images/amberBadge.png';

import BadgeCard from './BadgeCard';

const ProgressiveAffiliateSystem = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setIsOverflowing(containerRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const handleMouseDown = (e) => {
    if (!isOverflowing) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    document.body.style.userSelect = 'none';
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = '';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    const newScrollLeft = Math.max(0, Math.min(maxScroll, scrollLeft - walk));
    
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`flex flex-col items-center sm:gap-[16px] lg:gap-[20px] self-stretch bg-[linear-gradient(270deg,_#151628_0%,_#171A31_50%,_#15172B_100%)]`}>
      <div className="pt-[24px] sm:pt-[32px] lg:pt-[56px] px-[16px] sm:px-[0px] w-full">
        <div className="flex flex-col items-center justify-center gap-[4px] lg:gap-[8px]">
          <span className="text-[#FFF] text-center text-[18px] lg:text-[21px] xl:text-[24px] font-bold leading-[23px] lg:leading-[27px] xl:leading-[31px] tracking-[0.1px] self-stretch">
            Progressive Affiliate System
          </span>
          <span className="mx-auto w-[344px] sm:w-[420px] lg:w-[500px] text-[#6A6FA3] text-center text-[11px] lg:text-[12px] xl:text-[13px] font-bold leading-[14px] lg:leading-[16px] xl:leading-[17px] tracking-[0.1px] self-stretch">
            The more users you refer the greater the rewards. Ascend through the ranks
            to get up to 5% of every deposit and unlock exclusive features and rewards.
          </span>
        </div>
      </div>

      <div 
        ref={containerRef} 
        className={`w-full flex overflow-hidden ${isDragging ? 'cursor-grabbing' : isOverflowing ? 'justify-start cursor-grab' : 'justify-center cursor-default'} py-[16px] pl-[16px] sm:px-[16px] sm:py-[0px] items-start gap-[10px] sm:gap-[12px]`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        >

        <BadgeCard 
          badgeImage={ironBadge}
          badgeStyle="w-[20px] lg:w-[30px] h-[22px] lg:h-[33px] translate-x-[17px] lg:translate-x-[28px] translate-y-[16px] lg:translate-y-[26.5px]" 
          badgeName="IRON" 
          textColor="#A3B1B4"
          textContent="Unlocked"
          backgroundColor="bg-[radial-gradient(78.62%_100%_at_50.04%_0%,_#32344C_0%,_#21233E_100%)]"
          bottomGradient="bg-[linear-gradient(180deg,_#2B2D46_0%,_#20223D_100%)]"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clipPath="url(#clip0_4_35260)">
                <path d="M5.5 0.650024C2.74302 0.650024 0.5 2.89298 0.5 5.65C0.5 8.40702 2.74302 10.65 5.5 10.65C8.25698 10.65 10.5 8.40702 10.5 5.65C10.5 2.89298 8.25704 0.650024 5.5 0.650024ZM8.37109 4.80546L5.22984 7.94669C5.09628 8.08025 4.91873 8.15377 4.72986 8.15377C4.54099 8.15377 4.36344 8.08025 4.22987 7.94669L2.62891 6.34574C2.49535 6.21217 2.42178 6.03462 2.42178 5.84575C2.42178 5.65683 2.49535 5.47929 2.62891 5.34572C2.76243 5.21216 2.93997 5.13859 3.1289 5.13859C3.31777 5.13859 3.49537 5.21216 3.62888 5.34577L4.72981 6.44664L7.37102 3.80544C7.50458 3.67188 7.68213 3.59837 7.871 3.59837C8.05987 3.59837 8.23742 3.67188 8.37098 3.80544C8.64678 4.08124 8.64678 4.52977 8.37109 4.80546Z" fill="#A3B1B4"/>
              </g>
              <defs>
                <clipPath id="clip0_4_35260">
                  <rect width="10" height="10" fill="white" transform="translate(0.5 0.650024)"/>
                </clipPath>
              </defs>
            </svg>
          }
          semicircleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="170" height="69" viewBox="0 0 170 69" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M84.5 0C49.2809 0 23.3455 11.0378 0 28.9475V68L170 68.331V27.4108C146.9 10.6045 118.478 0 84.5 0Z" fill="url(#paint0_linear_4_35214)"/>
              <defs>
                <linearGradient id="paint0_linear_4_35214" x1="85" y1="0" x2="85" y2="68.331" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#363954"/>
                  <stop offset="1" stopColor="#2B2D46"/>
                </linearGradient>
              </defs>
            </svg>
          }
          circleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="87" viewBox="0 0 86 87" fill="none" className="w-full h-full">
              <circle cx="43" cy="43.3" r="43" fill="url(#paint0_linear_4_35218)"/>
              <defs>
                <linearGradient id="paint0_linear_4_35218" x1="43" y1="0.300049" x2="43" y2="86.3" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2C3054"/>
                  <stop offset="1" stopColor="#464A62"/>
                </linearGradient>
              </defs>
            </svg>
          }
          current={false}
        />

        <BadgeCard 
          badgeImage={copperBadge}
          badgeStyle="w-[30px] lg:w-[44px] h-[23px] lg:h-[34px] translate-x-[12px] lg:translate-x-[21px] translate-y-[15.5px] lg:translate-y-[26px]"  
          badgeName="COPPER" 
          textColor="#C98152"
          textContent="Unlocked"
          backgroundColor="bg-[radial-gradient(78.62%_100%_at_50.04%_0%,_#322D41_0%,_#21223A_100%)]"
          bottomGradient="bg-[linear-gradient(180deg,_#2B263C_0%,_#20213C_100%)]"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clipPath="url(#clip0_4_35919)">
                <path d="M5.5 0.650024C2.74302 0.650024 0.5 2.89298 0.5 5.65C0.5 8.40702 2.74302 10.65 5.5 10.65C8.25698 10.65 10.5 8.40702 10.5 5.65C10.5 2.89298 8.25704 0.650024 5.5 0.650024ZM8.37109 4.80546L5.22984 7.94669C5.09628 8.08025 4.91873 8.15377 4.72986 8.15377C4.54099 8.15377 4.36344 8.08025 4.22987 7.94669L2.62891 6.34574C2.49535 6.21217 2.42178 6.03462 2.42178 5.84575C2.42178 5.65683 2.49535 5.47929 2.62891 5.34572C2.76243 5.21216 2.93997 5.13859 3.1289 5.13859C3.31777 5.13859 3.49537 5.21216 3.62888 5.34577L4.72981 6.44664L7.37102 3.80544C7.50458 3.67188 7.68213 3.59837 7.871 3.59837C8.05987 3.59837 8.23742 3.67188 8.37098 3.80544C8.64678 4.08124 8.64678 4.52977 8.37109 4.80546Z" fill="#C98152"/>
              </g>
              <defs>
                <clipPath id="clip0_4_35919">
                  <rect width="10" height="10" fill="white" transform="translate(0.5 0.650024)"/>
                </clipPath>
              </defs>
            </svg>
          }
          semicircleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="170" height="69" viewBox="0 0 170 69" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M84.5 0C49.2809 0 23.3455 11.0378 0 28.9475V68L170 68.331V27.4108C146.9 10.6045 118.478 0 84.5 0Z" fill="url(#paint0_linear_4_35879)"/>
              <defs>
                <linearGradient id="paint0_linear_4_35879" x1="85" y1="0" x2="85" y2="68.331" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#382E44"/>
                  <stop offset="1" stopColor="#2B263C"/>
                </linearGradient>
              </defs>
            </svg>
          }
          circleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="87" viewBox="0 0 86 87" fill="none" className="w-full h-full">
              <circle cx="43" cy="43.3" r="43" fill="url(#paint0_linear_4_35883)"/>
              <defs>
                <linearGradient id="paint0_linear_4_35883" x1="43" y1="0.300049" x2="43" y2="86.3" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2D2F52"/>
                  <stop offset="1" stopColor="#4F3544"/>
                </linearGradient>
              </defs>
            </svg>
          }
          current={false}
        />

        <BadgeCard 
          badgeImage={titaniumBadge}
          badgeStyle="w-[32px] lg:w-[48px] h-[28px] lg:h-[42px] translate-x-[11px] lg:translate-x-[19px] translate-y-[13px] lg:translate-y-[22px]"  
          badgeName="TITANIUM" 
          textColor="#A3B1B4"
          textContent="Unlocked"
          backgroundColor="bg-[radial-gradient(78.62%_100%_at_50.04%_0%,_#32344C_0%,_#21233E_100%)]"
          bottomGradient="bg-[linear-gradient(180deg,_#2B2D46_0%,_#20223D_100%)]"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clipPath="url(#clip0_4_7594)">
                <path d="M5.5 0.650024C2.74302 0.650024 0.5 2.89298 0.5 5.65C0.5 8.40702 2.74302 10.65 5.5 10.65C8.25698 10.65 10.5 8.40702 10.5 5.65C10.5 2.89298 8.25704 0.650024 5.5 0.650024ZM8.37109 4.80546L5.22984 7.94669C5.09628 8.08025 4.91873 8.15377 4.72986 8.15377C4.54099 8.15377 4.36344 8.08025 4.22987 7.94669L2.62891 6.34574C2.49535 6.21217 2.42178 6.03462 2.42178 5.84575C2.42178 5.65683 2.49535 5.47929 2.62891 5.34572C2.76243 5.21216 2.93997 5.13859 3.1289 5.13859C3.31777 5.13859 3.49537 5.21216 3.62888 5.34577L4.72981 6.44664L7.37102 3.80544C7.50458 3.67188 7.68213 3.59837 7.871 3.59837C8.05987 3.59837 8.23742 3.67188 8.37098 3.80544C8.64678 4.08124 8.64678 4.52977 8.37109 4.80546Z" fill="#A3B1B4"/>
              </g>
              <defs>
                <clipPath id="clip0_4_7594">
                  <rect width="10" height="10" fill="white" transform="translate(0.5 0.650024)"/>
                </clipPath>
              </defs>
            </svg>
          }
          semicircleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="170" height="69" viewBox="0 0 170 69" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M84.5 0C49.2809 0 23.3455 11.0378 0 28.9475V68L170 68.331V27.4108C146.9 10.6045 118.478 0 84.5 0Z" fill="url(#paint0_linear_4_7542)"/>
              <defs>
                <linearGradient id="paint0_linear_4_7542" x1="85" y1="0" x2="85" y2="68.331" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#363954"/>
                  <stop offset="1" stopColor="#2B2D46"/>
                </linearGradient>
              </defs>
            </svg>
          }
          circleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="87" viewBox="0 0 86 87" fill="none" className="w-full h-full">
              <circle cx="43" cy="43.3" r="43" fill="url(#paint0_linear_4_7546)"/>
              <defs>
                <linearGradient id="paint0_linear_4_7546" x1="43" y1="0.300049" x2="43" y2="86.3" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2C3054"/>
                  <stop offset="1" stopColor="#464A62"/>
                </linearGradient>
              </defs>
            </svg>
          }
          current={false}
        />

        <BadgeCard 
          badgeImage={opalBadge}
          badgeStyle="w-[29.25px] lg:w-[45px] h-[27px] lg:h-[42px] translate-x-[12.4px] lg:translate-x-[20.5px] translate-y-[13.5px] lg:translate-y-[22px]"  
          badgeName="OPAL" 
          textColor="#CA83F5"
          textContent="Unlocked"
          backgroundColor="bg-[radial-gradient(78.62%_100%_at_50.04%_0%,_#312B51_0%,_#21213D_100%)]"
          bottomGradient="bg-[linear-gradient(180deg,_#262547_0%,_#20223D_100%)]"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clipPath="url(#clip0_4_3140)">
                <path d="M5.5 0.650024C2.74302 0.650024 0.5 2.89298 0.5 5.65C0.5 8.40702 2.74302 10.65 5.5 10.65C8.25698 10.65 10.5 8.40702 10.5 5.65C10.5 2.89298 8.25704 0.650024 5.5 0.650024ZM8.37109 4.80546L5.22984 7.94669C5.09628 8.08025 4.91873 8.15377 4.72986 8.15377C4.54099 8.15377 4.36344 8.08025 4.22987 7.94669L2.62891 6.34574C2.49535 6.21217 2.42178 6.03462 2.42178 5.84575C2.42178 5.65683 2.49535 5.47929 2.62891 5.34572C2.76243 5.21216 2.93997 5.13859 3.1289 5.13859C3.31777 5.13859 3.49537 5.21216 3.62888 5.34577L4.72981 6.44664L7.37102 3.80544C7.50458 3.67188 7.68213 3.59837 7.871 3.59837C8.05987 3.59837 8.23742 3.67188 8.37098 3.80544C8.64678 4.08124 8.64678 4.52977 8.37109 4.80546Z" fill="#CA83F5"/>
              </g>
              <defs>
                <clipPath id="clip0_4_3140">
                  <rect width="10" height="10" fill="white" transform="translate(0.5 0.650024)"/>
                </clipPath>
              </defs>
            </svg>
          }
          semicircleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="170" height="69" viewBox="0 0 170 69" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M84.5 0C49.2809 0 23.3455 11.0378 0 28.9475V68L170 68.331V27.4108C146.9 10.6045 118.478 0 84.5 0Z" fill="url(#paint0_linear_4_3077)"/>
              <defs>
                <linearGradient id="paint0_linear_4_3077" x1="85" y1="0" x2="85" y2="68.331" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#372F5A"/>
                  <stop offset="1" stopColor="#262547"/>
                </linearGradient>
              </defs>
            </svg>
          }
          circleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="87" viewBox="0 0 86 87" fill="none" className="w-full h-full">
              <circle cx="43" cy="43.3" r="43" fill="url(#paint0_linear_4_3081)"/>
              <defs>
                <linearGradient id="paint0_linear_4_3081" x1="43" y1="0.300049" x2="43" y2="86.3" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2C2F54"/>
                  <stop offset="1" stopColor="#44396B"/>
                </linearGradient>
              </defs>
            </svg>
          }
          current={true}
        />

        <BadgeCard 
          badgeImage={amberBadge}
          badgeStyle="w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] translate-x-[11px] lg:translate-x-[19px] translate-y-[11px] lg:translate-y-[19px]"  
          badgeName="AMBER" 
          textColor="#6A6FA3"
          textContent="Locked"
          backgroundColor="bg-[radial-gradient(78.62%_100%_at_50.04%_0%,_#37313B_0%,_#2A283B_100%)]"
          bottomGradient="bg-[linear-gradient(180deg,_#2F2A3B_0%,_#20223C_100%)]"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.9163 4.59263C1.45857 4.6579 1.05118 4.74327 0.712187 4.82772V3.75723C0.712187 2.04391 1.96279 0.650024 3.5 0.650024C5.03721 0.650024 6.28781 2.04391 6.28781 3.75722V4.82772C5.94882 4.74327 5.54143 4.6579 5.0837 4.59263V3.75722C5.0837 2.78391 4.37325 1.99208 3.5 1.99208C2.62675 1.99208 1.9163 2.78391 1.9163 3.75722V4.59263ZM0 5.64305C0.471543 5.48117 1.84785 5.06379 3.50001 5.06379C5.14849 5.06379 6.52776 5.48144 7 5.6432V10.0708C6.52847 10.2326 5.15217 10.65 3.50001 10.65C1.85154 10.65 0.472261 10.2324 0 10.0706V5.64305ZM3.76286 9.11985V8.15836C4.10552 8.03449 4.35402 7.67549 4.354 7.25283C4.354 6.72799 3.9709 6.301 3.50001 6.301C3.02911 6.301 2.64601 6.72799 2.64601 7.25283C2.64601 7.67549 2.89452 8.03449 3.23715 8.15836V9.11985H3.76286Z" fill="#6A6FA3"/>
            </svg>
          }
          semicircleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="170" height="69" viewBox="0 0 170 69" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M84.5 0C49.2809 0 23.3455 11.0378 0 28.9475V68L170 68.331V27.4108C146.9 10.6045 118.478 0 84.5 0Z" fill="url(#paint0_linear_4_24251)"/>
              <defs>
                <linearGradient id="paint0_linear_4_24251" x1="85" y1="0" x2="85" y2="68.331" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3D3540"/>
                  <stop offset="1" stopColor="#2F2A3B"/>
                </linearGradient>
              </defs>
            </svg>
          }
          circleGradient={
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="87" viewBox="0 0 86 87" fill="none" className="w-full h-full">
              <circle cx="43" cy="43.3" r="43" fill="url(#paint0_linear_4_24255)"/>
              <defs>
                <linearGradient id="paint0_linear_4_24255" x1="43" y1="0.300049" x2="43" y2="86.3" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2D3052"/>
                  <stop offset="1" stopColor="#503E3E"/>
                </linearGradient>
              </defs>
            </svg>
          }
          current={false}
        />
        
        {/* Creates even spacing on the right side at the end of the overflow */}
        {isOverflowing && (
          <div className="mr-[6px] sm:mr-[4px]"></div>
        )}

      </div>
      
      <div className="pb-[16px] sm:pb-[32px] lg:pb-[56px] px-[16px] w-full sm:w-auto">
        
        {/* View Tiers Button */}
        <div className="w-full sm:w-auto flex h-[40px] items-center cursor-pointer">
          <div className="w-full bg-[linear-gradient(180deg,_#664B33,_#876231,_#876231)] p-[1px] rounded-[4px]">
            <div className="w-full flex items-center justify-center px-[16px] py-[10px] gap-[6px] bg-[radial-gradient(63.62%_115%_at_46.04%_0%,_#473C39_0%,_#473C39_0.01%,_#202139_100%)] rounded-[3px]">
              <span className="text-[#FFB436] text-center text-[14px] leading-[18px] tracking-[0.1px] font-bold">View Tiers</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProgressiveAffiliateSystem