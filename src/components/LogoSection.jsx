import rustyLogo from '../assets/images/rustyLogo.png';

const LogoSection = () => {
  return (
    <>
      {/* XL screen size logo */}
      <div className="hidden xl:flex relative h-full min-w-[40px] max-w-[40px] xl:min-w-[324px] xl:max-w-[324px] items-center justify-center bg-[linear-gradient(35deg,_#322D31_-10.5%,_#312C31_-10.49%,_#21202E_15.8%,_#1A1D2F_42.49%)] cursor-pointer">
        <img 
          src={rustyLogo} 
          className="w-[40px] xl:w-auto inline-block" 
          alt="Logo" 
        />
      </div>
      {/* Mobile screen size logo */}
      <div className="xl:hidden relative h-full min-w-[40px] max-w-[40px] flex items-center justify-center cursor-pointer">
        <img 
          src={rustyLogo} 
          className="w-[28px]" 
          alt="Logo" 
        />
      </div>
    </>
  );
};

export default LogoSection;
 