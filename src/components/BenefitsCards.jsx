import { useEffect, useRef, useState } from 'react';

import othersCard from '../assets/images/othersCard.png';
import earningsCard from '../assets/images/earningsCard.png';
import withdrawCard from '../assets/images/withdrawCard.png';
import PropTypes from 'prop-types';

const Card = ({ image, title, description }) => (
  <div className="w-[210px] h-[225px] sm:w-[237px] sm:h-[225px] xl:w-[364px] xl:h-[250px] flex-none relative flex flex-col items-center gap-[2px] xl:gap-[4px] px-[20px] pt-[135px] pb-[26px] xl:pt-[156px] xl:pb-[28px] border rounded-[8px] border-[#41384D] bg-[radial-gradient(171.1%_141.34%_at_16.62%_-22.1%,_#3F3332_0%,_#392D36_16.67%,_#22223B_62.98%,_#1A1C30_100%)]">
    <div className="absolute left-0 translate-x-[15px] sm:translate-x-[28.333px] xl:translate-x-[49px] top-0 translate-y-[4px] sm:translate-y-[4px] xl:-translate-y-[30px] w-[180px] h-[137px] xl:w-[266px] xl:h-[203px] flex justify-center items-center">
      <img src={image} className="w-full shrink-0" />
    </div>
    <span className="text-[#fff] text-[16px] xl:text-[20px] leading-[20px] xl:leading-[26px] font-bold tracking-[0.1px]">
      {title}
    </span> 
    <span className="text-[#9A9EC8] text-[11px] xl:text-[14px] leading-[14px] xl:leading-[18px] font-bold tracking-[0.1px]">
      {description}
    </span>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const BenefitsCards = () => {
  const containerRef = useRef(null);
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

  return (
    <div 
      ref={containerRef} 
      className={`flex ${isOverflowing ? 'justify-start' : 'justify-center'} items-center overflow-x-auto gap-[12px] xl:gap-[16px] self-stretch p-[16px] xl:pt-[80px] bg-[linear-gradient(107deg,_#17182F_0%,_#151628_67.29%)]`}>

      <Card 
        image={othersCard} 
        title="Get others involved" 
        description="Rustyloot is a social platform. Kickstart your earnings by inviting your friends" 
      />
      <Card 
        image={earningsCard} 
        title="Grow your Earnings" 
        description="Each time friends deposit using your code you profit! More referrals - more earnings" 
      />
      <Card 
        image={withdrawCard} 
        title="Withdraw your Profits" 
        description="Instantly cash out out your earnings at anytime" 
      />

    </div>
  )
}

export default BenefitsCards