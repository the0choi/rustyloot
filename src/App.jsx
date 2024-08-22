import rustyLogo from './assets/images/smallLogo.1c6479f7.svg';
import arrowDown from './assets/images/arrowDown.fd2bfb32.svg';
import enFlag from './assets/images/enFlag.f28a649c.svg';
import coins from './assets/images/coinStack.68852850.svg';
import profilePic from './assets/images/avatar.png';
import profileBadge from './assets/images/opalTierBadge.21f4a217.png';
import bellIcon from './assets/images/bell-solid-24.png';
import './App.css';

function App() {

  return (
    <div className="flex flex-col">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-[56px] max-h-[56px] xl:max-h-[118px] xl:h-[118px] flex items-center justify-between xl:items-start xl:justify-normal py-[8px] px-[16px] xl:p-0 bg-[#1A1D2F]">
        <div className="hidden xl:flex relative h-full min-w-[40px] max-w-[40px] xl:min-w-[324px] xl:max-w-[324px] items-center justify-center bg-logo-background cursor-pointer">
          <img src={rustyLogo} className="w-[40px] xl:w-auto inline-block" />
        </div>

        {/* Links */}
        <div className="relative h-full w-full flex flex-col xl:bg-header-footer-background  xl:max-w-none z-10">
          <div className="relative w-full min-h-[36px] h-[36px] rounded-bl-[4px] xl:flex items-center justify-start px-[40px] hidden gap-[20px] bg-[#191A2C]">
            <a className="text-[#6a6fa3] hover:text-[#9a9ec8] text-[14px] font-bold cursor-pointer">Earn with us</a>
            <a className="text-[#6A6FA3] hover:text-[#9a9ec8] text-[14px] font-bold cursor-pointer">Leaderboard</a>
            <a className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFD691] to-[#EEB351] hover:text-[#EEB351] text-[14px] font-bold cursor-pointer">Rewards</a>
            <div className="flex items-center gap-[6px] ml-auto cursor-pointer">
              <img className="w-[16px]" src={enFlag} />
              <span className="font-bold text-[13px] text-[#9A9EC8]">ENG</span>
              <div className="min-w-[16px] w-[16px] min-h-[16px] h-[16px] flex items-center justify-center whitespace-nowrap rounded bg-[radial-gradient(77.08%_101.71%_at_77.08%_-35.83%,rgb(56,60,92)_32.6%,rgb(45,49,70)_100%),linear-gradient(258.59deg,rgb(66,70,98)_45.82%,rgb(59,61,79)_99.34%)] border border-1 border-[#494B5E]">
                <img className="w-[7px] h-[4px]" src={arrowDown} />
              </div>
            </div>
          </div>

          <div className="relative w-full h-full flex items-center justify-center xl:justify-between xl:px-[40px]">
            {/* Games Button */}
            <div className="max-w-[143px] w-full h-10 hidden xl:block flex justify-between items-center bg-[linear-gradient(266deg,rgb(32,36,71)_54.3%,rgb(44,41,50)_96.88%),linear-gradient(259deg,rgb(39,43,76)_65.15%,rgb(79,60,56)_99.34%)] rounded-[4px] border border-1 border-white/5 cursor-pointer">
              <div className="flex justify-between items-center w-full h-full px-[12px]">
                <div className="flex gap-[8px] items-center">
                  <svg viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="12"><path d="M24 3.09675V4.40861H0V3.09675L1.7507 0H22.2493L24 3.09675Z" fill="#FFB436"></path><path d="M10.362 8.64753H13.638L14.0269 5.9087H9.97312L10.362 8.64753Z" fill="#FFB436"></path><path d="M2.96371 18H5.56562V15.5838H8.4879V18H15.5122V15.5838H18.4344V18H21.0363C22.6731 18 24 16.3433 24 14.2996V5.9087H15.9791L15.2495 11.0475H8.75045L8.0209 5.9087H0V14.2996C0 16.3433 1.32688 18 2.96371 18Z" fill="#FFB436"></path></svg>
                  <span className="text-white text-[14px] font-medium">Games</span>
                </div>
                <div className="flex items-center gap-[6px] sm:gap-[4px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none" width="10"><path d="M4.31952 5.75448L0.259075 1.45118C-0.0863586 1.11909 -0.0863585 0.581167 0.259076 0.249072C0.60451 -0.0830239 1.16402 -0.0830238 1.50947 0.249072L5.00002 3.94811L8.49054 0.249072C8.83597 -0.0830235 9.39549 -0.0830235 9.74092 0.249072C10.0864 0.581168 10.0864 1.11909 9.74092 1.45118L5.68048 5.75448C5.49384 5.93391 5.24442 6.01304 5.00001 5.99826C4.75558 6.01265 4.50617 5.93391 4.31952 5.75448Z" fill="#545784"></path></svg>
                </div>
              </div>
            </div>

            {/* Coin Balance & Wallet Button */}
            <div className="absolute translate-x-3 xl:left-1/2 xl:-translate-x-[40%] flex items-center w-full max-w-[164px] xl:max-w-[256px]">
              <div className="w-full max-w-[158px] h-10 rounded-[4px] border border-1 border-white/5 flex items-center bg-[linear-gradient(266deg,rgb(32,36,71)_54.3%,rgb(44,41,50)_96.88%),linear-gradient(259deg,rgb(39,43,76)_65.15%,rgb(79,60,56)_99.34%)]">
                <div className="relative w-full flex items-center gap-[8px] xl:gap-[9px] px-[12px] py-[10px]">
                  <img className="w-[16px] xl:w-[22px]" src={coins} />
                  <div className="w-full inline-block flex text-transparent bg-clip-text bg-coins-text-yellow
                      font-bold">0.00</div>
                </div>
                
              </div>
              <a className="w-full max-w-[40px] xl:max-w-[108px] flex items-center justify-center gap-[5px] whitespace-nowrap border border-[#1BDC80] hover:border-[#81ffc3] h-[40px] rounded-tr-[4px] rounded-br-[4px] cursor-pointer relative -translate-x-[10px] bg-wallet-button hover:bg-wallet-button-hover">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M12.1402 1.30054C10.8478 1.30054 9.79642 2.35195 9.79642 3.64429V5.42554H3.181L2.74792 4.24344C2.56951 3.75655 2.82029 3.21735 3.30756 3.03998L11.5038 0.0568124C11.6096 0.0182812 11.7179 0 11.8244 0C12.2086 0 12.569 0.23789 12.7066 0.620389L12.9513 1.30054H12.1402ZM11.2031 3.64434C11.2031 3.12656 11.6228 2.70684 12.1406 2.70684H18.4688C18.9865 2.70684 19.4062 3.12656 19.4062 3.64434V5.42559H11.2031V3.64434ZM21.8906 18.949H18.6094C16.6709 18.949 15.0938 17.3719 15.0938 15.4334C15.0938 13.4949 16.6709 11.9178 18.6094 11.9178H21.8906V8.70683C21.8906 7.67132 21.0511 6.83183 20.0156 6.83183H1.875C0.839484 6.83183 0 7.67132 0 8.70683V22.125C0 23.1605 0.839484 24 1.875 24H20.0156C21.0511 24 21.8906 23.1605 21.8906 22.125V18.949ZM18.6094 13.324H23.2969C23.6846 13.324 24 13.6394 24 14.0271V16.8396C24 17.2273 23.6846 17.5427 23.2969 17.5427H18.6094C17.4463 17.5427 16.5 16.5965 16.5 15.4334C16.5 14.2703 17.4463 13.324 18.6094 13.324ZM17.9062 15.4334C17.9062 15.8217 18.2211 16.1365 18.6094 16.1365C18.9977 16.1365 19.3125 15.8217 19.3125 15.4334C19.3125 15.0451 18.9977 14.7303 18.6094 14.7303C18.2211 14.7303 17.9062 15.0451 17.9062 15.4334Z" fill="#FFFFFF"></path></svg>
              <span className="text-[14px] text-white translate-y-[1px] font-bold hidden xl:block">Wallet</span>
              </a>
            </div>

            {/* Profile Settings */}
            <div className="relative hidden xl:block flex items-center justify-end gap-[10px]">
              <div className="flex items-center gap-[10px] cursor-pointer">
                {/* Profile Picture */}
                <div className="relative flex items-center justify-center">
                  <svg width="40" height="40">
                    <circle stroke="#404472" fill="none" r="19.25" cx="20" cy="20"></circle>
                    <circle stroke="#404472" fill="none" r="19.25" cx="20" cy="20" transform="rotate(-90 20 20)"></circle>
                  </svg>
                  <div className="absolute">
                    <img className="h=[34px] w-[34px] rounded-full p-0.5" src={profilePic} ></img>
                  </div>
                  <div className="absolute top-0 right-0 translate-x-[6px]">
                    <img className="w-[16px]" src={profileBadge} />
                  </div>
                </div>

                <div className="min-w-[16px] w-[16px] min-h-[16px] h-[16px] flex items-center justify-center whitespace-nowrap rounded bg-[radial-gradient(77.08%_101.71%_at_77.08%_-35.83%,rgb(56,60,92)_32.6%,rgb(45,49,70)_100%),linear-gradient(258.59deg,rgb(66,70,98)_45.82%,rgb(59,61,79)_99.34%)] border border-1 border-[#494B5E]">
                  <img className="w-[7px] h-[4px]" src={arrowDown} />
                </div>

                <div className="ml-[5px] min-w-[34px] w-[34px] min-h-[34px] h-[34px] flex items-center justify-center whitespace-nowrap rounded bg-[radial-gradient(77.08%_101.71%_at_77.08%_-35.83%,rgb(56,60,92)_32.6%,rgb(45,49,70)_100%),linear-gradient(258.59deg,rgb(66,70,98)_45.82%,rgb(59,61,79)_99.34%)] border border-1 border-[#494B5E]">
                  <img className="w-[16px] h-[16px]" src={bellIcon} />
                    <div className="absolute translate-x-[5px] -translate-y-[6px] w-[5px] h-[5px] p-[1px] rounded-full bg-[#27F278] ">
                    </div>
                  
                </div>
              </div>
            </div>

          </div>

          

        </div>
      </nav>

    </div>
  );
}

export default App;
