import affiliatesBackground from '../assets/images/affiliatesBackground.png';
import dashboard from '../assets/images/dashboard.png';

const EarningsDashboard = () => {
  return (
    <div className="relative px-[16px] sm:px-[24px] py-[32px] sm:py-[64px] flex flex-wrap justify-center items-center gap-[16px] sm:gap-[24px] xl:gap-[80px] bg-[linear-gradient(107deg,_#17182F_0%,_#151628_67.29%)]">
      <img 
        src={affiliatesBackground} 
        className="absolute inset-0 w-full h-full block object-cover self-stretch opacity-30" 
      />
      <img 
        className="w-[344px] sm:w-[400px] xl:w-[668px] h-[193px] sm:h-[225px] xl:h-[376px] rounded-[4px] border border-[#2c3054] z-10" 
        src={dashboard} 
      />
      <div className="w-[344px] sm:w-[286px] xl:w-[397px] h-auto flex-col justify-start items-start gap-[6px] xl:gap-[16px] flex z-10">
        <span className="self-stretch text-[#FFF] text-left text-[18px] xl:text-[24px] leading-[23px] xl:leading-[31px] font-bold tracking-[0.1px]">
          Maximize your earnings <br/> with our Advanced Dashboard
        </span>
        <span className="self-stretch text-[#6a6fa3] text-left text-[11px] xl:text-[13px] leading-[14px] xl:leading-[17px] font-bold tracking-[0.1px]">
          As an affiliate you gain access to our top tier affiliate tracking system which 
          provides you with insights on your users habits and allows you to maximize your 
          earnings. Our advanced analytical tools give you the ability to identify popular 
          games, which days generate the most volume, and keep you informed about your 
          earnings and monthly projections.
        </span>
      </div>
    </div>
  )
}

export default EarningsDashboard