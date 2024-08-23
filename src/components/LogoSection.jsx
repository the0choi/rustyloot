import rustyLogo from '../assets/images/smallLogo.1c6479f7.svg';

const LogoSection = () => {
  return (
    <>
      {/* XL screen size logo */}
      <div className="hidden xl:flex relative h-full min-w-[40px] max-w-[40px] xl:min-w-[324px] xl:max-w-[324px] items-center justify-center bg-logo-background cursor-pointer">
        <img src={rustyLogo} className="w-[40px] xl:w-auto inline-block" alt="Logo" />
      </div>
      {/* Mobile screen size logo */}
      <div className="xl:hidden relative h-full min-w-[40px] max-w-[40px] flex items-center justify-center cursor-pointer">
        <img src={rustyLogo} className="w-[28px]" alt="Logo" />
      </div>
    </>
  );
};

export default LogoSection;
