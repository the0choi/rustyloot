import bannerAffiliates from '../assets/images/bannerAffiliates.png';


const Banner = () => {
  return (
    <div className="bg-[linear-gradient(107deg,_#17182F_0%,_#151628_67.29%)]">
      <div className="relative w-full sm:h-[225px] lg:h-[350px] xl:h-[468px] flex items-center justify-center p-[16px] sm:justify-start sm:pl-[40px] lg:pl-[130px] xl:pl-[236px] self-stretch bg-[linear-gradient(107deg,_#17182F_0%,_#151628_67.29%)]">
        <img 
          src={bannerAffiliates} 
          className="absolute inset-0 w-full h-full hidden sm:block object-cover opacity-50" 
          alt="Banner Affiliates"  
        />
        <div className="z-10 w-full flex flex-col items-center sm:items-start gap-[16px] sm:gap-[20px] lg:gap-[30px] xl:gap-[40px]">
          <div className="flex flex-col items-center sm:items-start gap-[2px] sm:gap-[6px]">
            <span className="text-[#fff] text-[20px] sm:text-[24px] lg:text-[30px] xl:text-[40px] leading-[26px] sm:leading-[31px] lg:leading-[41px] xl:leading-[51px] font-bold tracking-[0.1px]">
              Earn with us
            </span>
            <span className="text-[#9A9EC8] text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-[17px] sm:leading-[18px] lg:leading-[19px] xl:leading-[20px] font-bold tracking-[0.1px]">
              Earn up to 4% on your friend&apos;s deposits
            </span>
          </div>

          {/* Affiliate Code Button */}
          <div className="w-full sm:w-auto flex h-[40px] items-center cursor-pointer">
            <div className="w-full bg-[linear-gradient(180deg,_#664B33,_#876231,_#876231)] p-[1px] rounded-[4px]">
              <div className="w-full flex items-center justify-center px-[16px] py-[10px] gap-[6px] bg-[radial-gradient(63.62%_115%_at_46.04%_0%,_#473C39_0%,_#473C39_0.01%,_#202139_100%)] rounded-[3px]">
                <span className="text-[#FFB436] text-center text-[14px] leading-[18px] tracking-[0.1px] font-bold">Set Affiliate Code</span>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      <img src={bannerAffiliates} className="w-full h-[160px] block sm:hidden object-cover opacity-50" />
    </div>
  )
}

export default Banner