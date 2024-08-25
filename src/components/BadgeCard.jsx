import PropTypes from 'prop-types';


const BadgeCard = ({ badgeImage, badgeStyle, badgeName, textColor, backgroundColor, icon, textContent, semicircleGradient, circleGradient, bottomGradient, current }) => {
  return (
    <div className="min-w-[130px] xl:w-[170px] flex flex-col items-start">
      <div className={`relative h-[150px] xl:h-[215px] flex flex-col justify-end items-center xl:gap-[20px] self-stretch xl:pt-[34px] rounded-[6px] ${backgroundColor}`}>
        {current && (
          <div className="absolute right-0 top-0 h-[20px] px-[6px] py-[3px] border border-1 flex justify-center items-center gap-[4px] rounded-[4px] border-[#4A4E6B] bg-[radial-gradient(106.76%_124.95%_at_77.08%_-35.83%,_#3D4164_32.6%,_#353950_100%)] ">
            <span className="text-[#9A9EC8] text-[12px] font-bold leading-[15px] tracking-[0.1px]">
              Current
            </span>
          </div>
        )}
        <div className="w-[130px] xl:w-[170px] h-[42px] xl:h-[68.331px] absolute left-0 top-0 translate-y-[54px] xl:translate-y-[73px]">
          {semicircleGradient}
        </div>
        <div className="relative w-[54px] xl:w-[86px] h-[54px] xl:h-[86px] -translate-y-[17px] xl:-translate-y-[0px] shrink-0">
            {circleGradient}
          
          <img src={badgeImage} className={`shrink-0 z-10 absolute inset-0 ${badgeStyle}`} />
        </div>

        <div className={`pb-[20px] xl:pb-[34px] sm:h-[54.69995px] xl:h-auto flex flex-col justify-end items-center rounded-[6px] gap-[2px] xl:gap-[4px] shrink-0 self-stretch ${bottomGradient}`}>
          <span className="text-[#FFF] text-[14px] font-bold leading-[18px] tracking-[0.1px] z-10">
            {badgeName}
          </span>

          <div className="w-[73.7px] h-[18.7px] flex justify-center items-center gap-[2px] sm:gap-[4px] shrink-0">
            <div className="w-[12px] h-[12px] shrink-0">
              {icon}
            </div>
            <span className="text-[11px] sm:text-[12px] font-bold leading-[14px] sm:leading-[15px] tracking-[0.1px]" style={{ color: textColor }}>
              {textContent}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

BadgeCard.propTypes = {
  badgeImage: PropTypes.string.isRequired,
  badgeStyle: PropTypes.string.isRequired,
  badgeName: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.node,
  semicircleGradient: PropTypes.node,
  circleGradient: PropTypes.node,
  bottomGradient: PropTypes.node,
  current: PropTypes.bool
};


export default BadgeCard;
