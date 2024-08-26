import coins  from '../assets/images/coinsOrange.png';
import walletIcon from '../assets/images/wallet.svg';

const WalletBalance = () => {
  return (
    <div className="absolute xl:justify-center flex items-center">
      <div className="w-[124px] max-w-[124px] xl:w-[129px] xl:max-w-[129px] [40px] rounded-bl-[4px] rounded-tl-[4px] flex items-center bg-[linear-gradient(225deg,_#272B4C_64%,_#4F3C38_100%)] p-[1px]">
        <div className="relative w-full flex items-center gap-[8px] xl:gap-[9px] px-[12px] py-[9px] rounded-bl-[3px] rounded-tl-[3px] bg-[linear-gradient(270deg,_#202447_55%,_#2C2932_100%)]">
          <img 
            className="w-[14px] xl:w-[22px]" 
            src={coins} 
            alt="Coins" 
          />
          <div className="w-full text-[14px] flex text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFD691_0%,_#EEB351_54.17%)] font-bold">1450.00</div>
        </div>
      </div>
      <a className="w-[40px] xl:w-[101px] h-[40px] flex items-center justify-center xl:gap-[6px] xl:px-[16px] xl:py-[10px] border border-[#1BDC80] hover:border-[#81ffc3] h-[40px] rounded-tr-[4px] rounded-br-[4px] cursor-pointer relative bg-[linear-gradient(83deg,#04803D_0%,#35B46A_40.1%,#089142_71.88%,#26AD5F_100%)] hover:bg-[linear-gradient(83deg,#0BAC55_0%,#37BE6F_40.1%,#10B857_71.88%,#3CE081_100%)]">
        <div className="w-[20px] h-[20px] flex items-center justify-center">
          <img 
            className="w-[14px]" 
            src={walletIcon} 
            alt="Wallet" 
          />
        </div>
        <span className="text-[14px] text-white translate-y-[1px] font-bold hidden xl:block">Wallet</span>
      </a>
    </div>
  );
};

export default WalletBalance;
