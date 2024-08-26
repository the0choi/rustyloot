import { useEffect, useRef, useState } from 'react';

import othersCard from '../../assets/images/othersCard.png';
import earningsCard from '../../assets/images/earningsCard.png';
import withdrawCard from '../../assets/images/withdrawCard.png';
import BenefitsCard from './BenefitsCard';

const BenefitsCards = () => {
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
    <div 
      ref={containerRef}
      className={`overflow-hidden relative ${isDragging ? 'cursor-grabbing' : isOverflowing ? 'cursor-grab' : 'cursor-default'} bg-[linear-gradient(107deg,_#17182F_0%,_#151628_67.29%)] p-[16px] lg:pt-[50px] xl:pt-[80px] lg:pb-[0px] xl:pb-[0px]`}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
    >
      <div 
        className={`flex ${isOverflowing ? 'justify-start' : 'justify-center'} items-center gap-[12px] lg:gap-[14px] xl:gap-[16px]`}
      >
        <BenefitsCard
          image={othersCard} 
          title="Get others involved" 
          description="Rustyloot is a social platform. Kickstart your earnings by inviting your friends" 
        />
        <BenefitsCard
          image={earningsCard} 
          title="Grow your Earnings" 
          description="Each time friends deposit using your code you profit! More referrals - more earnings" 
        />
        <BenefitsCard
          image={withdrawCard} 
          title="Withdraw your Profits" 
          description="Instantly cash out out your earnings at anytime" 
        />
        
        {/* Creates even spacing on the right side at the end of the overflow */}
        {isOverflowing && (
          <div className="w-[6px] h-[225px] flex-none"></div>
        )}
        
      </div>
    </div>
  );
};

export default BenefitsCards;
