import bannerAffiliates from '../assets/images/bannerAffiliates.png';


const Banner = () => {
  return (
    <>
      <div className="relative w-full sm:h-[225px] xl:h-[468px] self-stretch bg-[linear-gradient(107deg,_#17182F_0%,_#151628_67.29%)]">
        <img 
          src={bannerAffiliates} 
          className="absolute inset-0 w-full h-full hidden sm:block object-cover" 
          alt="Banner Affiliates"  
        />
        <div className="sm:absolute sm:top-0 sm:left-0 p-[16px] sm:translate-x-[40px] sm:translate-y-[55px] xl:translate-x-[236px] xl:translate-y-[155.5px] flex flex-col items-center sm:items-start gap-[16px] sm:gap-[20px] xl:gap-[40px]">
          <div className="flex flex-col items-center sm:items-start sm:gap-[6px]">
            <span className="text-[#fff] text-[20px] sm:text-[24px] xl:text-[40px] leading-[26px] sm:leading-[31px] xl:leading-[51px] font-bold tracking-[0.1px]">
              Earn with us
            </span>
            <span className="text-[#9A9EC8] text-[13px] sm:text-[14px] xl:text-[16px] leading-[17px] sm:leading-[18px] xl:leading-[20px] font-bold tracking-[0.1px]">
              Earn up to 4% on your friend&apos;s deposits
            </span>
          </div>

          {/* Affiliate Code Button */}
          <div className="w-full sm:w-auto flex h-[40px] items-center cursor-pointer">
            <div className="w-full flex items-center justify-center px-[16px] py-[10px] gap-[6px] rounded-[4px] border border-1 border-[#664B33] bg-[radial-gradient(63.62%_115%_at_46.04%_0%,_#473C39_0%,_#473C39_0.01%,_#202139_100%)]">
              <span className="text-[#FFB436] text-center text-[14px] leading-[18px] tracking-[0.1px] font-bold">Set Affiliate Code</span>
            </div>
          </div>
          
        </div>
      </div>
      <img src={bannerAffiliates} className="w-full h-full block sm:hidden" />
    </>
  )
}

export default Banner