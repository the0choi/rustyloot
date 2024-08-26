import PropTypes from 'prop-types';

const BenefitsCard = ({ image, title, description }) => (
  <div className="bg-[linear-gradient(180deg,#41384D_0%,#2F3049_100%)] rounded-[8px] p-[1px]">
    <div className="w-[210px] h-[225px] sm:w-[237px] sm:h-[225px] lg:w-[320px] lg:h-[235px] xl:w-[364px] xl:h-[250px] flex-none relative flex flex-col items-center gap-[2px] lg:gap-[4px] xl:gap-[4px] px-[20px] pt-[135px] pb-[26px] lg:pt-[140px] lg:pb-[27px] xl:pt-[156px] xl:pb-[28px] rounded-[7px] bg-[radial-gradient(171.1%_141.34%_at_16.62%_-22.1%,_#3F3332_0%,_#392D36_16.67%,_#22223B_62.98%,_#1A1C30_100%)]">
      <div className="absolute left-0 translate-x-[15px] sm:translate-x-[28.333px] lg:translate-x-[40px] xl:translate-x-[49px] top-0 translate-y-[4px] sm:translate-y-[4px] lg:-translate-y-[20px] xl:-translate-y-[30px] w-[180px] h-[137px] lg:w-[220px] lg:h-[170px] xl:w-[266px] xl:h-[203px] flex justify-center items-center">
        <img 
          src={image} 
          className="w-full shrink-0" 
          alt="Card Image"
          draggable="false"
        />
      </div>
      <span className="text-[#fff] text-[16px] lg:text-[18px] xl:text-[20px] leading-[20px] lg:leading-[23px] xl:leading-[26px] font-bold tracking-[0.1px]">
        {title}
      </span> 
      <span className="text-[#9A9EC8] text-[11px] lg:text-[13px] xl:text-[14px] leading-[14px] lg:leading-[16px] xl:leading-[18px] font-bold tracking-[0.1px]">
        {description}
      </span>
    </div>
  </div>
);

BenefitsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BenefitsCard
