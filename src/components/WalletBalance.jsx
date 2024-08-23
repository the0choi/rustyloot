import coins from '../assets/images/coinStack.68852850.svg';
import walletIcon from '../assets/images/wallet.svg';

const WalletBalance = () => {
  return (
    <div className="absolute xl:justify-center flex items-center">
      <div className="w-[124px] max-w-[124px] xl:w-[129px] xl:max-w-[129px] h-[40px] rounded-[4px] border border-1 border-white/5 flex items-center bg-[linear-gradient(266deg,rgb(32,36,71)_54.3%,rgb(44,41,50)_96.88%),linear-gradient(259deg,rgb(39,43,76)_65.15%,rgb(79,60,56)_99.34%)]">
        <div className="relative w-full flex items-center gap-[8px] xl:gap-[9px] px-[12px] py-[11px]">
          <img className="w-[14px] xl:w-[22px]" src={coins} alt="Coins" />
          <div className="w-full text-[14px] flex text-transparent bg-clip-text bg-coins-text-yellow font-bold">1450.00</div>
        </div>
      </div>
      <a className="w-[101px] h-[40px] flex items-center justify-center gap-[6px] px-[16px] py-[10px] whitespace-nowrap border border-[#1BDC80] hover:border-[#81ffc3] h-[40px] rounded-tr-[4px] rounded-br-[4px] cursor-pointer relative bg-wallet-button hover:bg-wallet-button-hover">
        <div className="w-[20px] h-[20px] flex items-center justify-center">
          <img className="w-[14px]" src={walletIcon} alt="Wallet" />
        </div>
        <span className="text-[14px] text-white translate-y-[1px] font-bold hidden xl:block">Wallet</span>
      </a>
    </div>
  );
};

export default WalletBalance;
