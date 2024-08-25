import menuIcon from '../assets/images/Menu.svg';

const MenuButton = () => {
  return (
    <div className="relative w-[40px] h-[40px] rounded-[4px] xl:hidden flex items-center justify-center">
      <img 
        src={menuIcon} 
        className="w-[17px] cursor-pointer" 
        alt="Menu Icon"
      />
    </div>
  );
};

export default MenuButton;

